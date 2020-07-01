import styled from 'styled-components';
import bgdetail from '../../assets/bgdetail.png';

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        color: #f6d771;
        font-size: 16px;
    }
`;

export const Container = styled.div`
    background: url(${bgdetail}) center center/cover no-repeat;
    border-radius: 15px;
    margin-top: 80px;
    /* height: 600px; */
`;
