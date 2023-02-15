
import React, { useEffect } from 'react';
import { AiOutlineDashboard, AiOutlineCalendar, AiOutlineMail, AiOutlineSetting, AiOutlineDoubleLeft } from 'react-icons/ai'

import { MdPayment, MdOutlineApps, MdComment } from 'react-icons/md'
import { BsMegaphone } from 'react-icons/bs'
import { DiDatabase } from 'react-icons/di'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { SiGooglechat, SiBandsintown } from 'react-icons/si'
import { FaTools } from 'react-icons/fa'
import { CiStickyNote } from 'react-icons/ci'
import { RxCaretDown } from 'react-icons/rx'
import '../styles/SideBar.css'
const Side = ({ theme,border,sideBar,openSidebar,closeSidebar }) => {
    useEffect(() => {

    }, [])
    // function openNav() {
    //     document.getElementById("mySidebar").style.width = "250px";
    //     document.getElementById("main").style.marginLeft = "234px";
    // }

    // function closeNav() {
    //     document.getElementById("mySidebar").style.width = "0";
    //     document.getElementById("main").style.marginLeft = "0";
    // }
    return (
        <>

            <div id="mySidebar" className={`sidebar ${theme === 'dark' ? 'sideBarDark' : 'sideBarLight'}`}>
                <div className="container-fluid sideBarMain">
                    <div className="row ">
                        <div className="col-md-10 d-flex logo">
                            <img src="99.jpg" alt="" width='30' height='30' />
                            <span className="fs-6">Graphics Design</span>
                        </div>
                        <div className="col-md-2">
                            <a href="javascript:void(0)" class="closebtn" onClick={() => closeSidebar()}>×</a>
                        </div>
                    </div>
                    <div className="row flex-nowrap">
                        <div className="col-auto ">
                            <div className="d-fl flex-column align-items-center align-items-sm-start   min-vh-100  mt-2">
                                <div className=''>
                                    <div className={`marketing ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><AiOutlineDashboard /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className=" ms-1 d-none d-sm-inline sidebarText">Dashboard</span>

                                            </div>

                                        </div>
                                    </div>
                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><BsMegaphone /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Marketing</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>

                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><MdPayment /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Payment</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>

                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><DiDatabase /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Buisness Operation</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>

                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><HiOutlineLightBulb /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Done-For-You-Grow & Expand</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className={`mt-4 ${border==='dark'?'darkBorderOpacity':'lightBorderOpacity'}`}>
                                <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><AiOutlineCalendar /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Calender</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><CiStickyNote /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Notes</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>

                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><AiOutlineMail /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Inbox</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>

                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><SiGooglechat /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Chat</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>


                                </div>


                                <div className={` mt-4 ${border==='dark'?'darkBorderOpacity':'lightBorderOpacity'}`}>
                                <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><FaTools /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Tool Box</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><SiBandsintown /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Integration</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>

                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><MdOutlineApps /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Apps</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                              

                                <div className={` mt-4 ${border==='dark'?'darkBorderOpacity':'lightBorderOpacity'}`}>
                                <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><MdComment /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Menu Configuration</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={`marketing mt-4 ${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house dashboardIcon"><AiOutlineSetting /></i>
                                            </div>
                                            <div className="col-sm-6 col-md-8 textMain">
                                                <span className="ms-1 d-none d-sm-inline sidebarText">Settings</span>

                                            </div>
                                            <div className="col-sm-2 col-md-2">
                                                <i className="fs-4 bi-house downIcon"><RxCaretDown /></i>

                                            </div>
                                        </div>
                                    </div>                                   
                                </div>
                              
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className={`${sideBar==='dark'?'darkSidebarHover':'lightSidebarHover'}`}>
                <p className="openbtn" id="main" onClick={() => openNav()}><AiOutlineDoubleLeft /></p>
            </div> */}
            <div >
                <p className="openbtn" id="main" onClick={() => openSidebar()}><AiOutlineDoubleLeft /></p>
            </div>

        </>
    )
}
export default Side;