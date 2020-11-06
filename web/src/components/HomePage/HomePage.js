import React from 'react';
import Wallpaper from '../../images/home_page.jpg';
import {
    FoodLogo,
    Title,
    Slogan
} from './HomePageElement';

const homePage = () =>  {
    return (
        <div 
            class="bg_image"
            style={{
                backgroundImage: `url(${Wallpaper})`,
                backgroundSize: "cover",
                height: "100vh",
                color: '#f5f5f5'
            }}  
        >
                <Title>LocaFood</Title>
                <FoodLogo/>
                <Slogan>Notifying Free Food Everywhere.</Slogan>
        </div>
    );
}

export default homePage;