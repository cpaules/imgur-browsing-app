
import fetch from 'isomorphic-fetch';
export function getImages() {

  //resp = 60 images
  
  //resp.data[0].id
  //resp.data[0].title
  //resp.data[0].images[0].link

  return function(dispatch){
    dispatch({type: 'LOADING_IMAGES'})
    fetch('https://api.imgur.com/3/gallery/hot/viral/day/0', { 
      headers: { 'Authorization': 'Client-ID 93482c2dc9b13f9' }
    })
    .then(function(response) {
      response.json()
      .then(function(data) {
        console.log(data)
      })
    })
    //.then(imgur => this.setState( { data }))
  }
}