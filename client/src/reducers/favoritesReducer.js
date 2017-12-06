export default (state= [], action) => {
    switch ( action.type ) {
      case 'GET_FAVORITES_SUCCESS':
        return action.favorites
      case 'CREATE_FAVORITE_SUCCESS':
        return [...state, action.favorite]
      case 'UPDATE_FAVORITE_COUNT':
        return [...state] 
      default:
        return state;
    }
}
