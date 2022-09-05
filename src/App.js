import { useState } from 'react';
import './App.css';

function App() {
  const [pituus, setPituus] = useState(1.85)
  const [paino, setPaino] = useState(60)
  const [bmi, setBmi] = useState(0)

  const laske = (e) => {
    e.preventDefault()
    const tulos = paino / (pituus * pituus)
    setBmi(tulos)
  }

  return (
   <div classname="tausta">
    <h1>BMI</h1>
    <form onSubmit={laske}>
      <div>
        <label>Pituus</label>
        <input type="number" value={pituus} onChange={e => setPituus(e.target.value)} />

      </div>
      <div>
        <label>Paino</label>
        <input type="number" value={paino} onChange={e => setPaino(e.target.value)} />
        
      </div>
      <div>
        <label>BMI</label>
        <output>{bmi.toFixed(1)}</output>
      </div>
      <button>Laske</button>
    </form>
   </div>
  );
}

export default App;
