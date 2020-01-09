import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(){
    super();
    this.names = {"Tom":"22","Dick":"30","Harry":"45"};
    for  (const key of Object.keys(this.names)) {
      this.state.persons.push({name:key, age: this.names[key]})
    }
  }

  
  state = { persons :[]}
  switchNameHandler = () => {
   // console.log('was clicked')
   var persons = this.state.persons
   if  ( persons[0].name !== "Tom"){
     persons[0].name = "Tom";
      persons[0].age = 25
   }
   else {
     persons[0].name = "Maximiliano"
     persons[0].age = 27
   }
  
  this.setState(persons);

  }

  render() {
    var rows = []
 
    for (var obj of this.state.persons){
      rows.push(<Person name={obj.name} age= {obj.age}></Person>)
    }
    


     return(
      <div className="App">
        <h1>hi i'm a react app </h1>
        <p> this works!</p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
       <div>{rows} </div>   
      </div>

      )
        /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */
     //return React.createElement('div',{className:"App"}, React.createElement('h1',null,'hey that null was needed!'));
  
  
}
}
export default App;
