import { RepositoryList } from './components/RepostioryList.jsx';
import { Counter } from './components/Counter';

import './styles/global.scss';

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    );
}
