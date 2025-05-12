import { useState } from 'react'
import './App.css'
import Card from './componets/Card';


function App() {

  const cardInfoList = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
  ];

  return (
    <>
            <h1>Hello App Componet</h1>

            {cardInfoList.map((c)=>
            (<Card desc={c.description} title={c.title}  ></Card>
            ))}
    </>
  );
}

export default App
