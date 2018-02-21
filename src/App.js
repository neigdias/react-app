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

  tooglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let people = null;

    if (this.state.showPeople){
      people = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name}
                           age={person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app :)</h1>
        <button style={style} onClick={this.tooglePeopleHandler}>Toogle people</button>
        {people}
      </div>
    );
  }
}

export default App;
