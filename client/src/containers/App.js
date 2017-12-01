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
