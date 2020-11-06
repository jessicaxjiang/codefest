import styled from 'styled-components';
import Logo from '../../images/food_logo.png'
import Wallpaper from '../../images/home_page.jpg';


export const HomeContainer = styled.div`
    background-image: url(${Wallpaper});   
    background-size: cover;
    height: "100vh";
    color: '#f5f5f5';
    position: relative;
`


export const Title = styled.div`
    position: relative;
    top: 260px;
    right: 230px;
    font-size: 5rem;
    text-align: center;
    color: white;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const FoodLogo = styled.div`
    position: relative;
    background-image: url(${Logo});
    background-size: 68%;
    background-repeat: no-repeat;
    top: 50px;
    width: 700px;
    height: 600px;
`;

export const Slogan = styled.div`
    position: relative;
    right: 220px;
    bottom: 300px;
    font-size: 3rem;
    text-align: center;
    color: white;
`;