import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Help from './Components/Help';
import Home from './Components/Home';
import About from './Components/About';
import Registration from './Components/Registration';
import Queue from './Components/Queue';
import Specialist from './Components/Specialist'
import {Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      <Switch>
        <Route path='/' exact render = {() => <Home />} />
        <Route path='/register' render = {() => <Registration/>} />
        <Route path='/about' render ={() => <About />} />
        <Route path='/help' render ={() => <Help />} />
        <Route path='/queue' render ={() => <Queue />} />
        <Route path='/specialist' render ={() => <Specialist />} />
      </Switch>

      <Footer />
      </div>
    );
  }
}

export default App;
