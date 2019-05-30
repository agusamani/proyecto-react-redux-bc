import React from 'react';
import './App.css';
import Routes from './routes';
import { Header } from './components/Header';

function App() {
  return (
    <div className="app-container">
        <Header />
        <div className="app-container__inner">
          <Routes />
        </div>
    </div>
  );
}

export default App;
