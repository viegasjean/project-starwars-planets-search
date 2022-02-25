const PLANETS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const response = await fetch(PLANETS_ENDPOINT);
  const { results } = await response.json();
  return results;
};

export default fetchPlanets;
