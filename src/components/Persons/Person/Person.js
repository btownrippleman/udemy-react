import React from 'react';
import classes from './Person.css'
// import styled from 'styled-components'

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px){
//         width: 450px;
//     }
// `;

const person = (props) => {

    return (
        <div className={classes.Person} >
            <p onClick={props.clicked}>I'm  {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed}></input>
        </div>

    );
}

export default person;