// Widgets
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import MapView from '@arcgis/core/views/MapView';
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';
import { attribution } from './widgets/Attribution';
import { basemapToggle } from './widgets/BasemapToggle';
import { compass } from './widgets/Compass';
import { home } from './widgets/Home';
import { scaleBar } from './widgets/ScaleBar';
import { zoom } from './widgets/Zoom';
// import Search from '@arcgis/core/widgets/Search';
// import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';

interface initWidgetsProps {
  view: MapView;
  layer: MapImageLayer;
}

export function initWidgets({ view /*, layer */ }: initWidgetsProps): MapView {
  const legend = new Legend({ view });
  const layerList = new LayerList({ view });
  view.ui.add(legend, 'bottom-left');
  view.ui.add(layerList, 'top-right');
  view.ui.add(home, 'top-left');
  view.ui.add(zoom, 'top-left');
  view.ui.add(compass, 'top-left');
  view.ui.add(basemapToggle, 'bottom-right');
  view.ui.add(scaleBar, 'bottom-left');
  view.ui.add(attribution, 'manual');

  // new Search({
  //   container: 'searchDiv',
  //   sources: [
  //     new LayerSearchSource({
  //       layer,
  //       outFields: [
  //         'own_name',
  //         'parcel_id',
  //         'state_par_',
  //         'pli_code',
  //         'custom_size',
  //         'av_nsd',
  //         'twn',
  //         'rng',
  //         'sec',
  //         's_legal',
  //       ],
  //       searchFields: ['own_name'],
  //       suggestionTemplate:
  //         '{own_name}, {parcel_id}, {state_par_}, {pli_code}, {custom_size}, {av_nsd}, {twn}, {rng}, {sec}, {s_legal}',
  //       placeholder: 'Search by Some kind of name',
  //     }),
  //   ],
  // });
  return view;
}
