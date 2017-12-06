import React, { Component } from 'react';
import { connect } from 'react-redux';
import { patchFavorite } from '../actions/favoriteActions.js'

class favoritesLi extends Component {

    handleOnClick = () => {
        // this.props.favorite.count += 1
        this.props.patchFavorite(this.props.favorite)
    }

    callApi = () => {
        console.log('a')
        fetch('http://localhost:3001/api/favorites')
          .then(response => {
                console.log('b')
                return response.json()})
          .then(favorites => console.log('c', favorites))
        console.log('d')
    }

    render() {
        const { title, url, count } = this.props.favorite;
        return (
            <li> 
                Title: {title}  URL: {url} 
                <button type="button" onClick={this.callApi}>Call Api</button>
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

export default connect(mapStateToProps, { patchFavorite })(favoritesLi)