import React from 'react';
import PropTypes from 'prop-types';
import './TableAssets.css';

const titles = ['', 'Action', 'Rank', 'Strategy', 'Quantity', 'Entry Date', 'Entry Price', 'Current Price','Current Value', 'Return Percentage']

function TableAssets() {
  <div className='small-container cart-page'>
  <table>
      <thead>
      <tr>
          <th> </th>
          <th>Action</th>
          <th>Strategy</th>
          <th>Quantity</th>
          <th>Entry Date</th>
          <th>Entry Price</th>
          <th>Current Price</th>
          <th>Current Value</th>
          <th>Return Percentage</th>
          
      </tr>
      </thead>
        <tbody>
      <tr>
          <td>
              <div className='cart-info'>
              <div>
                      <p>Pilbara Minerals (PLS:ASX)</p>
                      <p>HOLD</p>
                      <small>1</small>
                      <p>Mom</p>
                      <small>1,188</small>
                      <p>15 Dec 21</p>
                      <p>$2.75</p>
                      <p>$2.80</p>
                      <p>$4,726.80</p>
                      <div className='table-percentage'><p>16.37%</p></div>
                  </div>
              </div>
          </td>
    </tr>
    </tbody>
      </table>
</div>
}

export default TableAssets;