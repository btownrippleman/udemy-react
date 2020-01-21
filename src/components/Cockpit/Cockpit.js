import React from 'react';
import classes from "./Cockpit.css"

const cockpit = (props) => {
  console.log("cockpit props = ", props)
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
    <div className={classes.Cockpit}><h1>This is your future React App Man </h1>
      <p className={assignedClasses.join(' ')}> this works!</p>
      <button className={btnClass} onClick={props.clicked} > Toggle Persons
          </button>
    </div>)

}

export default cockpit;