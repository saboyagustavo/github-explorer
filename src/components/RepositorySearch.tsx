import { FormEvent, useState } from 'react';
import { useRepositories } from '../hooks/useRepositories';

import '../styles/components-styles/repositorySearch.scss';

export function RepositorySearch() {
  const [repositoryName, setRepositoryName] = useState('');
  const { fetchRepository } = useRepositories();


  async function handleSearchSubmit(evt: FormEvent) {
    evt.preventDefault();
    if (!repositoryName.trim().length) {
      throw new Error('Please inform repository name.');
    }
    await fetchRepository(repositoryName);
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <label htmlFor="searchRepos">
        <h1>Browse repositories <br />on GitHub</h1>
      </label>

      <div className="search-repos-container">
        <input
          id="searchReposInput"
          type="search"
          placeholder="Type here"
          value={repositoryName}
          onChange={evt => setRepositoryName(evt.target.value)}
          autoFocus
        />
        <button
          id="submitSearchRepos"
          type="submit"
        >
          Pesquisar
        </button>
      </div>
    </form>
  );
}