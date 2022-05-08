import { view } from './MapView';
import Zoom from '@arcgis/core/widgets/Zoom';

export const zoom = new Zoom({
  view: view,
});
