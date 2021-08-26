import data from './medalists.json';

const arrayFilter = data.map((cur) => cur.country);
const noRepeat = [...new Set(arrayFilter)];

const arrayFinal = [];
function filterCountries() {
  noRepeat.forEach((curRepeat) => {
    data.filter((curFilter) => {
      if(curRepeat === curFilter.country) {
        const obj = curFilter;
        arrayFinal.push(obj);
      }
    })
  })
}
filterCountries();

const auxFor = [];
function formatDate() {
  const result = arrayFinal.reduce(
    (h, car) => Object.assign(h, { [car.country]:( h[car.country] || []
  )
  .concat(
    {athlete: car.athlete, medal: car.medal, country: car.country, sex: car.sex, event: car.event}) }), []
  );

  let ouro = 0;
  let prata = 0;
  let bronze = 0;

  const teste = Object.entries(result);
  teste.forEach((cur) => {
    const resgat = [];
      cur[1].forEach((aux) => {
        // console.log(aux)
        resgat.push(aux);
      })
      // console.log(resgat);
      const format = {
      pais: cur[0],
      atletas: cur[1],
      medalha: '$',
      atleta: '',
      ouro,
      prata,
      bronze,
      total: cur[1].length
    }
    resgat.forEach((cur, index) => {
      // console.log(cur)
      switch(cur.medal) {
        case 'Gold':
         format.ouro += 1
        break;
        case 'Silver':
          format.prata += 1
        break;
        case 'Bronze':
          format.bronze += 1
        break;
        default:
        // default
      }
      if(cur.medal === 'Gold' || cur.medal === 'Silver' || cur.medal === 'Bronze'){
        format.medalha = cur.medal
        format.atleta = cur.athlete
      }
    })
    auxFor.push(format);                                   
  })
}
formatDate();
// console.log(auxFor);  

export default auxFor;
