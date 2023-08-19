import React from 'react';
import './App.css';

function App() {

  const topCars = [
    {

      manufacturer: 'BMW',
      model: 'm5cs',
    },
    {
      manufacturer: 'Mercedes',
      model: 'e63s',
    },
    {
      manufacturer: 'Audi',
      model: 'rs6',
    }
  ]
  return (
    <div className="App">
      <ul>
        {topCars.map((car, index) => (
            <li key={index}>manufacturer: {car.manufacturer}, model: {car.model}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
