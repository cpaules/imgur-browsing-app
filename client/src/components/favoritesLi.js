import React, { Component } from 'react';

class favoritesLi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        
    }

    handleOnClick = () => { 
        this.setState({count: this.state.count + 1})
    }

    render() {
        const { favorite } = this.props;
        return (
            <li> 
                Title: {favorite.title}  URL: {favorite.url} 
                <button type="button" onClick={this.handleOnClick}>Like count: {this.state.count}</button>
            </li>

        )
    }
}

export default favoritesLi
    