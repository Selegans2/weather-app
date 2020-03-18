import React, { useEffect, Component } from 'react';
//import {autoFormat, focusAlert, unfocusAlert, FormatListValues} from './Pay-formatter'
import PayStyle from "./Pay_Style.module.scss";

//Components
import PayInput from '../Pay Input/PayInput';
import PayOption from '../Pay Option/PayOption';
import Button_action from '../Normal Button 1/Button_1';
import StepBar from '../StepBar/StepBar';
import Dropdown from '../Dropdown/Dropwdown';
//import Datepicker from '../DatePicker/Datepicker';
import Table from '../Table/Table';
import Searchbar from '../Searchbar/Searchbar';
import PinInput from '../Pin/Pin';
import InfoText from '../InfoText/InfoText';
import Photo from '../PhotosForms/PhotoForm';



class Pay extends Component {

    constructor(props){
        super(props);
        this.state = {val1: "25000", val2: "980000", val3: "4500200", valInput : "25000", class1 : PayStyle.unactive, class2 : PayStyle.unactive, class3 : PayStyle.unactive};
    }



     toggleClass = (option) =>{

        switch (option) {
            case 0:
            this.setState({
                class1 :  PayStyle.selected,
                class2 : PayStyle.unactive,
                class3 : PayStyle.unactive
                
            })

                break;   
                case 1:
                    this.setState({
                        class2 :  PayStyle.selected,
                        class1 : PayStyle.unactive,
                        class3 : PayStyle.unactive
                    })
                break
                case 2:
                    this.setState({
                        class3 :  PayStyle.selected,
                        class1 : PayStyle.unactive,
                        class2 : PayStyle.unactive
                    })
                    break;
        
            default:
                break;
        }


     }
    

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100" style={{marginTop: "10em"}}>

                    <PayInput/>
                    <div className={`w-100 ${PayStyle.separator}`}></div>


                    <div className="col-md-4 pay-method">

                        <p style={{ textAlign: "left", fontWeight: "normal", fontSize: "18px" }}> Selecciona el metódo de pago </p>

                        <div className="row justify-content-center h-100">
                            <PayOption/>
                            <PayOption/>
                            <PayOption/>
                        </div>

                    </div>


                    <div className={`w-100 ${PayStyle.separator}`}></div>
                    <div className="col-md-4 pay-Button">
                        <Button_action/>
                    </div>


                    <div className={`w-100 ${PayStyle.separator}`}></div>
                    <div className="col-md-7 d-flex justify-content-center">
                        <StepBar/>
                    </div>

                    <div className={`w-100 ${PayStyle.separator}`}></div>
                    <div className="col-md-7 d-flex justify-content-center">
                        <Dropdown/>
                    </div>

                    <div className={`w-100 ${PayStyle.separator}`}></div>
                    <div className="col-md-7 d-flex justify-content-center">
                        <Dropdown/>
                        <Searchbar/>
                    </div>


                    <div className={`w-100 ${PayStyle.separator}`}></div>
                    <div className="col-md-8 d-flex justify-content-center">
                        <PinInput/>
                    </div>

                    <div className={`w-100 ${PayStyle.separator}`}></div>
                    <div className="col-md-8 d-flex justify-content-center">
                        <InfoText/>
                        <InfoText/>
                        <InfoText/>
                    </div>


                    <div className="col-md-7 d-flex justify-content-center">
                        {/* <Datepicker/> */}
                        <Table/>
                    </div>

                    <div className="col-md-7 d-flex justify-content-center">
                        <Photo/>
                    </div>



                    <div className={`w-100 ${PayStyle.separator}`}></div>
                    <div className="col-md-6 footer">
                        <footer>
                            <p style={{fontSize: "12px"}}> Universidad Autónoma de Occidente | All rights reserved | Normas de confidencialidad y privacidad </p>
                        </footer>
                    </div>

                    



                </div>
            </div>
        );
    }
}

export default Pay;
