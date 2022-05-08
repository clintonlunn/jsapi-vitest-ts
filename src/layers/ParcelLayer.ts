import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import { parcelsLayerURL } from '../config/constants';
import { parcelRenderer } from '../renderers/ParcelRenderer';

export const parcelsLayer = new MapImageLayer({
  url: parcelsLayerURL,
  title: 'Parcels Layer',
  sublayers: [
    {
      id: 0,
      title: 'State Agencies',
      visible: true,
      minScale: 150000,
      renderer: parcelRenderer,
    },
  ],
});
