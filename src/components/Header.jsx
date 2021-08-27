import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import '../style/Header.css';

function Header({ name }) {
  return (
    <header className='centerHeader'>
      { name }
    </header>
  )
}

const mapStateToProps = (state) => ({
  name: state.reducerName.name,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Header);
