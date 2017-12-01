import React, { Component } from 'react';
import './Images.css'
import ImageCard from '../components/ImageCard'

class Images extends Component {

    render() {
        return (
        <div className="ImagesContainer">
            <h1> Imgur Images </h1>
            {this.props.images.map(image => < ImageCard key={image.id} image={image} /> )}
        </div>
        )
    }    
}

export default Images