import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Title, Container } from './styles';
import logoImg from '../../assets/lordlogo.png';
import elfimg from '../../assets/elf.png';

const token = '-6LyhtF0oCSWfcdu7l3B';

const Dashboard: React.FC = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function loadData(): Promise<void> {
            const response = await api
                .get('/character', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then(responde => {
                    console.log(responde.data.docs);
                    setCharacters(responde.data.docs);
                });
        }
        loadData();
    }, []);

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
                {characters.map(char => (
                    <li>
                        <img src={elfimg} alt="race" />
                        <span>{char.name}</span>
                    </li>
                ))}
            </Container>
        </>
    );
};

export default Dashboard;
