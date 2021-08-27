import React, { useState } from 'react';
import auxFor from '../services/FilterCountries';
import iconGold from '../assets/medalha-de-ouro.png';
import iconSilver from '../assets/medalha-de-prata.png';
import iconBronze from '../assets/medalha-de-bronze.png';
import iconSum from '../assets/podio.png';
import iconCountry from '../assets/world-globe.png';
import iconAthlete from '../assets/medalha-de-honra.png';
import iconmedal from '../assets/atletismo.png';
import iconSearch from '../assets/search.png';
import '../style/Ranking.css';

function Ranking() {
  const [ check, setCheck ] = useState(false);
  const [ country, setCountry ] = useState(false);

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

  return (
    <div className='center'>
      <header className="inputSearch ">
        <p className="paragraph">Pesquise um país pela sigla</p>
        <img className="search" src={iconSearch} alt="" />
        <input onChange={ handleChange } placeholder="Ex: USA" type="text" />
      </header>

      <div className="d-flex bd-highlight">
        <div className="p-2 flex-grow-1 bd-highlight flex-wrap">
            <div className="contentCenter">
                <div className="contentGold">
                  <img className="medalCountry" src={iconCountry} alt="" title="country"/>
                </div>
                <div className="contentGold">
                  <img className="medalGold" src={iconGold} alt="medalgold" title="gold"/>
                </div>
                <div className="contentGold">
                  <img className="medalSilver" src={iconSilver} alt="medalgold" title="silver"/>
                </div>
                      <div className="contentGold">
                        <img className="medalBronze" src={iconBronze} alt="medalgold"  title="bronze"/>
                      </div>
                      <div className="contentGold">
                        <img className="medalTotal" src={iconSum} alt="" title="total" />
                </div>
              </div>
          <table className="table table-sm">
              <thead>
                  <tr>
                    <th className='country'>País</th>
                    <th className='golds'>Ouro</th>
                    <th className='silvers'>Prata</th>
                    <th className='bronze'>Bronze</th>
                    <th className='total'>Total</th>
                  </tr>
              </thead>
            <tbody>
            {
              auxFor.sort((a, b) => b.total - a.total).filter((cur) => cur.pais.includes(inputValue.toUpperCase()))
              .map((cur, index) => (
                <tr key={index}>
                  <td>
                    <input name="input-radio" defaultChecked={ check } onChange={ () => handleCheck(cur.pais) } type="radio" />
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
        {
          check &&
          <div>
            <div className="contentCenterAthlete">
              <div className="contentAthlete">
                <img className="medalAthlete" src={iconmedal} alt=""/>
              </div>
              <div className="contentMedalAthlete">
                <img className="medalAthlete" src={iconAthlete} alt="medalgold" />
              </div>
            </div>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th className="athleta">Atleta</th>
                  <th className="medal">Medalha</th>
                </tr>
              </thead>
              <tbody>
              {
                auxFor.map((curFilter) => {
                  if (country.country === curFilter.pais) {
                    return curFilter.atletas.map((cur, index) => (
                      <tr key={index}>
                        <td>{ cur.athlete }</td>
                        <td>{ cur.medal }</td>
                      </tr>
                    ))  
                  }
                })
              }
              </tbody>
            </table>
          </div>
        }
        </div>
      </div>
    </div>
  );
}

export default Ranking;
