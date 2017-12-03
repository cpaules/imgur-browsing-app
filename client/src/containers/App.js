import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import './App.css';
import ImagePage from './ImagePage'
import ImageShow from './ImageShow'
//import NavBar from '../components/NavBar'

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
          <Route exact path="/" component={ImagePage} />
          <Route path='/favorites' render={() =>  <h3>Favorites</h3> }/>
          <Route path='/about' render={() =>  <h3>About</h3> }/>
          <Route path='/:imageId' component={ImageShow}/>
        </div>
      </Router>
    );
  }

}

export default App;
