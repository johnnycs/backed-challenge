import {combineReducers} from 'redux';
import {product, search} from './reducer';

const rootReducer = combineReducers({
  product,
  search: search
})
export default rootReducer;
