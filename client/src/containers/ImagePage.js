import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import './Images.css'
import ImageCard from '../components/ImageCard'
import { getImages } from '../actions/imageActions'
import ImageShow from './ImageShow'

class Images extends Component {


    componentDidMount() {
        this.props.getImages()
    }

    render() {
        const { match, images } = this.props;

        return (
        <div className="ImagesContainer">
            {images.map(image => < ImageCard key={image.id} image={image} /> )}
            <Route path={`${match.url}/:imageId`} component={ImageShow}/>
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