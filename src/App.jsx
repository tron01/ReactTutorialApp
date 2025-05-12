import { useEffect, useState } from 'react'
import './App.css'



function App() {

  const Data = {
      kerala:"Tvm",
      Goa:"goa",
      TamilNadu:"Chennai"
  }

    const [isSelect, setIsSelect] = useState("kerala")
    const [selectedCaptial, setSelectedCaptial] = useState("Tvm")
    
    const handleChange = (e) =>{
      console.log(e.target.value);
      setIsSelect(e.target.value)
    
    };
  
    const changeCaptial = () =>{
      console.log("change captial called");
      setSelectedCaptial((Data[isSelect]))
    }

    useEffect(changeCaptial,[isSelect])
    //console.log("selected:"+isSelect);
    
  return (
    <>
            <h1>Hello App Componet</h1>
            <select onChange={handleChange}>
            <option value="kerala">Kerala</option>
            <option value="Goa">Goa</option>
            <option value="TamilNadu">TamilNadu</option>
            </select>
            <h2> Selected : {isSelect}</h2>
            <h2> Captial :{selectedCaptial} </h2>
            <p> </p>
  
    </>
  );
}

export default App
