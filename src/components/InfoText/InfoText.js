import React from 'react';
import PropTypes from 'prop-types';
import InfoStyle from "./InfoTextStyle.module.scss";
import {ReactSVG} from 'react-svg';

const InfoText = props => {
    return (
        <div className='col-md-5'>
            
            <div className={InfoStyle['container']}>      
                 <ReactSVG className={InfoStyle['info-icon']} src={`${process.env.PUBLIC_URL}/assets/dollar-symbol.svg`}/>

                <p className={InfoStyle['info-text']}> Fotocopia del diploma de bachillerato </p>
                <br/>
                <div className={InfoStyle['line']}></div>
            </div>

        </div>
    );
};

InfoText.propTypes = {
    
};

export default InfoText;