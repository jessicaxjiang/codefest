import styled from 'styled-components';
import Logo from '../../images/food_logo.png'
import Wallpaper from '../../images/home_page.jpg';
import InfoOutline from '../../images/description_box.png';


export const HomeContainer = styled.div`
    margin: 0;
    background-image: url(${Wallpaper});   
    background-size: 100%;
    background-repeat: no-repeat;
    height: "100vh";
    color: '#f5f5f5';
    position: relative;
`


export const Title = styled.div`
    margin: 0;
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
    margin: 0;
    position: relative;
    background-image: url(${Logo});
    background-size: 68%;
    background-repeat: no-repeat;
    top: 50px;
    width: 700px;
    height: 600px;
`;

export const Slogan = styled.div`
    margin: 0;
    position: relative;
    right: 220px;
    bottom: 300px;
    font-size: 3rem;
    text-align: center;
    color: white;
`;

export const InfoBox = styled.div`
    position: relative;
    background-image: url(${InfoOutline});
    background-size: 100%;
    align-items: center;
    background-repeat: no-repeat;
    left: 780px;
    bottom: 250px;
    width: 600px;
    height: 315px;
`

export const Description = styled.div`
    margin: 0;
    position: relative;
    margin: 20px;
    right: 400px;
    // bottom: 180px;
    font-size: 32px;
    text-align: right;
    color: red;
`