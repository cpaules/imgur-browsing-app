import React from 'react';

const Images = (props) => (
    <div>
        <h1> Imgur Images </h1>
        {props.images.map(image => 
            <div className="imageCard">
                <img src={image.link} alt={image.title} />
            </div>
        )}
    </div>
)

export default Images