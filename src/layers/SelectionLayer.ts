import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

export const selectionLayer = new GraphicsLayer({
  listMode: 'hide',
  visible: true,
});
