import React, { useState } from 'react';
import auxFor from '../services/FilterCountries';

function Ranking() {
  const [ check, setCheck ] = useState(false);
  const [ country, setCountry ] = useState(false);
  // const atletas = true;

  const [ inputValue, setInputValue ] = useState('');

  const handleChange = ({target: { value }}) => {
    setInputValue(value);
  }

  const handleCheck = (country) => {
    setCheck((oldState) => {
      return {check: !oldState.check}
    })
    setCountry({ country });
  }
  // console.log(check)

  return (
    <>
      <div className="App-header">
        <header>
          <label>
            Pesquise um país pela sigla 
            <input onChange={ handleChange } placeholder="Ex: USA" type="text" />
          </label>
        </header>
      </div>
      <div className="d-flex bd-highlight">
        <div className="p-2 flex-grow-1 bd-highlight flex-wrap">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>País</th>
                <th>Ouro</th>
                <th>Prata</th>
                <th>Bronze</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
            {
              auxFor.sort((a, b) => b.total - a.total).filter((cur) => cur.pais.includes(inputValue.toUpperCase()))
              .map((cur, index) => (
                <tr key={index}>
                  <td>
                    <label htmlFor="input-radio">
                      <input name="input-radio" defaultChecked={ check } onChange={ () => handleCheck(cur.pais) } type="radio" />
                    </label>
                    {cur.pais}
                  </td>
                  <td>{ cur.ouro }</td>
                  <td>{ cur.prata }</td>
                  <td>{ cur.bronze }</td>
                  <td>{ cur.total }</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
        <div className="p-2 bd-highlight">
          {check &&  <table className="table table-sm">
            <thead>
              <tr>
                <th>Atleta</th>
                <th>Medalha</th>
              </tr>
            </thead>
            <tbody>
            {
              auxFor.map((curFilter) => {
                if (country.country === curFilter.pais) {
                  return curFilter.atletas.map((cur) => (
                    <tr>
                      <td>{ cur.athlete }</td>
                      <td>{ cur.medal }</td>
                    </tr>
                  ))  
                }
              })
            }
            </tbody>
          </table>}
          </div>
      </div>
    </>
  );
}

export default Ranking;
