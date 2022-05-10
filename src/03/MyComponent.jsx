import React from 'react';

function MyComponent (props) {
    const name = props.name;

    return (
        <div>
            <h1>MyComponent</h1>
            <span>{name}</span>
        </div>
    )
}

export default MyComponent;