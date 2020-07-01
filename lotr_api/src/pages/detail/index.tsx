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
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        avatar_url: string;
        login: string;
    };
}

interface Issue {
    id: number;
    html_url: string;
    title: string;
    user: {
        login: string;
    };
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<CharacterParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
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
    useEffect(() => {
        async function loadData(): Promise<void> {
            const [repositorios, issue] = await Promise.all([
                await api.get(`repos/${params.character}`),
                await api.get(`repos/${params.character}/issues`),
            ]);
            setRepository(repositorios.data);
            setIssues(issue.data);
        }
        loadData();
    }, [params.character]);

    return (
        <>
            <Header>
                <div className="compass__container">
                    <img src={logoImg} alt="logo" className="compass" />
                    <h2>
                        <span>GitHub</span>_Explorer
                    </h2>
                </div>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            {repository && (
                <Container>
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        ></img>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues</span>
                        </li>
                    </ul>
                </Container>
            )}

            <Issues>
                {issues.map(issue => (
                    <a
                        href={issue.html_url}
                        key={issue.id}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;
