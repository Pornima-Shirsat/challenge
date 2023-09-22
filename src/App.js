import './App.css';
import { useState } from 'react';
import {data} from './data.js';

function App() {
  const [Search,setSearch]=useState('');
  console.log(Search)

  //console.log(data)
  
  return (
    <div>
      <section>
        <div className="container">
          <h1>SHOPPING WINDOW</h1>
          <input type='text' id='item' placeholder='Search Items' onChange={(e)=>setSearch(e.target.value)}></input>

          <div className='cards'>
            {
              
            data.filter((card)=>{
              return Search.toLowerCase === '' 
              ? card:
              card.title.toLowerCase().includes(Search);
            })
            .map((card)=>(

            <div key={card.id} className='card'>
              <h3>{card.title}</h3>
              <p>
              {card.text}
              </p>
            </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
