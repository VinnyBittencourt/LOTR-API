import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Title, Container } from './styles';
import logoImg from '../../assets/lordlogo.png';
import elfimg from '../../assets/elf.png';

import fellow from '../../assets/fellow.jpg';
import two from '../../assets/two.jpg';
import returnof from '../../assets/return.jpg';
import une from '../../assets/une.jpg';
import desolation from '../../assets/desolation.jpg';
import five from '../../assets/five.jpg';
var imgem = fellow;

const token = '-6LyhtF0oCSWfcdu7l3B';

interface Movie {
    _id: string;
    name: string;
}

const Dashboard: React.FC = () => {
    const [movie, setMovie] = useState<Movie[]>([]);

    useEffect(() => {
        async function loadData(): Promise<void> {
            const response = await api
                .get('/movie', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then(responde => {
                    console.log(responde.data.docs);
                    setMovie(responde.data.docs);
                });
        }
        loadData();
    }, []);

    return (
        <>
            <Title>
                <img src={logoImg} alt="LOTR" />
                <p>All Middle Earth movies' information</p>
            </Title>
            <Container>
                {movie.map(char => (
                    <Link to={`/detail/${char._id}`} key={char._id}>
                        <img src={elfimg} alt="race" />
                        <span>{char.name}</span>
                    </Link>
                ))}
            </Container>
        </>
    );
};

export default Dashboard;
