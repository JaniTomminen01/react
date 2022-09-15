import { useState } from 'react';
import './App.css';

function App() {
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(1)
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState('male')
  const [viina, setViina] = useState(0)

  const laske = (e) => {
    e.preventDefault()
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const grms = grams - (burning * time)
    const mies = grms / (weight * 0.7)
    const nainen = grms / (weight * 0.6)
    let tulos = 0
    if (gender === 'male'){
      tulos = mies
    } else {
      tulos =  nainen
    }
    
    setViina(tulos)
  }

  return (
   <div classname="tausta">
    <h1>Alcometer</h1>
    <form onSubmit={laske}>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />

      </div>
      <div>
        <label>Bottles</label>
       <select value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
        <option value="4" >4</option>
        <option value="5" >5</option>
        <option value="6" >6</option>
       </select>
      </div>
      <div>
        <label>Time</label>
       <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="1">1</option>
        <option value= "2">2</option>
        <option value= "3">3</option>
        <option value= "4">4</option>
        <option value= "5">5</option>
        <option value= "6">6</option>
       </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} defaultChecked /> Male
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /> Female
      </div>
      <div>
        <label>viina</label>
        <output> {viina.toFixed(2)}</output>
      </div>
      <button>Laske</button>
    </form>
   </div>
  );
}

export default App;
