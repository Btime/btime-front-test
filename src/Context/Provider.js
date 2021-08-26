import React from 'react';
import PropTypes from 'prop-types';
import context from './context';
import data from '../services/FilterCountries';

function Provider({children}) {
  console.log(data);
  
  const GLOBAL_STATE = {
    data,
  }

  return (
    <context.Provider value={GLOBAL_STATE}>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
