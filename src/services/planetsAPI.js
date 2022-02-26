const PLANETS_ENDPOINT = 'https://star-api-wars.herokuapp.com/';

const fetchPlanets = async () => {
  const response = await fetch(PLANETS_ENDPOINT);
  const { results } = await response.json();
  return results;
};

export default fetchPlanets;
