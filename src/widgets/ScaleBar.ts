import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import { view } from './MapView';

export const scaleBar = new ScaleBar({
  view: view,
});
