export interface HeaderProps {
  homePage?: boolean;
}

interface Repository {
  id: string;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
}

interface RepositoryItemProps {
	repository: {
		name: string;
		description: string;
		html_url: string;
	};
}