import React from 'react';

const ImagesCard = ({ image }) => (
    <div key={image.id} className="ImageCard">
      {image.is_album ? 
      <a href={image.id}><img className="ImgurImage" src={image.images[0].link} alt={image.title} /></a> 
      : <a href={image.id}><img className="ImgurImage" src={image.link} alt={image.title} /></a> }
      <p className="ImgurImageTitle"> {image.title} </p>
    </div>
  )
  
export default ImagesCard;