export default function imageReducer(state= {loading: false, pictures: []}, action) {
    switch ( action.type ) {
      case 'LOADING_IMAGES':
        return {...state, loading: true}
      case 'FETCH_IMAGES':
        return {...state, loading: false, pictures: action.payload}
      default:
        return state;
    }
  
  }