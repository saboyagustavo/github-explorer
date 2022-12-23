import { useRepositories } from '../hooks/useRepos';
import { RepositoryItem } from './RepositoryItem';

import '../styles/components-styles/repositories.scss';

export function RepositoryList() {
	const { repositories } = useRepositories();
	return (
		<section className="repository-list">
			<h1>Repositories List</h1>
			<ul>
				{repositories.map((repository) => (<RepositoryItem key={repository.id} repository={repository} />))}
			</ul>
		</section>
	);
}
