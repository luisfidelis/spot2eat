import React from 'react';

const Button = ({label, onClick}) => {
    return (
        <button style={style} onClick={onClick} type="button">{label}</button>
    );
};

/* Style */
const style = {
    background: '#1b998b',
    border: 'none',
    borderRadius: '22px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, .5)',
    color: 'white',
    height: '44px',
    fontSize: '16px',
    padding: '0 22px',
    width: '100%'
};

export default Button;