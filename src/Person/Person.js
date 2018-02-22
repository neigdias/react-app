import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <div className="PersonClose" onClick={props.click}>X</div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <input type="text"/>
        </div>
    );
}
export default person;