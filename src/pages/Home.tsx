import { FormEvent, useState } from 'react';
import { useRepos } from '../hooks/useRepos';
import { Header } from '../components/Header';

import '../styles/pages-styles/home.scss';

export function Home() {
  const [repositoryName, setRepositoryName] = useState('');
  const { fetchRepository } = useRepos();

  async function handleSearchSubmit(evt: FormEvent) {
    evt.preventDefault();
    console.log('handleSearchSubmit')
    if (!repositoryName.trim().length) {
      throw new Error('Please inform repository name.');
    }

    await fetchRepository(repositoryName);
  }

  return (
    <div className="layout-container">
      <Header />
      <main className="home-main-content">
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
      </main>
    </div>
  );
}