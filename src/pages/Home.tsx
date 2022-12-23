import { Header } from '../components/Header';
import { RepositoriesProvider } from '../hooks/useRepositories';
import { RepositorySearch } from '../components/RepositorySearch';
import { RepositoryList } from '../components/RepositoryList';

import '../styles/pages-styles/home.scss';

export function Home() {
  return (
    <div className="layout-container">
      <Header homePage/>
      <main className="home-main-content">
        <RepositoriesProvider>
          <RepositorySearch />
          <RepositoryList />
        </RepositoriesProvider>
      </main>
    </div>
  );
}