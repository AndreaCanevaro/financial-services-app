import './TableBanner.css';
import TableAssets from './sections/TableAssets';
import DropdownMenu from './DropdownMenu';

import {useEffect, useState} from "react"

function TableBanner() {

/*  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

const getData = async () => {
    await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    .then(response => response.json())
      .then(data => setCoins(data));
    }

  useEffect(() => {
  getData()    
  }, [])*/

  return (
    <div className="container">
      <DropdownMenu />
      <TableAssets />
    </div>
  );
}

export default TableBanner;
