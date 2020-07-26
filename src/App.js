import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article/index';

const App = () => {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/articles/:id" component={Article}/>
      <Route path="/" component={Home}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
