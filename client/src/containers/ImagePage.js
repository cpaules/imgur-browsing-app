import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Images.css'
import ImageCard from '../components/ImageCard'
import { getImages } from '../actions/imageActions'

class ImagePage extends Component {


    componentDidMount() {
        this.props.getImages()
    }

    render() {
        const { images } = this.props;

        return (
        <div className="ImagesContainer">
            {images.map(image => < ImageCard key={image.id} image={image} /> )}
        </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return ({
        images: state.images
    })
}

export default connect(mapStateToProps, { getImages })(ImagePage)