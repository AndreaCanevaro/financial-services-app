import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ title }) => {
  return(
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

TableHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default TableHeader;