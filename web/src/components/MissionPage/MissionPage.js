import React from 'react';
import { Link } from 'react-router-dom';

const missionPage = (props) => {
    return (
        <div>
            <h1>MissionPage</h1>

            <div>   
                <Link to='/'>go to Home</Link>
            </div>

            <div>
                <Link to='/mission'>go to Mission</Link>
            </div>

            <div>
                <Link to='/contact'>go to Contact Us</Link>
            </div>

            <div>
                <Link to='/locator'>go to Resource Locator</Link>
            </div>
            
        </div>
    )
}

export default missionPage;