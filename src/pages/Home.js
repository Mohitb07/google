import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core'
import Search from '../Search'

 function Home() {
    return (
        <div className="home">
            <div className="home-header">                
                <div className="header-left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>    

                <div className="header-right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppIcon/>
                    <Avatar/>
                </div>
            </div>

            <div className="home-body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>

                <div className="home-inputContainer">
                    {/* SEARCH conponent */}
                    <Search/>
                </div>
            </div>

        </div>
    )
}

export default Home;