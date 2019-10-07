import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import api from './services/api';

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Hello world');
  }

  return (
    <>
      <div className="container">
        <img src={logo} alt="AirCNC" />
        <div className="content">
          <p>
            Ofereça <strong>spots</strong> para programadores e
            encontre <strong>talentos</strong> para sua empresa
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL*</label>
            <input
              id="email"
              type="email"
              placeholder="Seu melhor e-mail"
            />
            <button type="submit" className="btn">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
