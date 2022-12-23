interface AvatarProps {
  username: string;
  profileImg?: string;
}

export interface HeaderProps {
  homePage?: boolean;
}

interface Repository {
  id: string;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url: string;
    html_url: string;
    login: string;
  };     
}

interface RepositoryItemProps {
	repository: Repository;
}