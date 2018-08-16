export function editItem(productItem) {
  return {
    type: 'ITEM_SELECTED',
    payload: productItem
  };
}
