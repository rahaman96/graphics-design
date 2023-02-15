import React, { useEffect, useState } from 'react';
import '../styles/firstCard.css'
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import SideBar from './Sidebar';
import UserData from '../UsersData/Usersdata';
const getData = () => {
    const allData = localStorage.getItem('allDada')
    console.log('allData', allData)
    if (allData) {
        return JSON.parse(localStorage.getItem('allData'))
    } else {
        return []
    }
}

const Cardcomponent = (props) => {
    const [theme, setTheme] = useState('light')
    const [background, setBackground] = useState('light')
    const [sideBar, setSideBar] = useState('light')
    const [dashedbBorder, setDashedbBorder] = useState('light')
    const [border, setBorder] = useState('light')
    const [cardBackground, setCardBackground] = useState('light')
    const [date, setDate] = useState('light')
    const [darkMarketing, setDarkMarketing] = useState('light')
    const [crm, setCrm] = useState('light')
    const [notification, setNotification] = useState('light')
    const [searchInput, setSearchInput] = useState('light')
    const [searchIcon, setSearchIcon] = useState('light')
    const [searcPlaceholder, setSearcPlaceholder] = useState('light')
    const [profileButton, setProfileButton] = useState('light')
    const [profileColor, setProfileColor] = useState('light')
    const [hover, setHover] = useState('light')
    const [borderBottom, setBorderBottom] = useState('light')
    const [doller, setDoller] = useState('light')

    // sidebar
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function openSidebar() {
        setSidebarOpen(true)
    }


    function closeSidebar() {
        setSidebarOpen(false)
    }


    const [data, setData] = useState(getData(UserData))
    const [id, setId] = useState()
    const [toggle, setToggle] = useState()
    console.log('UserDatafir', UserData)

    const toggleMode = () => {
        setTheme(prevState => prevState === "light" ? 'dark' : "light")
        setToggle(prevState => prevState === "light" ? 'dark' : "light")
        setBackground(prevState => prevState === "light" ? 'dark' : "light")
        setDashedbBorder(prevState => prevState === "light" ? 'dark' : "light")
        setBorder(prevState => prevState === "light" ? 'dark' : "light")
        setCardBackground(prevState => prevState === "light" ? 'dark' : "light")
        setDate(prevState => prevState === "light" ? 'dark' : "light")
        setDarkMarketing(prevState => prevState === "light" ? 'dark' : "light")
        setCrm(prevState => prevState === "light" ? 'dark' : "light")
        setNotification(prevState => prevState === "light" ? 'dark' : "light")
        setSearchInput(prevState => prevState === "light" ? 'dark' : "light")
        setSearchIcon(prevState => prevState === "light" ? 'dark' : "light")
        setSearcPlaceholder(prevState => prevState === "light" ? 'dark' : "light")
        setProfileButton(prevState => prevState === "light" ? 'dark' : "light")
        setProfileColor(prevState => prevState === "light" ? 'dark' : "light")
        setHover(prevState => prevState === "light" ? 'dark' : "light")
        setBorderBottom(prevState => prevState === "light" ? 'dark' : "light")
        setDoller(prevState => prevState === "light" ? 'dark' : "light")
        setSideBar(prevState => prevState === "light" ? 'dark' : "light")
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(data))
    }, [data])
    return (
        <>
            {/* <div className='pt' > */}
            <div className={`${theme === 'dark' ? 'textDark' : 'textLight'}`} style={{ backgroundColor: theme === 'dark' ? '#111111' : '#E2E2E2' }}>
                {/* <div>
                    <button onClick={toggleMode}>Toggle</button>
                </div> */}
                <div className="" >
                    <div className={sidebarOpen === true ? 'sideBarOpen' : 'sideBarClose'}>
                        <SideBar theme={theme} border={border} sideBar={sideBar}  openSidebar={openSidebar}
                            closeSidebar={closeSidebar}
                        />
                    </div>

                    <div className="row containe">
                        <div className=''>
                            <Header theme={theme} toggleMode={toggleMode} toggle={toggle} darkMarketing={darkMarketing} crm={crm}
                                notification={notification} searchInput={searchInput} searchIcon={searchIcon} searcPlaceholder={searcPlaceholder}
                            />
                        </div>
                        <div className=" col-sm-6 col-md-4" >
                            <LeftSidebar user={UserData} setId={setId} id={id} theme={theme} profileButton={profileButton}
                                profileColor={profileColor} hover={hover} borderBottom={borderBottom} sideBar={sideBar} />
                        </div>
                        <div className=" col-sm-6 col-md-8">
                            <RightSidebar user={UserData} id={id} theme={theme} background={background}
                                dashedbBorder={dashedbBorder} border={border} cardBackground={cardBackground}
                                date={date} doller={doller}
                            />
                        </div>
                    </div>
                </div>


            </div>
            {/* </div> */}
        </>
    )
}
export default Cardcomponent;