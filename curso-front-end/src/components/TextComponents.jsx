import React from 'react';

const TextComponents = ({text, description}) => {
    return (
        <div>
            <p><h1>{text}</h1></p>
            <p><h1>{description}</h1></p>
        </div>
    );
};

export default TextComponents;
