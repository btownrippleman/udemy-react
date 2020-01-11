import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

const app = (props) => {
  
  const [personsState,setPersonsState] = useState({
    persons : []
  })
  var names = {"Tom":22,"Dick":30,"Harry":45,"Jesus":30,"Joseph":48,"Mary":Infinity};
  if (Array.isArray( personsState.persons) && personsState.persons.length == 0) 
  {
    personsState.persons = Object.keys(names).map(key => Object({"name":key,"age":names[key]}))}
  
 
  function switchNameHandler() {
    var persons = personsState.persons 
    console.log(persons.length)
    const div_number = Math.abs(Math.round(Math.random()*(persons.length-1 )))
    console.log(div_number)
   if  ( persons[div_number].name !== "Tom"){
     persons[div_number] = {name:"Tom", age: 25 }
   }
   else {
    persons[div_number] = {name:"Maximilian", age: 29 }

   }
 
   setPersonsState({persons})
  }
    var rows = []
    for (var obj of personsState.persons){
      rows.push(<Person name={obj.name} age= {obj.age}></Person>)
    }
    
     return(
      <div className="App">
        <h1>hi i'm a react app </h1>
        <p> this works!</p>
        <button onClick={switchNameHandler}> Switch Name</button>
       <div>{rows} </div>   
      </div>

      )
     
}

export default app;
