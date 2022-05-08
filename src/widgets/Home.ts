import { view } from './MapView';
import Home from '@arcgis/core/widgets/Home';

// Map widgets
export const home = new Home({
  view: view,
});
// mapView.ui.add(home, 'top-left');
