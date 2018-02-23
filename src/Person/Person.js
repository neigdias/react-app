import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' :{
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style} >
            <div className="PersonClose" onClick={props.click}>X</div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
}
export default Radium(person);