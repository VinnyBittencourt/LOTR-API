import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #333;
        transition: color 0.2s;

        &:hover {
            color: #667;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const Container = styled.div`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;
            margin-right: auto;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }
            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 55px;
    max-width: 700px;

    a {
        background: #fff;
        height: 100px;
        padding: 20px;
        text-decoration: none;
        margin-bottom: 20px;
        transition: 0.2s;
        border-radius: 4px;

        display: flex;
        justify-content: space-between;
    }

    a div {
        padding: 0 0 0 20px;
        color: #333;
    }

    a strong {
        font-size: 20px;
    }

    a:hover {
        transform: translateX(25px);
    }

    a svg {
        color: #cbcbd6;
        margin: auto 0;
    }
`;
