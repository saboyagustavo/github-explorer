import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

const path = 'https://api.github.com/orgs/rocketseat/repos';

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch(path)
            .then(response => response.json())
            .then(data => setRepositories(data))
            .catch(err => console.log({ error: err.message }));
    }, []);

    console.log(repositories);

    return (
        <section className="repository-list">
            <h1>Repositories List</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}
