import React from 'react';

const ImagesCard = ({ image }) => (
    <div key={image.id} className="ImageCard">
      {image.is_album ? 
      <img className="ImgurImage" src={image.images[0].link} alt={image.title} /> 
      : <img className="ImgurImage" src={image.link} alt={image.title} /> }
      <p className="ImgurImageTitle"> {image.title} </p>
    </div>
  )
  
export default ImagesCard;