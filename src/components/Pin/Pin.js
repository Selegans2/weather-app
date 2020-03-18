import React from 'react';
import PropTypes from 'prop-types';
import PinStyle from "./PinStyle.module.scss";

const Pin = props => {
    return (
            <input maxlength='4' className={PinStyle['code-input']}/>
    );
};

Pin.propTypes = {
    
};

export default Pin;