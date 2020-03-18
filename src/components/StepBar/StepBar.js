import React from 'react';
import PropTypes from 'prop-types';
import StepStyle from "./StepBar_style.module.scss";
import { ReactSVG } from 'react-svg'

const StepBar = props => {
    return (

        <div className={`${StepStyle.container}`}>

            <ul className={`${StepStyle.progressbar}  ${StepStyle['size-3']}`}>

                <li className={StepStyle.active}>

                    <div className={`${StepStyle.circle} ${StepStyle.complete}`}>
                        <ReactSVG src={`${process.env.PUBLIC_URL}/assets/dot.svg`} style={{ width: "2em" }, { height: "2em" }} />
                    </div>

                    <div className={StepStyle['step-description']}>
                        <strong> 01 </strong>
                        <p> Defina el tipo de Matricula </p>
                    </div>
                </li>

                <li className={StepStyle.active}>
                    <div className={`${StepStyle.circle} ${StepStyle.current}`}>
                        <ReactSVG src={`${process.env.PUBLIC_URL}/assets/dot.svg`} style={{ width: "2em" }, { height: "2em" }} />
                    </div>

                    <div className={StepStyle['step-description']}>
                        <strong> 02 </strong>
                        <p> Defina La forma de pago </p>
                    </div>
                </li>

                <li>
                    <div className={StepStyle.circle}>
                        <ReactSVG src={`${process.env.PUBLIC_URL}/assets/check.svg`} style={{ width: "2em" }, { height: "2em" }} />
                    </div>

                    <div className={StepStyle['step-description']}>
                        <strong> 03 </strong>
                        <p> Consulte Activacion Matricula </p>
                    </div>
                </li>

     

            </ul>
        </div>
    );
};

StepBar.propTypes = {

};

export default StepBar;