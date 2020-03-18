import React from 'react';
import PropTypes from 'prop-types';
import DatepickerStyle from "./Datepicker_style.module.scss";

import DayPicker from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const Datepicker = props => {

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: null,
        };
    }


    handleDayClick(day, { selected }) {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    }

    return (
        <div>
            <p>Selecciona fecha limite de pago</p>
            {/*             <DayPickerInput onDayChange={day => console.log(day)} />
 */}
            <br />

            <DayPicker
                selectedDays={this.state.selectedDay}
                onDayClick={this.handleDayClick}

                month={new Date(2020, 1)} //Coloca el mes Actual
                fromMonth={new Date(2020, 1)}
                toMonth={new Date(2020, 11)}
                fixedWeeks

                disabledDays={[ //Limita las dias que se puedan seleccionar
                    {
                        after: new Date(2020, 1, 0),
                        before: new Date(2020, 1, 7),
                    },
                ]}
            />

            <p>
                {this.state.selectedDay
                    ? this.state.selectedDay.toLocaleDateString()
                    : 'Please select a day 👻'}
            </p>

        </div>
    );
};

Datepicker.propTypes = {

};

export default Datepicker;