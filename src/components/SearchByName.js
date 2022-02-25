import React, { useContext } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function SearchByName() {
  const { filter, setFilter } = useContext(StarWarsPlanetsContext);

  return (
    <input
      data-testid="name-filter"
      onChange={ (e) => setFilter({
        ...filter,
        filterByName: { name: e.target.value },
      }) }
    />
  );
}

export default SearchByName;
