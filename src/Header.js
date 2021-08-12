import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className = 'header'>
            <div className="header-left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header-search">
                    <SearchIcon/>
                    <input type="text" />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption title = "Home" Icon = {HomeIcon}/>
                <HeaderOption title = "My Network" Icon = {PeopleIcon}/>
                <HeaderOption title  = "Jobs" Icon= {BusinessCenterIcon}/>
                <HeaderOption title = "Messaging" Icon={SmsIcon}/>
                <HeaderOption title = "Notifications" Icon= {NotificationsIcon}/>
                <HeaderOption avatar = "https://im6.ezgif.com/tmp/ezgif-6-706efc5c6eeb.png" title = "Me"/>
            </div>
        </div>
    )
}

export default Header
