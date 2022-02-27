import React, { useState, useContext } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function FilterBar() {
  const { filter, setFilter } = useContext(StarWarsPlanetsContext);
  const [values, setValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [options] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilter({
      ...filter,
      filterByNumericValues: [...filter.filterByNumericValues, values],
    });
    options.splice(options.indexOf(values.column), 1);
  };

  return (
    <>
      <select
        data-testid="column-filter"
        name="column"
        value={ values.column }
        onChange={ handleChange }
      >
        {
          options.map((option) => <option key={ option }>{ option }</option>)
        }
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ values.comparison }
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        data-testid="value-filter"
        name="value"
        type="number"
        value={ values.value }
        onChange={ handleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}

export default FilterBar;
