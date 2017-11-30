import React from 'react';
import './Images.css'

const Images = (props) => (
    <div>
        <h1> Imgur Images </h1>
        {props.images.map(image => 
            <div className="ImageCard">
                <img className="ImgurImage" src={image.link} alt={image.title} />
                <p className="ImgurImageTitle"> {image.title} </p>
            </div>
        )}
    </div>
)

export default Images