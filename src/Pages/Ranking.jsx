import React, { useState } from 'react';
import data from '../services/FilterCountries';

function Ranking() {
  const [ check, setCheck ] = useState(false);
  console.log(data)
  // const atletas = true;

  const [ inputValue, setInputValue ] = useState('');

  const handleChange = ({target: {value}}) => {
    setInputValue(value);
  }

  const handleCheck = () => {
    setCheck((oldState) => {
      return {check: !oldState.check}
    })
  }
  // console.log(check)

  return (
    <div className="App-header">
      <label>
        Pesquise um país pela sigla 
        <input onChange={handleChange} placeholder="Ex: USA" type="text" />
      </label>
      <table>
        <thead>
          <tr>
            <th>País</th>
            <th>Medalha de Ouro</th>
            <th>Medalha de Prata</th>
            <th>medalha de Bronze</th>
            <th>Total Medalhas</th>
          </tr>
        </thead>
        <tbody>
         {
           data.filter((cur) =>  cur.pais.includes(inputValue.toUpperCase()))
           .map((cur) => (
             <tr>
              <td>
                <input defaultChecked={check} onChange={handleCheck} type="checkbox" />
                {cur.pais}
              </td>
              <td>{cur.ouro}</td>
              <td>{cur.prata}</td>
              <td>{cur.bronze}</td>
              <td>{cur.total}</td>
             </tr>
           ))
         }
        </tbody>
      </table>
      {check &&  <table>
        <thead>
          <tr>
            <th>Atleta</th>
            <th>Medalha</th>
          </tr>
        </thead>
        <tbody>
         {
           data.map((cur) => (
             <tr>
              <td>{cur.atleta}</td>
              <td>{cur.medalha}</td>
             </tr>
           ))
         }
        </tbody>
      </table>}
    </div>
  );
}

export default Ranking;
