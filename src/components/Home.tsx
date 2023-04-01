import React, { useContext } from 'react';

import backgroundHome from '../assets/images/img_fondo_home_clinician.svg' 
import logoMedirekor from '../assets/images/logo_medirekor_2.svg'
import '../assets/styles/Home.css';
import imgUser from '../assets/images/img_user_dr-rodriguez.png'
import { TotalBox } from './TotalBox';
import CustomPieChart from './CustomPieChart';
import CustomBarChart from './CustomBarChart';
import PatientProgress from './PatientProgress';
import { UserContext } from '../contexts/UserContext';
import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Encounters from './Encounters';
import PatientChart from './Patient';
import { Link } from 'react-router-dom';

const Home = (props: any) => {


    const userData = useContext(UserContext) as Record<string,undefined>
    console.log(userData)
    return (
        <>
        { userData &&
        <div style={{
            width: 1440,
            height: 856
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: "center",
                width: '1440px',
                height: '56px',
                background: "#00065A 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 20px #0000000A",
                opacity: "1"
            }}>
                <img 
                    src={logoMedirekor}
                    style={{
                        position: "relative",
                        left: "-55px"
                    }}
                />
                <div style={{
                    position: "relative",
                    left: "-56px",
                    marginLeft: "76px",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '47px',
                    color: "#FFFFFF"
                }}>
                    <Link 
                    to='/home'
                    style={{
                        textAlign: "left",
                        font: "normal normal bold 14px/17px Poppins",
                        letterSpacing: "1px",
                        opacity: "1"
                    }}>Home</Link>
                    <h3 style={{
                        textAlign: "left",
                        font: "normal normal bold 14px/17px Poppins",
                        letterSpacing: "1px",
                        opacity: "1"
                    }}>My Account</h3>
                    <Link 
                    to="/home/encounters"
                    style={{
                        textAlign: "left",
                        font: "normal normal bold 14px/17px Poppins",
                        letterSpacing: "1px",
                        opacity: "1"
                    }}>My Encounters</Link>
                    <h3 style={{
                        textAlign: "left",
                        font: "normal normal bold 14px/17px Poppins",
                        letterSpacing: "1px",
                        opacity: "1"
                    }}>Support</h3>
                </div>
                <div style={{
                    position: "relative",
                    left: "100px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "31px"
                }}>
                    <div style={{
                        width: "160px",
                        height: "38px",
                    }}
                    >
                        <input 
                            id='home-search-patient'
                            style={{
                                width: "inherit",
                                height: "inherit",
                                textAlign: "center",
                                backgroundColor: "#8086DC",
                                borderRadius: "5px",
                                letterSpacing: "0px",
                                color: "#fafafa",
                                opacity: "1",
                                border: "0px",
                            }}
                            type="search"
                            placeholder="Search Patient"
                        />
                        <i className="fa-solid fa-magnifying-glass"/>
                    </div>
                    <div style={{
                        width: "166px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: "9px"
                    }}>
                        <img style={{
                            width: "30px",
                            height: "30px",
                            background: `transparent url(${imgUser}) 0% 0% no-repeat padding-box`,
                            borderRadius: "50%",
                            opacity: "1"
                        }}/>
                        <p style={{
                            width: "127px",
                            height: "17px",
                            color: "#FFFFFF",
                            textAlign: "left",
                            letterSpacing: "0.5px",
                            fontSize: "smaller",
                            opacity: "0.6"
                        }}>Dr. {`${userData.first_name} ${userData.last_name}`}</p>
                    </div>
                </div>
            </div>
            <div style={{
                width: "1440px",
                height: "750px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `transparent url(${backgroundHome}) 0% 0% no-repeat padding-box`,
                opacity: "1"
            }}>
                <Outlet context={{
                    id: `${userData.first_name} ${userData.last_name}`
                }}/>
            </div>
            <div style={{
                width: '1440px',
                height: '56px',
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                background: "#00065A 0% 0% no-repeat padding-box",
                boxShadow: "0px 5px 20px #0000000A",
                opacity: "1"
            }}>
                <p style={{
                    width: "169px",
                    height: "17px",
                    textAlign: "left",
                    font: "normal normal 300 12px/17px Poppins",
                    letterSpacing: "0.34px",
                    color: "#FFFFFF",
                    opacity: "0.6"
                }}>MedSight © Copyright 2022</p>
            </div>
        </div>
        }
        </>
    );
};

export default Home;