import { FormEvent } from 'react';
import { Header } from '../components/Header';
import '../styles/pages-styles/home.scss';

export function Home() {
  const handleSearchSubmit = (evt: FormEvent) => {
    evt.preventDefault();
  }
  return (
    <div className="layout-container">
      <Header/>
        <main className="home-main-content">
          <form onSubmit={evt => handleSearchSubmit(evt)}>
            <label htmlFor="searchRepos">
              <h1>Browse repositories <br/>on GitHub</h1>
            </label>

            <div className="search-repos-container">
              <input 
                id="searchReposInput" 
                type="search"
                placeholder="Type here"
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