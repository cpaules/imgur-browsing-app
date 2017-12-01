import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Images.css'
import ImageCard from '../components/ImageCard'
import { getImages } from '../actions/imageActions'

class Images extends Component {


    componentDidMount() {
        this.props.getImages()
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

export default connect(mapStateToProps, { getImages })(Images)