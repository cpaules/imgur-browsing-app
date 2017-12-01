import React, { Component } from 'react';
import './App.css';
import Images from './Images'

// const images = [
//   {
//     id: "asdj",
//     title: "title1",
//     link: "https://i.imgur.com/uOOY2zZ.jpg"
//   },
//   {
//     id: "asda",
//     title: "title2",
//     link: "https://i.imgur.com/4uuNGG4.jpg"
//   },
//   {
//     id: "fasf",
//     title: "title3",
//     link: "https://i.imgur.com/tlkRooa.jpg"
//   }
// ]

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      images: []
    }
  }

  componentDidMount() {
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

  render() {
    return (
        <div className="App">
          app
          <Images images={this.state.images} />
        </div>
    );
  }

}

export default App;
