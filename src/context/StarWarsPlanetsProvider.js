import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import fetchPlanets from '../services/planetsAPI';

function StarWarsPlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });

  const getPlanets = async () => {
    const results = await fetchPlanets();
    setPlanets(results);
  };

  return (
    <StarWarsPlanetsContext.Provider
      value={ {
        planets,
        getPlanets,
        filter,
        setFilter,
      } }
    >
      {children}
    </StarWarsPlanetsContext.Provider>
  );
}

StarWarsPlanetsProvider.propTypes = {
  children: PropTypes,
}.isRequire;

export default StarWarsPlanetsProvider;
