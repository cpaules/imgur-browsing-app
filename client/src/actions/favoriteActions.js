import fetch from 'isomorphic-fetch';

// ** Action Creators **

const addFavorite = favorite => {
  return {
    type: 'CREATE_FAVORITE_SUCCESS',
    favorite
  }
} 
  
const setFavorites = favorites => {
  return {
    type: 'GET_FAVORITES_SUCCESS',
    favorites
  }
}

// ** Async Actions **

export const createFavorite = favorite => {
  debugger
  return dispatch => {
    debugger
    return fetch('http://localhost:3001/api/favorites', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ favorite: favorite })
    })
      .then(response => response.json())
      .then(favorite => {
        debugger
      })
      .catch(error => console.log(error))
  }
}

export const getFavorites = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/favorites')
      .then(response => response.json())
      .then(favorites => dispatch(setFavorites(favorites)))
      .catch(error => console.log(error));
  }
}
