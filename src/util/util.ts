import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

export const createSymbol = (color: string): SimpleFillSymbol => {
  return new SimpleFillSymbol({
    color: color,
    style: 'solid',
    outline: {
      width: 0.75,
      color: [0, 0, 0, 0.2],
    },
  });
};
