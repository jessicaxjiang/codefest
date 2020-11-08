import React from 'react';
import Wallpaper from '../../images/home_page.jpg';
import {
    HomeContainer,
    FoodLogo,
    Title,
    Slogan,
    InfoBox,
    Description
} from './HomePageElement';

const HomePage = () =>  {
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
                {/* <HomeContainer> */}
                <Title>LocaFood</Title>
                <FoodLogo/>
                <Slogan>Notifying Free Food Everywhere.</Slogan>
                <InfoBox>
                    <Description></Description>
                </InfoBox>
                {/* </HomeContainer> */}
        </div>
    );
}

export default HomePage;