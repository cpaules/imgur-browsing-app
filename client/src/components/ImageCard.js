import React from 'react';

const ImagesCard = ({ image }) => (
    <div key={image.id} className="ImageCard">
      <img className="ImgurImage" src={image.link} alt={image.title} />
      <p className="ImgurImageTitle"> {image.title} </p>
    </div>
  )
  
export default ImagesCard;