import React from 'react';
import PropTypes from 'prop-types';
import SearchbarStyle from './Searchbar_Style.module.scss';
import { ReactSVG } from 'react-svg'

const Searchbar = props => {
    return (
        <div>
            <div className={SearchbarStyle['text-search']}>
                <ReactSVG src={`${process.env.PUBLIC_URL}/assets/search.svg`} className={SearchbarStyle['icon-search']}/>
                <input className={`${SearchbarStyle['form-control']} ${SearchbarStyle['search-input']}`} type="text" placeholder="Buscar Nombre Asignatura" name="search" ng-model="searchItem" />
            </div>
        </div>
    );
};

Searchbar.propTypes = {
    
};

export default Searchbar;