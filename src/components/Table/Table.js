import React from 'react';
import PropTypes from 'prop-types';
import TableStyle from './Table_style.module.scss';
import Dropdown from '../Dropdown/Dropwdown';
import Searchbar from '../Searchbar/Searchbar';

const Table = props => {
    return (
        <div>

            <div className="table-options">
                <div className="row justify-content-center h-100">
                    <div className="col-md-10 d-flex justify-content-center">
                        {/* <Searchbar/> */}
                    </div>                    
                </div>    
            </div> 

            <table className={TableStyle['fixed_header']}>

                <thead>
                <tr className={TableStyle['table-header']}>
                    <th>Código</th>
                    <th>Asignatura</th>
                    <th>Porcentaje Inasistencia</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota 3</th>
                    <th>Nota 4</th>
                    <th>Nota 5</th>
                    <th>Nota 6</th>
                    <th>Nota Definitiva</th>
                    <th>Nota Cualitativa</th>
                </tr>
                </thead>
                
                <tbody>
                <tr >
                    <td className={TableStyle['bold-text']}>1122359</td>
                    <td>ESTRUCTURA FINANCIERA  Y VALORACION DE EMPRESAS</td>
                    <td className={TableStyle['underline']}>0%</td>
                    <td>2.5</td>
                    <td>3.8</td>
                    <td>3.8</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td className={TableStyle['bold-text']}>3.2</td>
                    <td>SP</td>
                </tr>

                <tr>
                    <td className={TableStyle['bold-text']}>1122359</td>
                    <td>ALGEBRA LINEAL</td>
                    <td className={TableStyle['underline']}>0%</td>
                    <td>2.5</td>
                    <td>-</td>
                    <td>3.8</td>
                    <td>4.0</td>
                    <td>-</td>
                    <td>-</td>
                    <td className={TableStyle['bold-text']}>3.2</td>
                    <td>SP</td>
                </tr>

                <tr>
                    <td className={TableStyle['bold-text']}>1122359</td>
                    <td>ADMINISTRACIÓN PARA INGENIEROS PRO</td>
                    <td className={TableStyle['underline']}>0%</td>
                    <td>2.5</td>
                    <td>3.8</td>
                    <td>3.8</td>
                    <td>-</td>
                    <td>-</td>
                    <td>4.5</td>
                    <td className={TableStyle['bold-text']}>4.2</td>
                    <td>SP</td>
                </tr>

                <tr>
                    <td className={TableStyle['bold-text']}>1122359</td>
                    <td>ADMINISTRACIÓN PARA INGENIEROS PRO</td>
                    <td className={TableStyle['underline']}>0%</td>
                    <td>2.5</td>
                    <td>3.8</td>
                    <td>3.8</td>
                    <td>-</td>
                    <td>-</td>
                    <td>4.5</td>
                    <td className={TableStyle['bold-text']}>4.2</td>
                    <td>SP</td>
                </tr>

                <tr>
                    <td className={TableStyle['bold-text']}>1122359</td>
                    <td>ADMINISTRACIÓN PARA INGENIEROS PRO</td>
                    <td className={TableStyle['underline']}>0%</td>
                    <td>2.5</td>
                    <td>3.8</td>
                    <td>3.8</td>
                    <td>-</td>
                    <td>-</td>
                    <td>4.5</td>
                    <td className={TableStyle['bold-text']}>4.2</td>
                    <td>SP</td>
                </tr>
                </tbody>

            </table>
        </div>
    );
};

Table.propTypes = {};

export default Table;
