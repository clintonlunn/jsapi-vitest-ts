// import { highlightSymbol, parcelsLayerURL } from '../config/constants';
// import { parcelsSearchTemplate } from '../util/ParcelSearchTemplate';
// import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
// import { view } from './MapView';
// import Search from '@arcgis/core/widgets/Search';

// const searchWidget = new Search({
//   container: 'searchWidgetDiv',
//   view: mapView,
//   allPlaceHolder: 'Text search for Parcel ID',
//   sources: [
//     {
//       featureLayer: {
//         url: parcelsLayerURL,
//         popupTemplate: parcelsSearchTemplate,
//       },
//       searchFields: ['parcel_id', 'state_par_', 'own_city', 'own_name'],
//       suggestionTemplate: 'PID: {parcel_id}, State PID: {state_par_}, City: {own_city}, Parcel Name: {own_name}',
//       displayField: 'PLI_CODE',
//       exactMatch: false,
//       outFields: [
//         'pli_code',
//         'parcel_id',
//         'own_name',
//         'own_state',
//         'state_par_',
//         'custom_size',
//         'av_nsd',
//         'twn',
//         'sec',
//         's_legal',
//         'rng',
//       ],
//       name: 'Florida Public Land Inventories Parcels',
//       placeholder: 'Search by Parcel ID, City, or County',
//       resultGraphicEnabled: true,
//       resultSymbol: highlightSymbol,
//       autoNavigate: false,
//       popupEnabled: false,
//     },
//     {
//       locator: new Locator({
//         url: '//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer',
//       }),
//       singleLineFieldName: 'SingleLine',
//       name: 'Geocoder',
//       localSearchOptions: {
//         minScale: 300000,
//         distance: 50000,
//       },
//       placeholder: 'Search Geocoder',
//       maxResults: 3,
//       maxSuggestions: 6,
//       suggestionsEnabled: true,
//       minSuggestCharacters: 0,
//       countryCode: 'US',
//     },
//   ],
// });
