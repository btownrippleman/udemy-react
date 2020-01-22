import React,{useEffect} from 'react';
import classes from "./Cockpit.css"

const cockpit = (props) => {
  useEffect(()=>
  {console.log("use effect Cockpit.js")
setTimeout(()=>{console.log("saving `data` to cloud")},1000),[]

}


  )
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red
  }
  if (Object.keys(props.persons).length <= 2) {
    assignedClasses.push(classes.Red);
  }
  if (Object.keys(props.persons).length <= 1) {
    assignedClasses.push(classes.Bold);
  }
  console.log("assignedClasses = ", assignedClasses, "btnClass = ", btnClass)
  return (
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}> this works!</p>
      <button className={btnClass} onClick={props.clicked} > Toggle Persons
          </button>
    </div>)

}

export default cockpit;