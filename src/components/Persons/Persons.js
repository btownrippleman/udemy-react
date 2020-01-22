import React, { Component } from 'react'
import Person from "./Person/Person"
console.log("Persons js code reached")

class Persons extends Component{
   
    render(){

        return (
        (Object.keys(this.props.persons)).map(key=>
            <Person 
            clicked={()=> this.props.clicked([key])}
            name={this.props.persons[key].name}
            age={this.props.persons[key].age}
            key = {key}
            changed={(event)=>this.props.changed(event,[key])}/>)
        )
    }
}




export default Persons