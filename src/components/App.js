import React from 'react';
import Login from './Login';

function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Hello World</h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>
        </p>

        <Login />
      </div>
    </section>
  );
}

export default App;