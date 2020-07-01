import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Title, Container } from './styles';
import logoImg from '../../assets/lordlogo.png';
import elfimg from '../../assets/elf.png';

const Dashboard: React.FC = () => {
    return (
        <>
            <Title>
                <img src={logoImg} alt="LOTR" />
                <p>All Middle Earth's characters</p>
            </Title>
            <Container>
                <li>
                    <img src={elfimg} alt="race" />
                    <span>Legolas</span>
                </li>
                <li>
                    <img src={elfimg} alt="race" />
                    <span>Legolas</span>
                </li>
                <li>
                    <img src={elfimg} alt="race" />
                    <span>Legolas</span>
                </li>
                <li>
                    <img src={elfimg} alt="race" />
                    <span>Legolas</span>
                </li>
                <li>
                    <img src={elfimg} alt="race" />
                    <span>Legolas</span>
                </li>
                <li>
                    <img src={elfimg} alt="race" />
                    <span>Legolas</span>
                </li>
                <li>
                    <img src={elfimg} alt="race" />
                    <span>Legolas</span>
                </li>
                <li>
                    <img src={elfimg} alt="race" />
                    <span>Legolas</span>
                </li>
            </Container>
        </>
    );
};

export default Dashboard;
