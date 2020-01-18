import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    this.state = { showPersons: true, buttonDisplay: "Clear Info", mappy: "a" }
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
    console.log(" personkey = ", personKey)
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      align: 'auto',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let rowsCopy = null
    if (this.state.showPersons) {
      console.log(this.state.personsObject)

      style.backgroundColor = "red";

      rowsCopy = (Object.keys(this.state.personsObject)).map((key) => (
        <div><Person
          click={() => this.deletePersonHandler(key)}
          name={this.state.personsObject[key].name}
          age={this.state.personsObject[key].age}
          key={key}
          changed={(event) => this.nameChangedHandler(event, key)} />
        </div>
      )
      )

    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App" >
        <h1>This is your future React App Man </h1>
        <p className={classes.join(' ')}> this works!</p>
        <button style={style} onClick={this.toggleSwitchHandler}>{this.state.buttonDisplay} </button>
        {rowsCopy}
      </div>


    )

  }
}
export default (App);
