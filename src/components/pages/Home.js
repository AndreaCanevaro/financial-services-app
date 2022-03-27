import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../App.css';
import TableHeader from '../sections/table/TableHeader';
import Cards from '../Cards';
/*import HeroSection from '../HeroSection';*/
import Footer from '../Footer';

function Home() {
  return (
    <>
      <TableHeader />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
