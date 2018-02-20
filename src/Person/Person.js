import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}
export default person;