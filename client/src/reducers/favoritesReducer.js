export default (state= [], action) => {
    switch ( action.type ) {
      case 'GET_FAVORITES_SUCCESS':
        return action.favorites;
      default:
        return state;
    }
}