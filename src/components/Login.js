import React from 'react';
import LoginStyle from "./Login/style.module.scss";

const Login = () => {
    return (
        <div class="container-fluid h-100">
          <div class="row justify-content-center h-100">
                
                <div className="col-md-12">
                    <input maxlength='4' className="code-input"/>
                </div>

                <div class="col-md-7 about-side">
                    <img src={`${process.env.PUBLIC_URL}/assets/Fluid_orange.png`} className="fluid_orange" alt="Responsive image"/>
                    <img src={`${process.env.PUBLIC_URL}/assets/UAO_logo.png`} className="img-fluid center-image" alt="Responsive image"/>
                    <p style={{position:"absolute", bottom:"15px", textAlign:"center", width:"100%", fontSize: "13px"}}> Universidad Autónoma de Occidente | All rights reserved | Normas de confidencialidad y privacidad </p>
                </div>

                <div class="col-md-3 login-side-section justify-content-center" style={{paddingTop:"5em", paddingBottom:"0em"}}>

                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/login_logo.png`} class="img-fluid" alt="Responsive image"/>
                    </div>

                    <div className="Login_Intro_Message" style={{marginTop: "1em"}}>
                        <p style={{color: "rgb(223, 15, 43)", fontWeight: "bold", fontSize: "25px", lineHeight: 0.2,}}>INICIAR SESIÓN</p>
                        <p style={{color: "gray", fontSize: "13px", width:"80%", margin:"auto"}}> Bienvenido al portal del estudiante para acceso a servicios de procesos académicos y administrativos. </p>
                    </div>

                    <div className="my-auto" style={{/*background:"blue",*/}}>
                        <div className="content text-center">
                            <form>
                                <input type='text' required/>
                                <label alt='CÓDIGO ESTUDIANTIL' placeholder="CÓDIGO ESTUDIANTIL"></label>

                                <input type='text' required/>
                                <label alt='DOCUMENTO IDENTIDAD' placeholder="DOCUMENTO IDENTIDAD"></label>
                            </form> 
                        </div>
                    </div>

                    <div className="text-center" style={{fontSize: "13px", marginTop:"1em", paddingBottom: "6rem", position: "absolute", width:"94%", bottom: 0}}>
                        <a href="#" className="button">Iniciar Sesión</a>
                        <p>Olvidaste tu clave? <a href="#" style={{color: "rgb(223, 15, 43)", fontWeight: "bold"}}>Reinicia tu clave</a> </p>
                    </div>

                </div>
                <div class="col-md-2">
                    <img  style={{width:"55%", border: 0}} src={`${process.env.PUBLIC_URL}/assets/logo_uao.png`} className="img-fluid" alt="Responsive image"/>
                </div>

            </div>
        </div>
    )
};

export default Login;
