import React, { useEffect, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CiSearch, CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import '../styles/Header.css'
const Header = ({ toggleMode, toggle, darkMarketing, crm, notification, searchInput, searchIcon }) => {
    return (
        <>
            <div className="row headerMain">
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <div className="d-flex">
                            <h6 className={`Marketing me-2  ${darkMarketing === 'dark' ? 'darkMarting' : 'lightMarting'}`}>Marketing</h6>
                            <h6 className={`crm ${darkMarketing === 'dark' ? 'darkMarting' : 'lightMarting'}`}>CRM</h6>

                        </div>
                        {/* <div className='mainHeader'>
                            <div className="row ">
                                <div className="col-sm-6 col-md-2">
                                    <h6 className={`Marketing ${darkMarketing === 'dark' ? 'darkMarting' : 'lightMarting'}`}>Marketing</h6>
                                </div>
                                <div className="col-sm-6 col-md-10">
                                    <h6 className={`crm ${darkMarketing === 'dark' ? 'darkMarting' : 'lightMarting'}`}>CRM</h6>
                                </div>
                            </div>
                        </div> */}
                        <div>
                            <h2 className={`crmHeader ${crm === 'dark' ? 'darkCrm' : 'lightCrm'}`}>CRM</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 text-end">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text"
                                    placeholder='search'
                                    className={`form-control ${searchInput === 'dark' ? 'darkSearch' : 'lightSearch'}`}
                                />
                                <div className="searchIcon">
                                    <i className={`ciSearch ${searchIcon === 'dark' ? 'darkSearchcolor' : 'lightSearchcolor'}`}><CiSearch /></i>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className={`col-md-4 ms-5 Notification ${notification === 'dark' ? 'darkNotification' : 'lightNotification'}`}>
                                        <i className='notificationIcon'><IoMdNotificationsOutline /></i>
                                    </div>
                                    <div className="col-md-4 images">
                                        <img src="dummyimg.jpg" className="dummyimg" />
                                    </div>
                                    <div className="col-md-2 darkIcon" onClick={toggleMode}>
                                        {
                                            toggle === 'dark' ? <i><MdDarkMode /></i> : <i><CiLight /></i>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 ">
                                <div className="row containe">
                                    <div className="col-md-4 Notification">
                                        <i className='notificationIcon'><IoMdNotificationsOutline /></i>

                                    </div>
                                    <div className="col-md-4">
                                        <img src="dummyimg.jpg" className="dummyimg" width="40" height="40" alt="" />

                                    </div>
                                    <div className="col-md-4" onClick={toggleMode}>
                                       
                                            {
                                                toggle === 'dark' ? <i><MdDarkMode /></i> : <i><CiLight /></i>
                                            }                                       
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;