
import React, { useState } from 'react';
import CampoPreencher from './components/CampoPreencher';
import ListaAnimais from './components/ListaAnimais';
import animalsData from './data';
import './app.css'; 

function App() {
  const [animals, setAnimals] = useState(animalsData);

  const addAnimal = (animal) => {
    setAnimals([...animals, animal]);
  };

  const deleteAnimal = (index) => {
    const newAnimals = [...animals];
    newAnimals.splice(index, 1);
    setAnimals(newAnimals);
  };

  const toggleStatus = (index) => {
    const newAnimals = [...animals];
    newAnimals[index].status = newAnimals[index].status === 'perdido' ? 'encontrado' : 'perdido';
    setAnimals(newAnimals);
  };

  return (
    <div className="app">
      <h1>Procurando um animal perdido?</h1>
      <CampoPreencher addAnimal={addAnimal} />
      <hr className="separator" />
      <ListaAnimais animals={animals} onDelete={deleteAnimal} onToggleStatus={toggleStatus} />
    </div>
  );
}

export default App;
