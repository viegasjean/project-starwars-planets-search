import React from 'react';
import './App.css';
import PlanetsList from './components/PlanetsList';
import SearchByName from './components/SearchByName';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';

function App() {
  return (
    <StarWarsPlanetsProvider>
      <span>Hello, App!</span>
      <SearchByName />
      <PlanetsList />
    </StarWarsPlanetsProvider>
  );
}

export default App;
