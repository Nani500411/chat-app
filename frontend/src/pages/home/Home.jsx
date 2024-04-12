import React from 'react';
import MessageContainer from "../../components/Messages/MessageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Home.css'; // Import CSS file

const Home = () => {
    return (
        <div className='home-container'>
            <Sidebar className='sidebar' />
            <MessageContainer className='message-container' />
        </div>
    );
};

export default Home;