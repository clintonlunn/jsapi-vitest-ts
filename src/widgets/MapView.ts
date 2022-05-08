import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import { parcelsLayer } from '../layers/ParcelLayer';

export const view = new MapView({
  container: 'viewDiv',
  map: new Map({
    basemap: 'arcgis-topographic',
    // layers: [parcelsLayer, selectionLayer],
    layers: [parcelsLayer],
  }),
});
