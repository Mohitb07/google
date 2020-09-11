import React from 'react';
import './Home.css';
import AppIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core'
import Search from '../Search'

 function Home() {
    return (
        <div className="home">
            <div className="home-header">                
                <div className="header-left">
                    <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
                    <a href="https://store.google.com/">Store</a>
                </div>    

                <div className="header-right">
                    <a href="https://www.google.com/intl/en-GB/gmail/about/#">Gmail</a>
                    <a href="https://www.google.co.in/imghp?hl=en&tab=wi&ogbl">Images</a>
                    <AppIcon/>
                    <Avatar/>
                </div>
            </div>

            <div className="home-body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google-logo"/>

                <div className="home-inputContainer">
                    {/* SEARCH conponent */}
                    <Search/>
                </div>
            </div>

        </div>
    )
}

export default Home;