import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFavorites } from '../actions/favoriteActions.js'

class FavoritesPage extends Component {

    componentDidMount() {
        this.props.getFavorites()
    }

    render() {
        const { favorites } = this.props;
        return (
        <div className="FavoritesList">
            <h1>Favorites</h1>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>Title: {favorite.title}  URL: {favorite.url}
                    
                    </li>
                ))}
            </ul>
        </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return ({
        favorites: state.favorites
    })
}

export default connect(mapStateToProps, { getFavorites })(FavoritesPage)