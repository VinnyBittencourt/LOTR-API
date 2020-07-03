import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        color: #f6d771;
        font-size: 20px;
    }
`;

export const Container = styled.div`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 80px;

    a {
        background: #f5eed6;
        border-radius: 15px;
        color: #58470d;
        padding: 15px;
        margin: 0 5px;
        margin-bottom: 15px;
        text-decoration: none;
        width: 295px;
        text-align: center;

        display: flex;
        align-items: center;
        flex-direction: column;

        span {
            margin-top: 10px;
            font-size: 20px;
        }

        img {
            width: 55px;
        }
    }
`;
