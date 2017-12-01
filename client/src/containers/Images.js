import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Images.css'
import ImageCard from '../components/ImageCard'

class Images extends Component {


    componentDidMount() {
        
    }

    render() {
        return (
        <div className="ImagesContainer">
            <h1> Imgur Images </h1>
            {this.props.images.map(image => < ImageCard key={image.id} image={image} /> )}
        </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return ({
        images: state.images
    })
}

export default connect(mapStateToProps)(Images)