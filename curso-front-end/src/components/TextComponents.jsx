import React from 'react';

const TextComponents = ({text, description}) => {
    return (
        <>
            <p>{text}</p>
            <p><h1>{description}</h1></p>
        </>
    );
};

export default TextComponents;
