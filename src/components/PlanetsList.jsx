import React, { useContext, useEffect } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

export default function PlanetsList() {
  const {
    planets, getPlanets, filter: { filterByNumericValues, filterByName },
  } = useContext(StarWarsPlanetsContext);

  useEffect(() => {
    if (planets.length === 0) getPlanets();
  });

  const comparisonOperator = (planet) => {
    const { column, comparison, value } = filterByNumericValues;
    switch (comparison) {
    case 'menor que':
      return Number(planet[column]) < value;
    case 'maior que':
      return Number(planet[column]) > value;
    case 'igual a':
      return planet[column] === value;
    default:
      return true;
    }
  };

  if (planets.length === 0) return <h2>Carregando</h2>;

  return (

    <section>
      <h1>Planets List</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>SurfaceWater</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { planets
            .filter((planet) => comparisonOperator(planet))
            .filter(((planet) => (planet.name.includes(filterByName.name))))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
