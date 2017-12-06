import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFavorites } from '../actions/favoriteActions.js'
import FavoritesLi from '../components/favoritesLi'

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
                {favorites.sort((a,b) => {
                    return b.count - a.count;
                        }).map((favorite, index) => <FavoritesLi key={index} favorite={favorite} /> )}
            </ul>
        </div>
        )
    }    
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        favorites: state.favorites
    })
}

export default connect(mapStateToProps, { getFavorites })(FavoritesPage)