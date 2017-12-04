export default (state= [], action) => {
    switch ( action.type ) {
      case 'GET_FAVORITES_SUCCESS':
        return action.favorites;
      case 'CREATE_FAVORITES_SUCCESS':
        return state.concat(action.favorite);
      default:
        return state;
    }
}