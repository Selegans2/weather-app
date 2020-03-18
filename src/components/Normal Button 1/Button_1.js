import React from 'react';
import PropTypes from 'prop-types';
import Button1 from "./Button_1_style.module.scss";

const Button_1 = props => {
    return (
        <div>
            <div class={Button1.flex}>
                <a href="#0" class={Button1.bttn} style={{textDecoration: "none"}}> Ir a Pagar </a>
            </div>
        </div>
    );
};

Button_1.propTypes = {
    
};

export default Button_1;