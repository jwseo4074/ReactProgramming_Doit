import React, {useState} from 'react';

function ColorComponent (props) {
    // const [message, setMessage] = useState();

    // setMessage( props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기')
    const message = props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기';
    
    return (
        <div>
            <div style={{ color: props.color }}>
                <p>안녕하세요 {props.name} 입니다. </p>
            <p>{message}</p>
            </div>
        </div>
    );
}

export default ColorComponent;