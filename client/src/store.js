import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const imagesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_IMAGES_SUCCESS':
            return action.images;
    
        default: 
            return state;
    }
}

const reducers = combineReducers({
    images: imagesReducer
});

const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
  );