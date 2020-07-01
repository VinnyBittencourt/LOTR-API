import { createGlobalStyle } from 'styled-components';
import bckground from '../assets/bg.png';

export default createGlobalStyle`
@font-face{
    font-family: "Middleearth";
    src: url("../assets/Middleearth-ao6m.ttf");
}
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        /* font-family: 'Roboto', sans-serif; */
        font-family: 'Middleearth';
    }

    body{
        background: url(${bckground})center center/cover;
        /* background-size: */
        background-repeat: no-repeat;
        /* background-position: right top; */
        height: 100vh;
        -webkit-font-smoothing: antialiased;
        background-attachment: fixed;
    }

    border-style, input, button{
        font: 16px 'Roboto', sans-serif;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button{
        cursor: pointer;
    }

    .compass{
        width: 50px;
    }

    .compass__container{
        display: flex;
        align-items: center;
    }

    .compass__container h2{
        font-weight: 300;
        margin-left: 10px;
    }

    .compass__container h2 span{
        font-weight: 400;
    }
`;
