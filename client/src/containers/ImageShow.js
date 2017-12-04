import React from 'react';
import { connect } from 'react-redux';


const ImageShow = ({ image }) => 
  <div className="ImageShow"> 
    <h2>{image.title}</h2>
    <div id="images">
    {image.is_album ? (
        image.images.forEach(function(childImage) {
            var img = document.createElement('img') 
            img.src = childImage.link       
            img.className = "FullImage"
            img.alt = childImage.id  
            setTimeout(function(){document.getElementById("images").appendChild(img)}, 1000)            
                 
        }) )
      : <img className="FullImage" src={image.link} alt={image.title} /> }
      </div>
  </div>

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  const image = state.images.find(image => image.id === ownProps.match.params.imageId)

  if (image) {
    return { image }
  } else {
    return { image: {} }
  }
};

export default connect(mapStateToProps)(ImageShow);