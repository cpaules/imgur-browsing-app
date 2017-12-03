import React from 'react';
import { connect } from 'react-redux';

const ImageShow = (props) => 
  <div className="ImageShow">
    
  </div>

const mapStateToProps = (state, ownProps) => {
  const image = state.images.find(image => image.id === +ownProps.match.params.imageId)
  {console.log(state)}
  if (image) {
    return { image }
  } else {
    return { image: {} }
  }
};

export default connect(mapStateToProps)(ImageShow);