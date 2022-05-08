import { view } from './MapView';
import Compass from '@arcgis/core/widgets/Compass';

export const compass = new Compass({
  view: view,
});
