import React from 'react';
import Dashboard from "./Dashboard";

function App() {
  return (
    <section className="section">
      <div className="container">
        <Dashboard authedUser='shellylong' />
      </div>
    </section>
  );
}

export default App;
