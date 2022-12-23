interface RepositoriesContextData {
  repository: Repository | undefined;
  setRepository: Function;
  repositories: Repository[];
  setRepositories: Function;
  fetchRepository: (name: string) => Promise<void>;
}

interface RepositoriesProviderProps {
  children: ReactNode;
}