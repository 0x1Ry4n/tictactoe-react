import React from 'react';
import './Square.css';

export default function Square(props) {
    return (
        <button
            className={props.value ? 'btnSquare disabled' : 'btnSquare'}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}