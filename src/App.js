import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <NavMenu />
      <Cart />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products/:handle'>
          <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
