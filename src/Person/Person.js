import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    );
}
export default person;