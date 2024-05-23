import { useRef, useState } from 'react';
import './App.css';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';


function App() {
const cur = new Freecurrencyapi('fca_live_qWTIYYyfmHFoFXh63B1MJAxOQxLF5pUkjIFQJZi4')

const curency = useRef(null)
const base = useRef(null)
const val = useRef(null)
const [result, setResult] = useState('')


function getResult () {
//   const base_currency = base.current.value
//   const currencies = curency.current.value
// cur.latest({
//   base_currency,
//   currencies
// }).then(response => {
//   console.log(response.data[base_currency], val.current.value)
//   setResult(val.current.value * response.data[currencies])
// });

}

  return (
    <div className="App">
      <input ref={val} placeholder='Скільки міняємо'/>
      <select ref={base}>
        <option value='EUR'>Євро</option>
        <option value='USD'>Доллар</option>
        <option value='PLN'>Злотий</option>
      </select>
      <div>На що </div>
      <select ref={curency}>
        <option value='EUR'>Євро</option>
        <option value='USD'>Доллар</option>
        <option value='PLN'>Злотий</option>
      </select>
      <div onClick={getResult}>Сконвертувати</div>
      <div>{result}</div>
    </div>
  );
}

export default App;
