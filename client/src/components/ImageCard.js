import React from 'react';
import { Link } from 'react-router-dom'

const ImagesCard = ({ image }) => (
    <div key={image.id} className="ImageCard">
      
      {image.is_album ? 
        image.images[0].type === "video/mp4" ?
          <Link to={image.id}> <img className="ImgurImage" src="/play-icon.png" alt={image.title}/> </Link>          
          : <Link to={image.id}> <img className="ImgurImage" src={image.images[0].link} alt={image.title}/> </Link>
      : <Link to={image.id}> <img className="ImgurImage" src={image.link} alt={image.title} /> </Link> }
      <p className="ImgurImageTitle"> {image.title} </p>
      
    </div>
  )
  
export default ImagesCard;