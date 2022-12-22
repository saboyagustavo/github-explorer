import { RepositoryItem } from './RepositoryItem';
import { useRepos } from '../hooks/useRepos';
import '../styles/repositories.scss';

export function RepositoryList() {
    const { repositories } = useRepos();
    return (
        <section className="repository-list">
            <h1>Repositories List</h1>
            <ul>
                {repositories.map((repository: any) => {
                    return <RepositoryItem key={repository.name} repository={repository} />;
                })}
            </ul>
        </section>
    );
}
