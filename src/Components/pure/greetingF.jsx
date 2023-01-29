import React, {useState} from 'react';
import PropTypes from 'prop-types';

//componente funcional
const Greetingf = (props) => {
    
    const [age,setage] = useState(29)

    const birthday =() => {
        setage(age +1)
    }
    
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h2>your age is : {age}</h2>
            <button onClick={birthday}>Your Birthday</button>
        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string
};


export default Greetingf;
