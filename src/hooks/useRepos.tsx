import { useState } from "react";
import { api } from "../services/api";
import { Repository } from "../@types/components";

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

export function useRepos() {
  const [repository, setRepository] = useState<Repository>();
  const [repositories, setRepositories] = useState(getRepositoriesInitialData());

  async function fetchRepository(name: string) {
    try {
      const { data } = await api.get(`/search/repositories?q=${name}`);
      // console.log('data', data);
      setRepositories([...repositories, data]);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return {
    repository,
    setRepository,
    repositories,
    setRepositories,
    fetchRepository
  }
}