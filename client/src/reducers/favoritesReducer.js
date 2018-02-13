export default (state= [], action) => {
    switch ( action.type ) {
      case 'GET_FAVORITES_SUCCESS':
        return action.favorites
      case 'CREATE_FAVORITE_SUCCESS':
        return [...state, action.favorite]
      case 'UPDATE_FAVORITE_COUNT':
        // let oldFavIndex = state.findIndex(function(fav){ return fav.id === action.favorite.id})
        // let newState = state.slice(0 , oldFavIndex).concat(action.favorite).concat(state.slice(oldFavIndex + 1))

        let newState = state.map(fav => fav.id === action.favorite.id ? action.favorite : fav)
        return newState
      default:
        return state;
    }
}
