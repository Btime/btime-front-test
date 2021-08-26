import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveName } from '../actions';

function Home({saveName}) {
  const [ inputValue, setInputValue ] = useState('');

  const handleChange = ({target: {value}}) => {
    setInputValue(value);
  }

  const handleClick = () => {
    saveName(inputValue);
  }

  return (
    <div>
      <h1>Seja Bem-Vindo ao Ranking de Medalhas!</h1>
      <label>
        Digite seu nome:
        <input onChange={handleChange} type="text" />
      </label>
      <Link onClick={handleClick} to="/ranking">Entrar</Link> 
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  saveName: (name) => dispatch(saveName(name))
})



export default connect(null, mapDispatchToProps)(Home);
