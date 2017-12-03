import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import './App.css';
import ImagePage from './ImagePage'
import ImageShow from './ImageShow'
import About from '../components/About'

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
          <Route exact path='/favorites' render={() =>  <h3>Favorites</h3> }/>
          <Route exact path='/about' component={About}/>
          <Route path='/:imageId' component={ImageShow}/>
        </div>
      </Router>
    );
  }

}

export default App;
