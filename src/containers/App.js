import React, { Component } from 'react';
// import logo from './logo.svg';
// import styled from 'styled-components'
import classes from './App.css';
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"

// import ErrorBoundary from './ErrorBoundary';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   align: auto;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }

// `;

class App extends Component {
  constructor() {
    super();
    this.state = { showPersons: true, buttonDisplay: "Clear Info" }
    const names = { "Tom": "22", "Dick": "30", "Harry": "45" };
    this.state.persons = Object.keys(names).map((name, index) => Object({ id: this.randomKeyMaker(), name: name, age: names[name] }))
    this.state.personsObject = this.mapMaker(this.state.persons)

  }

  mapMaker = (arr) => {
    let m = {}
    for (const obj of arr) {
      m[obj.id] = obj
    }
    return m
  }


  deletePersonHandler = (personKey) => {
    console.log("deletePersonHandler personkey = ", personKey)
    const persons = [...this.state.persons]
    const pObj = { ...this.state.personsObject }
    delete pObj[personKey]


    // persons.splice(personId, 1)
    // const newmap = this.mapMaker(this.state.persons)
    // console.log(newmap)
    // this.setState({personsMap:newmap})
    this.setState({ persons: persons, personsObject: pObj })
  }

  nameChangedHandler = (event, id) => {
    console.log("namechangehandler id = ", id)


    const person = {
      ...this.state.personsObject[id]
    };
    // const person = {...this.state.personsObject[personKey]}

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const pObj = { ...this.state.personsObject }
    pObj[id] = person
    this.setState({ personsObject: pObj });

  }

  randomKeyMaker = () => {
    var str = ""
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjijklmnopqrstuvwxyz0123456789"
    for (var i = 0; i < 15; i++) {
      var val = Math.floor(Math.random() * chars.length)
      str = str + chars[val]

    }
    return str
  }

  toggleSwitchHandler = () => {
    const doesShow = this.state.showPersons
    var displayMessage = "See Info"
    if (!doesShow) displayMessage = "Clear Info"
    this.setState({ showPersons: !doesShow, buttonDisplay: displayMessage })
  }

  render() {
    // if (Math.random()< .3){
    //   throw new Error("somn went wrong")
    // }

    let btnClass = ''

    let rows = null
    if (this.state.showPersons) {

      rows = (<Persons persons={this.state.personsObject}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      ></Persons>
      )

    }


    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.personsObject}
          clicked={this.toggleSwitchHandler} />
        {rows}
      </div>

    )

  }
}
export default App;
