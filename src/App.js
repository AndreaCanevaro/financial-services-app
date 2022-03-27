import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InvestmentPortfolios from './components/pages/InvestmentPortfolios';
import MoreServices from './components/pages/MoreServices';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/investmentportfolios' component={InvestmentPortfolios} />
          <Route path='/moreservices' component={MoreServices} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
