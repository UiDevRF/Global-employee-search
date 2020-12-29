import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
    <img alt="employee" src={`https://avatars.dicebear.com/4.5/api/avataaars/:seed${props.employee.id}.svg`} ></img>
        <h2>{props.employee.name}</h2>
        <p>{props.employee.email}</p>
    </div>

)
