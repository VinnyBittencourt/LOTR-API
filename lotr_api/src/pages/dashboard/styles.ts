import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    /* text-align: center; */

    margin-top: 50px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 50px;
        padding: 0 20px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;

        ${props =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 50px;
        border-radius: 0 5px 5px 0;
        background: #04d361;
        border: none;
        color: #fff;
        font-weight: bold;
        transition: 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 55px;
    max-width: 700px;

    a {
        background: #fff;
        height: 150px;
        padding: 20px;
        text-decoration: none;
        margin-bottom: 20px;
        transition: 0.2s;
        border-radius: 4px;

        display: flex;
    }

    a img {
        height: 100px;
        margin: auto 0;
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

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;
