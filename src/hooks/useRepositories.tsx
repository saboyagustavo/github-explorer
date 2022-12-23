import { createContext, useState, useContext, ReactNode } from 'react'
import { api } from "../services/api";
import { Repository } from "../@types/components";

const RepositoriesContext = createContext<RepositoriesContextData>({} as RepositoriesContextData);3

export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
  function getRepositoriesInitialData():Repository[] {
    const storageRepositories = localStorage.getItem('@Github:repositories');
    if (!storageRepositories) {
      return [];
    }
    return JSON.parse(storageRepositories);
  }

  /*
  function setLocalRepository(repos: Repository[]) {
    localStorage.setItem('@Github:repositories', JSON.stringify(repos));
  }
  */
 
  const [repository, setRepository] = useState<Repository>();
  const [repositories, setRepositories] = useState(getRepositoriesInitialData());
  
  async function fetchRepository(name: string) {
    try {
      const { data } = await api.get(`/search/repositories?q=${name}`);
      setRepositories(data.items);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <RepositoriesContext.Provider value={{
      repository,
      setRepository,
      repositories,
      setRepositories,
      fetchRepository
    }}>
      {children}
    </RepositoriesContext.Provider>
  )
}

export function useRepositories() {
  const context = useContext(RepositoriesContext);
  return context;
}