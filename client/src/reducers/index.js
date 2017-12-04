import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import favoritesReducer from './favoritesReducer'

const rootReducer =  combineReducers({
    images: imageReducer,
    favorites: favoritesReducer
  });
  
export default rootReducer;