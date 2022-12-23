import { RepositoryItemProps } from "../@types/components";

export function RepositoryItem({ repository }: RepositoryItemProps) {
	const { name, description, html_url } = repository;
	return (
		<li>
			<strong>{name}</strong>
			<p>{description}</p>
			<a href={html_url} target="_blank">
				Access repository
			</a>
		</li>
	);
}
