
import fetch from 'isomorphic-fetch';
export function fetchImages() {

  //resp = 60 images
  
  //resp.data[0].id
  //resp.data[0].title
  //resp.data[0].images[0].link

  return function(dispatch){
    dispatch({type: 'LOADING_IMAGES'})
    return fetch('https://api.imgur.com/3/gallery/hot/viral/day/0', { 
      headers: {
        'Authorization': Client-ID 93482c2dc9b13f9
      }
    })
      .then(res => { return res.json() })
      .then(responseJson => {
        dispatch({type: 'FETCH_IMAGES', payload: responseJson.images})
    })
  }
}