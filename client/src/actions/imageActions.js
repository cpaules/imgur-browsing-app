import fetch from 'isomorphic-fetch';

// ** Action Creators **

const setImages = images => {
  return {
    type: 'GET_IMAGES_SUCCESS',
    images
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