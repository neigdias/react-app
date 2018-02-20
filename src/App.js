import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Nei", age: "32"},
      {name: "Ana", age: "28"},
      {name: "Carla", age: "17"}
    ]
  }

  switchNameHandler = () => {
    console.log("teste");
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Nei", age: "32"},
        {name: event.target.value, age: "28"},
        {name: "Carla", age: "17"}
        ],
      showPeople: false
    })
  }

  tooglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app :)</h1>
        <button onClick={this.tooglePeopleHandler}>Switch name</button>
        { this.state.showPeople === true?
          <div>
            <Person name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangeHandler}/>
            <Person name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
