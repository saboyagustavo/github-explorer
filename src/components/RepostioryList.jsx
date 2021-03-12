import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

const path = 'https://api.github.com/orgs/rocketseat/repos';

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
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />;
                })}
            </ul>
        </section>
    );
}
