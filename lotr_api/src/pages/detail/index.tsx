import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, Container, Issues } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/comp3.png';

interface CharacterParams {
    character: string;
}

interface Repository {
    full_name: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<CharacterParams>();
    // const [forks, setForks] = useState([]);

    // useEffect(() => {
    //     api.get(`repos/${params.repository}`).then(response => {
    //         console.log(response.data);
    //     });
    // }, [params.repository]);

    // useEffect(() => {
    //     api.get(`repos/${params.repository}/issues`).then(response => {
    //         console.log(response.data);
    //     });
    // }, [params.repository]);

    //Usando agora ASYNC and AWAIT
    // useEffect(() => {
    //     async function loadData(): Promise<void> {
    //         const repositorios = await api.get(`repos/${params.repository}`);
    //         const issues = await api.get(`repos/${params.repository}/issues`);
    //         console.log(repositorios);
    //         console.log(issues);
    //     }
    //     loadData(); //Tem que chamar a função
    // }, [params.repository]);

    //Promise all para chamar tudo de uma vez
    // useEffect(() => {
    //     async function loadData(): Promise<void> {
    //         const [repositorios, issue] = await Promise.all([
    //             await api.get(`repos/${params.character}`),
    //             await api.get(`repos/${params.character}/issues`),
    //         ]);
    //         setRepository(repositorios.data);
    //         setIssues(issue.data);
    //     }
    //     loadData();
    // }, [params.character]);

    return (
        <>
            <Header>
                <p>Hello</p>
            </Header>
        </>
    );
};

export default Repository;
