import { view } from './MapView';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';

export const basemapToggle = new BasemapToggle({
  view: view,
  nextBasemap: 'satellite',
});
