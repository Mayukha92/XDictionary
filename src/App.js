
import './App.css';
import React, { useState } from 'react'



function App() {

  const dictionary = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ];
  
  const[searchItem, setSearchItem] = useState('');
  const[definition, setDefinition] = useState('');

  const handleSearch = () =>{
    const foundWord = dictionary.find(item => item.word.toLowerCase() === searchItem.toLowerCase());
        setDefinition(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
  }
  return (
    <div>
      <h1>Dictionary App</h1>
      <input type  = 'text' placeholder='Search for a word...' value = {searchItem} onChange={(e) =>setSearchItem(e.target.value)}/>
      <button onClick = {handleSearch}>Search</button>
        <h3>Definition:</h3>
        <p>{definition}</p>
    
    </div>
  );
}

export default App;
