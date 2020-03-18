import React from 'react';
import PropTypes from 'prop-types';
import {ReactSVG} from 'react-svg';
import PayStyle from "./PayOption_style.module.scss";

const PayOption = props => {
    return (
        <div>
            <div className={`${PayStyle.items} col-md-12`}>
                <a href="#"  onClick = { () => this.toggleClass(0)} className={`${PayStyle.notification} ${PayStyle.unactive} align-items-center`}>

                    <div className={`${PayStyle['inner-content']}`}>
                        <ReactSVG src={`${process.env.PUBLIC_URL}/assets/payment.svg`} style={{width: "4em", height: "4em", margin: "0 auto", marginTop:"0.5em"}}/>
                        <span> Tarjeta de Credito </span>
                    </div>

                    <span className={PayStyle.badge}> 
                        <ReactSVG src={`${process.env.PUBLIC_URL}/assets/check.svg`} />
                    </span>

                </a>
            </div>
        </div>
    );
};

PayOption.propTypes = {
    
};

export default PayOption;