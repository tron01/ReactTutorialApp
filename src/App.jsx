import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from './componets/Card';

function App() {

  return (
    <>
      <h1 className='text-center bg-danger p-4'>l1</h1>
      <Card text="Hai this my card Text " Title="Big card Title"></Card>
    </>
  )
}

export default App
