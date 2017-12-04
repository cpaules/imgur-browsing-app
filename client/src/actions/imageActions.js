import fetch from 'isomorphic-fetch';

// ** Action Creators **

const setImages = images => {
  return {
    type: 'GET_IMAGES_SUCCESS',
    images
  }
}

const addFavorite = favorite => {
  return {
    type: 'CREATE_FAVORITE_SUCCESS',
    favorite
  }
} 

// ** Async Actions **

export const getImages = () => {
  return dispatch => {
    return fetch('https://api.imgur.com/3/gallery/hot/viral/day/0', { 
      headers: { 'Authorization': 'Client-ID 93482c2dc9b13f9' }
    })
    .then(response => response.json())
    .then(({ data }) => dispatch(setImages(data)))
    .catch(error => console.log(error));
  }
}

export const createFavorite = favorite => {
  return dispatch => {
    return fetch('http://localhost:3001/api/favorites', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ favorite: favorite })
    })
      .then(response => response.json())
      .then(favorite => {
        dispatch(addFavorite(favorite))
      })
      .catch(error => console.log(error))
  }
}