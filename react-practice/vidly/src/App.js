import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { render } from '@testing-library/react';
import Movies from './components/Movies.js';

function App() {

  return (
    <div>
      <main className="container">
        <Movies />

      </main>
    </div>
  )

}

export default App;
