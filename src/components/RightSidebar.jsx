import React, { useEffect, useState } from 'react';
import '../styles/RightSidebar.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsTelephone, BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlineMail, AiFillMessage, AiFillClockCircle } from 'react-icons/ai';

const RightSidebar = ({ id, user, theme, background, dashedbBorder, border, cardBackground, date,doller }) => {
    const [rightData, setRightData] = useState([id, user])
    useEffect(() => {
        setRightData(
            user.filter((userDetails) => {
                return userDetails.id === id
            })
        )

    }, [id])
    console.log('rightData', rightData)
    return (
        <>

            <div className='container'>
                <div className={`card  ${theme === 'dark' ? 'cardBodyDark' : 'cardBodyLight'}`}>
                    <div className="card-body">
                        <div className="d-flex">
                            <div className={`aiDoller ${doller==='dark'?'darkDollerBackground':'lightDollerBackground'}`}>
                                <i className='dollerIcon '><BsCurrencyDollar /></i>

                            </div>
                            {/* <div className={` rounded-circle ${doller==='dark'?'darkDollerBackground':'lightDollerBackground'}`} style={{width: "50px"}}>
                               
                               <span className="" >
                               <i className='dollerIcon '><BsCurrencyDollar /></i>
                               </span>

                           </div> */}

                            <div className='lastPurchase'>
                                <h5 className="card-title cardTitle">Last Purchase: $180 | Center Table on 25.11.2022</h5>
                                <p className={`card-text cardText ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>Total purchases in the last 30 days: $1,680</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Contact info */}
                <div className="contactMain mt-3">
                    <div className={`card  ${theme === 'dark' ? 'cardBodyDark' : 'cardBodyLight'}`}>
                        <div className="card-body ">
                            <div className="card-title ">
                                <h6 className='Info'> Contact Info</h6>
                            </div>

                            <div className={`row pt-3 ${border === 'dark' ? 'darkBorderOpacity' : 'lightBorderOpacity'}`} >

                                <div className="col-md-6 ">
                                    <div className={`card firstCard pt-2 ${background === 'dark' ? 'darkCardBackground' : 'lightCardBackground'}`} >
                                        <div className="card-title textName ">
                                            <span className={`textFirst ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>First Name</span>
                                            <h6 className='firstName'>{user[id ? id - 1 : 0]?.first_name}</h6>
                                        </div>

                                        <div className={`card-title textName pt-2 ${border === 'dark' ? 'darkBorderOpacity' : 'lightBorderOpacity'}`}>
                                            <span className='textFirst'>Last Name</span>
                                            <h6 className='firstName'>{user[id ? id - 1 : 0]?.last_name}</h6>
                                        </div>
                                        <div className={`card-title textName pt-2 ${border === 'dark' ? 'darkBorderOpacity' : 'lightBorderOpacity'}`}>
                                            <span className='textFirst'>Company</span>
                                            <h6 className='firstName'>{user[id ? id - 1 : 0]?.company.name}</h6>
                                        </div>
                                        <div className={`card-title textName pt-2 ${border === 'dark' ? 'darkBorderOpacity' : 'lightBorderOpacity'}`}>
                                            <span className='textFirst'>Phone NUmber</span>
                                            <h6 className='firstName'>{user[id ? id - 1 : 0]?.phone}</h6>
                                        </div>

                                        <div className={`card-title textName pt-2 ${border === 'dark' ? 'darkBorderOpacity' : 'lightBorderOpacity'}`}>
                                            <span className='textFirst'>Work Email</span>
                                            <h6 className='firstName'>{user[id ? id - 1 : 0]?.email}</h6>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-md-6 containe">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className='dealScore'>Deal Score</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p className='score'>90</p>
                                        </div>
                                        <div className='progressBar'>
                                            <ProgressBar now={90} style={{ width: '90%' }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className='dealScore'>Sentiment Score</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p className='score'>100</p>
                                        </div>
                                        <div className='progressBar'>
                                            <ProgressBar className='color' now={100} style={{ width: '90%' }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className='dealScore'>Engagement Score</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p className=' score'>85</p>
                                        </div>
                                        <div className='progressBar'>
                                            <ProgressBar now={85} style={{ width: '90%' }} />
                                        </div>
                                    </div>

                                    <div>
                                        <p className={`Predicted pt-3 ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>Predicted Close Date: <span className=''>Nov 24, 2022</span></p>
                                    </div>
                                    <div className={`dotCard pt-3 pb-3 ${dashedbBorder === 'dark' ? 'priceDarkOpacity' : 'priceLightOpacity'}`} >
                                        <h6 className='price '>$8,756 k</h6>
                                        <p className={`monthlySale ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>Total Monthly Sales</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className={`card mt-3 ${theme === 'dark' ? 'cardBodyDark' : 'cardBodyLight'}`}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h6 className='Activity'>Contact activity</h6>
                            </div>
                            <div className="col-6 text-end">
                                <i className='BsTelephoneIcon '><AiFillClockCircle /></i>
                            </div>
                        </div>
                        <div className={`pt-4 mt-2 ${border === 'dark' ? 'darkBorderOpacity' : 'lightBorderOpacity'}`}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div  className={`Icon ${doller==='dark'?'darkDollerBackground':'lightDollerBackground'}`}>
                                        <i className='bsIcon ' ><AiOutlineMail /></i>
                                    </div>
                                    <div className={`card ${cardBackground === 'dark' ? 'darkCardBackground' : 'lightCardBackground'} `} >
                                        <div className="card-body">
                                            <div className="row pt-3">
                                                <div className="col-6">
                                                    <h6 className='guyText'>
                                                        Guy Hawkins</h6>
                                                </div>
                                                <div className={`col-6 ${date === 'dark' ? 'darkDate' : 'lightDate'}`}>
                                                    <h6 className='text-end'>{user[id ? id - 1 : 0]?.date}</h6>
                                                </div>
                                            </div>
                                            <div className={`loremText ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at ut mauris amet nec. Nunc ut neque venenatis tincidunt erat aliquet.
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className={`Icon ${doller==='dark'?'darkDollerBackground':'lightDollerBackground'}`}>
                                        <i className='bsIcon '><AiFillMessage /></i>
                                    </div>
                                    <div className={`card ${cardBackground === 'dark' ? 'darkCardBackground' : 'lightCardBackground'} `}>
                                        <div className="card-body ">
                                            <div className="row pt-3">
                                                <div className="col-6">
                                                    <h6 className='guyText'>Guy Hawkins</h6>
                                                </div>
                                                <div className={`col-6 ${date === 'dark' ? 'darkDate' : 'lightDate'}`}>
                                                    <h6 className='text-end'>{user[id ? id - 1 : 0]?.date}</h6>
                                                </div>
                                            </div>
                                            <div className={`loremText ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at ut mauris amet nec. Nunc ut neque venenatis tincidunt erat aliquet.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 pt-4">
                                <div  className={`Icon ${doller==='dark'?'darkDollerBackground':'lightDollerBackground'}`}>
                                    <i className='bsIcon '><BsTelephone /></i>
                                </div>
                                <div className={`card ${cardBackground === 'dark' ? 'darkCardBackground' : 'lightCardBackground'} `}>
                                    <div className="card-bod container pt-3">
                                        <div className="row mt-2">
                                            <div className="col-6 d-flex">
                                                <img src="dummyimg.jpg" className="rounded-circle mt-1" width="30" height="30" alt="" />
                                                <div className='guyMain'>
                                                    <span className='guyText'>{user[id ? id - 1 : 0]?.first_name} {user[id ? id - 1 : 0]?.last_name}</span>
                                                    <p className={`Number ${theme === 'dark' ? 'textDarkOpacity' : 'textLightOpacity'}`}>{user[id ? id - 1 : 0]?.phone}</p>
                                                </div>
                                            </div>
                                            <div className={`col-6 ${date === 'dark' ? 'darkDate' : 'lightDate'}`}>
                                                <h6 className='text-end'>{user[id ? id - 1 : 0]?.date}</h6>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default RightSidebar;