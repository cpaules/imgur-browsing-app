import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import './App.css';
import ImagePage from './ImagePage'
import ImageShow from './ImageShow'
import About from '../components/About'
import FavoritesPage from './FavoritesPage'
import Footer from '../components/Footer'

class App extends Component {

  render() {
    return (
      <Router>      
        <div className="App">
          <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
            <NavLink style={{ marginRight: '10px' }} to="/">Home</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/favorites">Favorites</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/about">About</NavLink> 
          </div>
          <Switch>
            <Route exact path="/" component={ImagePage} />
            <Route path='/favorites' component={FavoritesPage}/>
            <Route path='/about' component={About}/>
            <Route path='/:imageId' component={ImageShow}/>
          </Switch>
          <Footer title={"Images Courtesy of Imgur's API"}/>
        </div>
      </Router>
    );
  }

}

export default App;
