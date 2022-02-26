import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import PlanetsList from './components/PlanetsList';
import SearchByName from './components/SearchByName';
import StarWarsPlanetsProvider from './context/StarWarsPlanetsProvider';

function App() {
  return (
    <StarWarsPlanetsProvider>
      <span>Hello, App!</span>
      <SearchByName />
      <FilterBar />
      <PlanetsList />
    </StarWarsPlanetsProvider>
  );
}

export default App;
