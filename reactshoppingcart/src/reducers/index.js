import { combineReducers } from 'redux';
import ProductItemsReducer from './reducer_product_items';
import SelectedItemReducer from './reducer_selected_item'

const rootReducer = combineReducers({
  productItems: ProductItemsReducer,
  selectedItem: SelectedItemReducer
});

export default rootReducer;
