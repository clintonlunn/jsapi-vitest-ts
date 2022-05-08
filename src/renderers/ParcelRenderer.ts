import ClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer';
import { createSymbol } from '../util/util';

export const parcelRenderer = new ClassBreaksRenderer({
  field: 'pli_code',
  legendOptions: {
    title: 'Land Owner Index',
  },
  classBreakInfos: [
    {
      minValue: 0,
      maxValue: 2000,
      label: 'State Lands',
      symbol: createSymbol('#7fc97f'),
    },
    {
      minValue: 2000,
      maxValue: 3000,
      label: 'Volunteer Fire Department Lands',
      symbol: createSymbol('#e41a1c'),
    },
    {
      minValue: 3000,
      maxValue: 4000,
      label: 'Federal Lands',
      symbol: createSymbol('#a65628'),
    },
    {
      minValue: 4000,
      maxValue: 5000,
      label: 'County Lands',
      symbol: createSymbol('#984ea3'),
    },
    {
      minValue: 5000,
      maxValue: 6000,
      label: 'Municipal Lands',
      symbol: createSymbol('#386cb0'),
    },
    {
      minValue: 6000,
      maxValue: 7000,
      label: 'Other or Non-Private Lands',
      symbol: createSymbol('#f0027f'),
    },
    {
      minValue: 7000,
      maxValue: 8999,
      label: 'Special District Lands',
      symbol: createSymbol('#fec44f'),
    },
  ],
});
