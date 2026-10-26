import { defaults } from '@jochenklar/maps'

import groups from './maps.json'

export default {
  view: {
    center: [52.51, 13.37628],
    zoom: 10,
  },
  // arrays replace the defaults, so the default external maps are extended explicitly
  external: [
    ...defaults.external,
    {
      name: 'BikeRouter',
      url: 'https://bikerouter.de/#map={zoom}/{lat}/{lng}/standard',
    },
  ],
  groups,
}
