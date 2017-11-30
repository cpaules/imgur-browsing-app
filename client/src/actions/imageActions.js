
import fetch from 'isomorphic-fetch';
export function fetchImages() {

  return function(dispatch){
    dispatch({type: 'LOADING_CATS'})
    return fetch('https://api.imgur.com/3/gallery/hot/viral/day/0')
      .then(res => { return res.json() })
      .then(responseJson => {
        dispatch({type: 'FETCH_IMAGES', payload: responseJson.images})
    })
  }
}