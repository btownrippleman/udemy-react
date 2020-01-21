import React from 'react'
import Person from "./Person/Person"

const persons = (props)=> (Object.keys(props.persons)).map(key=>
    <Person 
    clicked={()=> props.clicked([key])}
    name={props.persons[key].name}
    age={props.persons[key].age}
    key = {key}
    changed={(event)=>props.changed(event,[key])}
 />
    )




export default persons