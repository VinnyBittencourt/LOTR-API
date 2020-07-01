import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Container, Title } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/lordlogo.png';
import fellow from '../../assets/fellow.jpg';

const token = '-6LyhtF0oCSWfcdu7l3B';
interface MovieParams {
    movie: string;
}

interface Movie {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<MovieParams>();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        async function loadData(): Promise<void> {
            const response = await api
                .get(`movie/${params.movie}`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then(responde => {
                    console.log(responde.data);
                    setMovie(responde.data);
                });
        }
        loadData();
    }, [params.movie]);

    return (
        <>
            <Title>
                <img src={logoImg} alt="LOTR" />
                <Link to="/">
                    <FiChevronLeft size={20}></FiChevronLeft>Return
                </Link>
            </Title>
            {movie && (
                <Container>
                    <img src={fellow} alt="poster" />
                    <h1>{movie.name}</h1>
                    <p>
                        Run Time In Minutes:
                        <span>{movie.runtimeInMinutes} min</span>
                    </p>
                    <p>
                        Budget In Milllions:
                        <span>$ {movie.budgetInMillions}</span>
                    </p>
                    <p>
                        Box Office Revenue In Millions:
                        <span>$ {movie.boxOfficeRevenueInMillions}</span>
                    </p>
                    <p>
                        Academy Award Nominations:
                        <span>{movie.academyAwardNominations}</span>
                    </p>
                    <p>
                        Academy Awards Wins:
                        <span className="win">{movie.academyAwardWins}</span>
                    </p>
                </Container>
            )}
        </>
    );
};

export default Repository;
