import React, { Fragment } from 'react';
import './TableData.css';

import TableHeader from './TableHeader';
import Table from './Table';

const holdsData = [
  {
    name: 'Pilbara Minerals (PLS:ASX)',
    action: 'HOLD',
    rank: '1',
    strategy: 'Mom',
    quantity: '1,188',
    entrydate: '15 Dec 21',
    entryprice: '$2.75',
    currentprice: '$2.80',
    currentvalue: '$4,726.80',
    returnpercentage: '16.37%',
  },
  {
    name: 'South32 (S32:ASX)',
    action: 'HOLD',
    rank: '2',
    strategy: 'Mom',
    quantity: '1,188',
    entrydate: '15 Dec 21',
    entryprice: '$2.75',
    currentprice: '$2.80',
    currentvalue: '$4,726.80',
    returnpercentage: '16.37%',
  },
  {
    name: 'IGO (IGO:ASX)',
    action: 'HOLD',
    rank: '3',
    strategy: 'Mom',
    quantity: '1,188',
    entrydate: '15 Dec 21',
    entryprice: '$2.75',
    currentprice: '$2.80',
    currentvalue: '$4,726.80',
    returnpercentage: '16.37%',
  },
  {
    name: 'Woodside Petroleum (WPL:ASX)',
    action: 'BUY',
    rank: '4',
    strategy: 'Mom',
    quantity: '1,188',
    entrydate: '15 Dec 21',
    entryprice: '$2.75',
    currentprice: '$2.80',
    currentvalue: '$4,726.80',
    returnpercentage: '16.37%',
  },
  {
    name: 'Computershare (CPU:ASX)',
    action: 'BUY',
    rank: '5',
    strategy: 'Mom',
    quantity: '1,188',
    entrydate: '15 Dec 21',
    entryprice: '$2.75',
    currentprice: '$2.80',
    currentvalue: '$4,726.80',
    returnpercentage: '16.37%',
  },
  {
    name: 'Origin Energy (ORG:ASX)',
    action: 'SELL',
    rank: '6',
    strategy: 'Mom',
    quantity: '1,188',
    entrydate: '15 Dec 21',
    entryprice: '$2.75',
    currentprice: '$2.80',
    currentvalue: '$4,726.80',
    returnpercentage: '16.37%',
  },
  {
    name: 'Metcash (MTS:ASX)',
    action: 'SELL',
    rank: '7',
    strategy: 'Mom',
    quantity: '1,188',
    entrydate: '15 Dec 21',
    entryprice: '$2.75',
    currentprice: '$2.80',
    currentvalue: '$4,726.80',
    returnpercentage: '16.37%',
  },
    
];

const TableData = () => {
  return (
    <Fragment>
      <TableHeader title="Portfolio" />
      <Table 
        tableData={holdsData}
        headingColumns={['Name', 'Action', 'Rank', 'Strategy', 'Quantity', 'Entry Date', 'Entry Price', 'Current Price', 'Current Value', 'Return Percentage']}
      />
    </Fragment>
  );
}

export default TableData;