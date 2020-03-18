import React from 'react';
import PropTypes from 'prop-types';
import PayStyle from "./PayInput_style.module.scss";
import {autoFormat, focusAlert, unfocusAlert, FormatListValues} from './Input-Formatter-Methods'

const PayInput = props => {
    
    /* manualValue = (val) =>{
        this.setState({
            valInput: null
        })
    }

    asignNewValue = (val) =>{
        this.setState({
            valInput: val
        })

        if(val === ""){
            this.setState({
                valInput: this.state.val1
            })
        }
        this.formatNumber();
    }

    formatNumber = () => {
        autoFormat();
    }

    formatList = () => {
        FormatListValues();
    }


    showAlert = () =>{
        focusAlert();
    }
    hideAlert = () => {
        unfocusAlert();
    }



    showAlertDemo = () => {
        alert("Codigo Ejecutado");
    }



     componentWillMount(){
        this.formatNumber();
        this.formatList();
     } */

    return (
        <div>
            
            <div className="col-md-12 pay-input">
                        <div className="row justify-content-center">
                            <div className="col-md-8">

                                <p className={PayStyle.title}> Total a pagar </p>

                                <div className="flex">
                                    <span className={PayStyle.currency}>$</span>
                                    <input className={PayStyle['money_input']} id="amount" maxLength="10" name="amount" type="text" autoComplete="off" /* value={this.state.valInput} onClick={() => this.showAlert()} onFocus={() => this.manualValue()} onBlur={(e) => this.asignNewValue(e.target.value)} *//>
                                </div>

                            </div>



                            <div className={`w-100 ${PayStyle.separator}`}></div>               
                            <div className="col-md-12 pay-list">
                                <div className={PayStyle['select-box']}>

                                    <div className={PayStyle['select-box__current']} tabIndex="1">

                                        <img className={PayStyle['select-box__icon']} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>                          
                                        </div>
                                            <ul className={PayStyle['select-box__list']}>

                                                <li /* onClick={() => this.asignNewValue(this.state.val1)} */>
                                                    <p className={PayStyle['select-box__option']} for="0" aria-hidden="aria-hidden" > Intereses Mora <br/> <strong strong className="money-option-value" style={{fontSize:"22px"}}> ${/* {this.state.val1} */} </strong> </p>
                                                </li>

                                                <li /* onClick={() => this.asignNewValue(this.state.val2)} */>
                                                    <label className={PayStyle['select-box__option']}  for="1" aria-hidden="aria-hidden"> Certificados Financieros <br/> <strong strong className="money-option-value" style={{fontSize:"22px"}}> ${/* {this.state.val2} */} </strong> </label>
                                                </li>

                                                <li /* onClick={() => this.asignNewValue(this.state.val3)} */>
                                                    <label className={PayStyle['select-box__option']}  for="2" aria-hidden="aria-hidden"> Matricula <br/> <strong className="money-option-value" style={{fontSize:"22px"}}> ${/* {this.state.val3} */} </strong> </label>
                                                </li>
                                            </ul>
                                    </div>
                            </div>
                        


                            <div className="col-md-4 pay-info">
                                <div class="alert alert-warning alert-dismissible fade show" id="changue-amount" role="alert" style={{display: "none"}}>
                                    Si usted va a generar el <strong>recibo de consignación por un valor diferente</strong>, digite el valor del recibo de consignación sin puntos, comas ni decimales 
                                    <button type="button" class="close" onClick={() => this.hideAlert()} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
        </div>
    );
};

PayInput.propTypes = {
    
};

export default PayInput;