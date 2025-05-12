import { useState } from 'react'
import './App.css'



function App() {

  const Data = {
      kerala:"kochi",
      goa:"goa",
      tvm:"tvm"
  }

    const [isSelect, setIsSelect] = useState("kochi")
    
    const handleChange = (e) =>{
      console.log(e.target.value);
      setIsSelect(e.target.value)
    };
    console.log("selected:"+isSelect);
    
  return (
    <>
            <h1>Hello App Componet</h1>
            <select onChange={handleChange}>
            <option value="kochi">"afaffafa"</option>
            <option value="kerala2">"afaffafaafafa"</option>
            </select>
            <h2> Selected : {isSelect}</h2>
  
    </>
  );
}

export default App
