import React from 'react';
import PropTypes from 'prop-types';
import InputStyle from "./Inputstyle.module.scss";

const InputLogin = props => {
    return (
        <div className="my-auto" style={{/*background:"blue",*/ }}>

            <div className="content text-center">
                <form>
                    <input type='text' required />
                    <label alt='CÓDIGO ESTUDIANTIL' placeholder="CÓDIGO ESTUDIANTIL"></label>
                </form>
            </div>

        </div>
    );
};

InputLogin.propTypes = {

};

export default InputLogin;