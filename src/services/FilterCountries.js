import data from './medalists.json';

const arrayFilter = data.map((cur) => cur.country);
const noRepeat = [...new Set(arrayFilter)];
let result = [];

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
  result = arrayFinal.reduce(
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
        resgat.push(aux);
      })
      const format = {
      pais: cur[0],
      atletas: cur[1],
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
    })
    auxFor.push(format);                                   
  })
}
formatDate();

export default auxFor;
