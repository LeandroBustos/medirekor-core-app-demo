import React, { useState } from 'react';
import PropTypes from 'prop-types';

import backgroundClinician from '../assets/images/img_fondo_clinician.png';
import medirekorImage from '../assets/images/logo_medirekor.png';
import axios from 'axios';

import config from '../core/config';

const Login: React.FC<{setUserData: Function}> = (props: any) => {
    const {setUserData} = props
    const [user, setUser] = useState<string|null>(null)
    const [password, setPassword] = useState<string|null>(null)

    const submitLogin = async (user: string | null, password: string | null) => {
        if(!user || !password) console.error("Please fill the inputs to login")
        axios.post("http://localhost:3001/app/v1/login", {user, password})
        .then(response => {
            setUserData(response.data)
        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <>
            <div style={{
                width: '1440px',
                height: '750px',
                display: 'flex',
                placeContent: "center",
                flexFlow: "column wrap",
                background: `transparent url(${backgroundClinician}) 0% 0% no-repeat padding-box`,
                opacity: 1,
                maxWidth: "inherit",
                maxHeight: "inherit",
            }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    width: "540px",
                    position: "absolute",
                    top: "86px",
                    left: "450px",
                    height: "579px",
                    background: "0% 0% no-repeat padding-box padding-box rgb(243, 243, 243)",
                    boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px",
                    borderRadius: "8px",
                    opacity: "0.9"
                }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "317px"
                    }}>
                        <img 
                            src={medirekorImage}
                            style={{
                                width: "217px",
                                height: "57px",
                                opacity: "1",
                                marginBottom: "29.43px"
                            }}
                        >
                        </img>
                        <p style={{
                            width: "189px",
                            height: "0px",
                            color: "rgb(0, 6, 90)",
                            textAlign: "center",
                            font: "bold 16px / 20px Poppins",
                            letterSpacing: "0.5px",
                            marginBottom: "auto"
                        }}
                        >
                            Welcome to Med Hub!
                        </p>
                        <p style={{
                            width: "268px",
                            color: "rgb(0, 6, 90)",
                            textAlign: "center",
                            font: "16px / 20px Poppins",
                            letterSpacing: "0.45px",
                            wordBreak: "break-word"
                        }}>
                            Please insert your user and password to log in.
                        </p>
                    </div>
                    <div style={{
                        display: "flex",
                        width: "350px",
                        height: "58px",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        border: "2px solid #00065A",
                        borderRadius: "8px",
                        opacity: "1"
                    }}
                    >
                        <input type="text" onChange={(e) => setUser(e.target.value)} style={{"paddingLeft":"30px","width":"100%","border":"1px solid black","borderRadius":"5px"}} placeholder="User"/>
                        {/* <i style={{"position":"absolute","top":"50%","left":"5px","transform":"translateY(-50%)","color":"grey"}} className="material-icons">person</i> */}
                    </div>
                    <div style={{
                        display: "flex",
                        width: "350px",
                        height: "58px",
                        border: "2px solid #00065A",
                        borderRadius: "8px",
                        opacity: "1"
                    }}
                    >
                        <input type="password" onChange={(e) => setPassword(e.target.value)} style={{"paddingLeft":"30px","width":"100%","border":"1px solid black","borderRadius":"5px"}} placeholder="Password"/>
                        {/* <i style={{"position":"absolute","top":"50%","left":"5px","transform":"translateY(-50%)","color":"grey"}} className="material-icons">lock</i> */}
                    </div>
                    <div style={{
                        "display":"flex","alignItems":"center"
                    }}>
                        <input type="checkbox" id="remember-me" style={{"marginRight":"10px"}}/>
                        <label htmlFor="remember-me">Remember Me</label>
                    </div>
                    <button style={{
                        backgroundColor: "blue",
                        color: "white",
                        width: "350px",
                        height: "50px",
                        background: "#5700FB 0% 0% no-repeat padding-box",
                        borderRadius: "8px",
                        opacity: "1"
                    }}
                    onClick={(e) =>{
                        e.preventDefault()
                        submitLogin(user, password)
                    }}
                    >
                        Log In
                    </button>
                </div>
            </div>
        </>
        
    );
};

Login.propTypes = {
    
};

export default Login;