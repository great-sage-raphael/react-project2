import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Search from './components/Search'

function App() {
  
  let price =1
  let min = 1;
let max = 10;
let randomInt=0;
console.log(randomInt); 
  let name=["monkey","donkey","tiger","elephant","lion","boar","bird"]
  let newcomp=name.map(element => {
     randomInt = Math.floor(Math.random()*(max-min+1)+min);
   return <Card key={element}name={element}price={price*randomInt}/>
    
  });
  return (
    <>
     
      
     <div className='container'>
     {newcomp}
     
     </div>
      
    </>
  )
}

export default App
