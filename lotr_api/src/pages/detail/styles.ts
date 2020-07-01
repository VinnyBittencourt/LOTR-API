import styled from 'styled-components';
import bgdetail from '../../assets/bgdetail.png';

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: #f6d771;
        font-size: 16px;
        text-decoration: none;

        display: flex;
        align-items: center;
    }
`;

export const Container = styled.div`
    background: url(${bgdetail}) center center/cover no-repeat;
    border-radius: 15px;
    margin-top: 40px;
    padding: 40px;
    color: #58470d;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 200px;
        border-radius: 2px;
        box-shadow: 0 0 12px #333;
    }

    h1 {
        font-size: 40px;
    }

    p {
        font-size: 20px;

        span {
            font-size: 15px;
            margin-left: 10px;
        }
    }
    .win {
        font-size: 17px;
        text-shadow: 2px 2px lightyellow;
    }
`;
