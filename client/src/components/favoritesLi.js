import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCount } from '../actions/favoriteActions.js'

class favoritesLi extends Component {

    handleOnClick = () => {
        this.props.updateCount(this.props.favorite)
    }

    render() {
        const { title, url, count } = this.props.favorite;
        return (
            <li> 
                Title: {title}  URL: {url} 
                <button type="button" onClick={this.handleOnClick}>
                Like count: {count}
                </button>
            </li>
        )
    }
}

const mapStateToProps = state => {
    return {
      favorites: state.favorites
    }
  }

export default connect(mapStateToProps, { updateCount })(favoritesLi)