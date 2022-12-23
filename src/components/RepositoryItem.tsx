import { RepositoryItemProps } from "../@types/components";
import arrowRight from '../assets/images/ArrowRight.svg';
import { Avatar } from "./Avatar";

import '../styles/components-styles/repositoryItem.scss';

export function RepositoryItem({ repository }: RepositoryItemProps) {
	const { name, description, html_url, owner } = repository;
	console.log(repository);

	return (
		<li className="repository-item">
			<div className="repo-info">
				<Avatar username={owner.login} profileImg={owner.avatar_url} />
				<div className="repo-name-n-description">
					<strong>{name}</strong>
					<p>{description}</p>
				</div>
			</div>
			
			<a href={html_url} target="_blank" title="visit repository" className="visit-repo-button">
				<img src={arrowRight} alt="an arrow to the right" />
			</a>
		</li>
	);
}
