import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../App.css';
import TableData from '../sections/table/TableData';
import Cards from '../Cards';
/*import HeroSection from '../HeroSection';
import TableAssets from '../TableAssets';*/
import Footer from '../Footer';

function Home() {
  return (
    <>
      <TableData />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
