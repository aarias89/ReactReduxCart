import { combineReducers } from 'redux';
import ProductItemsReducer from './reducer_product_items';

const rootReducer = combineReducers({
  productItems: ProductItemsReducer
});

export default rootReducer;
