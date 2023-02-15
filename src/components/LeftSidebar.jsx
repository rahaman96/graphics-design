import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { BsTelephone, BsTelephoneFill, BsBagDash, BsThreeDots, BsBoxArrowUpRight, BsThreeDotsVertical, BsCircleFill } from 'react-icons/bs';
import { AiOutlineMail, AiFillMessage } from 'react-icons/ai';

import { HiUserGroup, } from 'react-icons/hi';
import { BiPurchaseTag } from 'react-icons/bi';
import { FaRegEdit } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'

import '../styles/LeftSidebar.css'
const LeftSidebar = ({ user, userDetails, setId, id, theme, profileButton, profileColor, hover, borderBottom, sideBar }) => {
    return (
        <>
            <div className='container'>
                <div className={`card ${theme === 'dark' ? 'profileMainDark' : 'profileMainLight'}`}  >
                    {/* <div className="card profileMain" > */}

                    <div className="card-body ">
                        <div className="row">
                            <div className="row">
                                <div className="col-md-4 text-start">

                                    <h6 className='ProfileText'>Profile</h6>


                                </div>
                                <div className="col-md-8 text-end">

                                    <label className="toggle">
                                        <input className="toggle-checkbox" type="checkbox"  />
                                        <div className="toggle-switch Lead">Lead</div>
                                        {/* <span class="toggle-label">Lead</span> */}
                                    </label>

                                    {/* <p className='text-end'>lead</p> */}
                                    {/* <Form className='text-end' >
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            placeholder='lead'
                                        />
                                    </Form> */}
                                </div>
                            </div>
                            {/* <div className=" text-start">
                                <h6 className='ProfileText'>Profile</h6>

                            </div> */}


                            <div className="pt-3">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="dummyimg.jpg" className="rounded-circle" width="90" height="90" alt="" />
                                    </div>

                                    <div className="col-8 pt-3">
                                        <h6 className='profileHeader'>{user[id ? id - 1 : 0]?.first_name} {user[id ? id - 1 : 0]?.last_name}</h6>
                                        <p className={`Text ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>{user[id ? id - 1 : 0]?.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`profileFotter container mt-4 pt-2 pb-2 ${profileButton === 'dark' ? 'darkProfileButton' : 'lightProfileButton'}`}>
                            <div className={`d-flex ${profileColor === 'dark' ? 'darkProfileColor' : 'lightProfileColor'}`}>
                                <i className='BsTelephone bsFirst'><BsTelephoneFill /></i>
                                <i className='BsTelephone borderLeft '><AiOutlineMail /></i>
                                <i className='BsTelephone borderLeft '><BiPurchaseTag /></i>
                                <i className='BsTelephone borderLeft '><AiFillMessage /></i>
                                <i className='BsTelephone borderLeft '><BsBagDash /></i>
                                <i className='BsTelephone borderLeft '><HiUserGroup /></i>
                                <i className='BsTelephone borderLeft '><BsThreeDots /></i>
                            </div>
                        </div>
                    </div>

                </div>
                {/* people */}
                <div className="peopleMain mt-3">
                    <div className={`card ${theme === 'dark' ? 'profileMainDark' : 'profileMainLight'}`}>
                        {/* <div className="card people"> */}

                        <div className="card-body">
                            <div className="row">
                                <div className="col-8 ">
                                    <h6 className='peopleText'>People</h6>
                                </div>
                                <div className="col-4 peopleIcon text-end">
                                    <div className="row ">
                                        <div className="col-3">
                                            <i className='iconPeople '><FaRegEdit /></i>
                                        </div>
                                        <div className="col-3">
                                            <i className='iconPeople '><BsBoxArrowUpRight /></i>
                                        </div>
                                        <div className="col-3">
                                            <i className='iconPeople '><FiFilter /></i>
                                        </div>
                                        <div className="col-3">
                                            <i className='iconPeople '><BsThreeDotsVertical /></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-3 peopleDetails" onClick={userDetails}>
                                    {
                                        user.map((item, index) => {
                                            return (
                                                <div className={`morePeopl pb-3 mb-3 ${borderBottom === 'dark' ? 'darkBorderBottom' : 'lightBorderBottom'}`} key={index} onClick={() => setId(item.id)}>
                                                    <div className={`row ${hover === 'dark' ? 'darkHover' : 'lightHover'}`}>
                                                        <div className="col-3 profileImg">
                                                            <img src="dummyimg.jpg" className="rounded-circle" width="64" height="64" alt="" />
                                                            <i className='bsCircle'><BsCircleFill /></i>
                                                        </div>
                                                        <div className="col-9 pt-1 ">
                                                            <h6 className='peopleHeader'>{item.first_name} {item.last_name}</h6>
                                                            <p className={`peoplePara ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>{item.email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LeftSidebar;