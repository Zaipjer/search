import React from 'react';
import "./Home.css"
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">

                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/gmail">Imágenes</Link>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <Avatar>H</Avatar>
                </div>
            </div>
            <div className="home__body">
                <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt="Google" />
                <Search/>
            </div>
        </div>
    );
}

export default Home;