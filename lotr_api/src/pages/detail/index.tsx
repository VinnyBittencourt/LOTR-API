import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Container, Title } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/lordlogo.png';
import fellow from '../../assets/fellow.jpg';
import two from '../../assets/two.jpg';
import returnof from '../../assets/return.jpg';
import une from '../../assets/une.jpg';
import desolation from '../../assets/desolation.jpg';
import five from '../../assets/five.jpg';
import hob from '../../assets/hobbit.jpg';
import lotr from '../../assets/lotr.jpg';

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

const filmeimagem = [
    {
        id: '5cd95395de30eff6ebccde5d',
        imagem: returnof,
    },
    {
        id: '5cd95395de30eff6ebccde5b',
        imagem: two,
    },
    {
        id: '5cd95395de30eff6ebccde5c',
        imagem: fellow,
    },
    {
        id: '5cd95395de30eff6ebccde5a',
        imagem: five,
    },
    {
        id: '5cd95395de30eff6ebccde59',
        imagem: desolation,
    },
    {
        id: '5cd95395de30eff6ebccde58',
        imagem: une,
    },
    {
        id: '5cd95395de30eff6ebccde57',
        imagem: hob,
    },
    {
        id: '5cd95395de30eff6ebccde56',
        imagem: lotr,
    },
];

const Repository: React.FC = () => {
    const { params } = useRouteMatch<MovieParams>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [imagem2, setImagem2] = useState(fellow);
    const [switcher, setSwitcher] = useState(false);

    useEffect(() => {
        async function loadData(): Promise<void> {
            const response = await api
                .get(`movie/${params.movie}`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then(responde => {
                    setMovie(responde.data);
                    setSwitcher(true);
                });
        }
        loadData();
    }, [params.movie]);

    function loadimg() {
        if (movie) {
            if (movie._id == '5cd95395de30eff6ebccde5d') {
                setImagem2(returnof);
                setSwitcher(false);
                return imagem2;
            }
            if (movie._id == '5cd95395de30eff6ebccde5b') {
                setImagem2(two);
                setSwitcher(false);
                return imagem2;
            } else {
                setSwitcher(false);
                return imagem2;
            }
        }
    }

    const nome = filmeimagem.filter(i => i.id === params.movie);
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
                    <img src={nome[0].imagem} alt="poster" />
                    {/* <h1>{nome}</h1> */}
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
