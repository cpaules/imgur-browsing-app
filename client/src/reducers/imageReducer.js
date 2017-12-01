export default (state= {loading: false, pictures: []}, action) => {
    switch ( action.type ) {
      case 'GET_IMAGES_SUCCESS':
        return action.images;
      case 'LOADING_IMAGES':
        return {...state, loading: true}
      case 'FETCH_IMAGES':
        return {...state, loading: false, pictures: action.payload}
      default:
        return state;
    }
  
}