import React from 'react';
import classes from './Person.css';

const person = (props) => {
    /*Radium tag
    const style = {
        '@media (min-width: 500px)' :{
            width: '450px'
        }
    }*/
    return (
        <div className={classes.Person}>
            <div className={classes.PersonClose} onClick={props.click}>X</div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
}
export default person;