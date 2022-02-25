import React, { useContext, useEffect } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

export default function PlanetsList() {
  const { planets, getPlanets, filter } = useContext(StarWarsPlanetsContext);

  useEffect(() => {
    if (planets.length === 0) getPlanets();
  });

  if (planets.length === 0) return <h2>Carregando</h2>;

  return (

    <section>
      { console.log(planets) }
      { console.log(filter) }
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
            .filter(((planet) => planet.name.includes(filter.filterByName.name)))
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
