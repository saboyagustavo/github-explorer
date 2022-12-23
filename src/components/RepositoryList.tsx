import { useRepositories } from '../hooks/useRepositories';
import { RepositoryItem } from './RepositoryItem';

import '../styles/components-styles/repositoryList.scss';

export function RepositoryList() {
	const { repositories } = useRepositories();
	return (
		<section className="repository-list">
			<ul>
				{repositories.map((repository) => (<RepositoryItem key={repository.id} repository={repository} />))}
			</ul>
		</section>
	);
}
