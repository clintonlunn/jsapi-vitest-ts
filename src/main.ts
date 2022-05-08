import config from '@arcgis/core/config';
import { parcelsLayer } from './layers/ParcelLayer';
// import { selectionLayer } from './layers/SelectionLayer';
import { initWidgets } from './widgets';

import './style.css';
import { view } from './widgets/MapView';

config.apiKey = import.meta.env.VITE_API_KEY as string;

parcelsLayer.when(() => {
  view.goTo(parcelsLayer.fullExtent);
});

view.when(() => initWidgets({ view, layer: parcelsLayer }));
