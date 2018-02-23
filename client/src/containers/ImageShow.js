import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { createFavorite } from '../actions/favoriteActions.js'

class ImageShow extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  handleOnClick = (e, favoriteData) => {
    e.preventDefault()
    this.props.createFavorite(favoriteData, this.props.history) 
  }
  
  render() {
    const { image } = this.props;
    const favoriteData = {title: image.title, url: image.link, count: 0}

    return (
      <div className="ImageShow"> 
      <h2>{image.title}</h2>
      <Link to='/favorites' onClick={(e) => this.handleOnClick(e, favoriteData)}>Add to favorites</Link>
        <div id="images">
          {image.is_album ? 
            image.images[0].type === "video/mp4" ?
              <video autoplay="autoPlay" loop="loop"> 
                <source src={image.images[0].link} type="video/mp4"></source> 
              </video> 
              :              
              (image.images.forEach(childImage => {
                  var img = document.createElement('img') 
                  img.src = childImage.link       
                  img.className = "FullImage"
                  img.alt = childImage.id  
                  setTimeout(() => {document.getElementById("images").appendChild(img)}, 100)                            
              }) )
          : <img className="FullImage" src={image.link} alt={image.title} /> }
        </div>
      </div>
    )
  }
}
  

const mapStateToProps = (state, ownProps) => {
  const image = state.images.find(image => image.id === ownProps.match.params.imageId)

  if (image) {
    return { image }
  } else {
    return { image: {} }
  }
};

export default connect(mapStateToProps, { createFavorite })(ImageShow);