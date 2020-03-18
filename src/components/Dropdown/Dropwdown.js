import React from 'react';
import PropTypes from 'prop-types';
import DropdownStyle from "./Dropdow_style.module.scss";

const Dropwdown = props => {
    return (
        <div className={DropdownStyle['select-box']}>

            <div className={DropdownStyle['select-box__current']} tabindex="1">
                <div className={DropdownStyle['select-box__value']}>
                    <input className={DropdownStyle['select-box__input']} type="radio" id="0" value="1" name="Ben" checked="checked"/>
                    <p className={DropdownStyle['select-box__input-text']}>5 cream</p>
                </div>

                <div className={DropdownStyle['select-box__value']}>
                    <input className={DropdownStyle['select-box__input']} type="radio" id="1" value="2" name="Ben" checked="checked"/>
                    <p className={DropdownStyle['select-box__input-text']}>6 Cream</p>
                </div>

                <div className={DropdownStyle['select-box__value']}>
                    <input className={DropdownStyle['select-box__input']} type="radio" id="2" value="3" name="Ben" checked="checked"/>
                    <p className={DropdownStyle['select-box__input-text']}> Ingenieria Biomedica - Plan 2013 </p>
                </div>

                <img className={DropdownStyle['select-box__icon']} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
            </div>


            <ul className={DropdownStyle['select-box__list']}>

                <li>
                    <label className={DropdownStyle['select-box__option']} for="0" aria-hidden="aria-hidden">2 Créditos</label>
                </li>

                <li>
                    <label className={DropdownStyle['select-box__option']} for="1" aria-hidden="aria-hidden">4 Créditos</label>
                </li>

                <li>
                    <label className={DropdownStyle['select-box__option']} for="2" aria-hidden="aria-hidden">8 Créditos</label>
                </li>

            </ul>
        </div>
    );
};

Dropwdown.propTypes = {};

export default Dropwdown;
