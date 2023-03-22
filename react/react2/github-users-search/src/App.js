import { GithubProvider } from './components/GithubContext';
import GithubSearch from './components/GithubSearch';
import GithubResults from './components/GithubResults';

const App = () => {
  return (
    <GithubProvider>
      <h3>GitHub Users Searcher</h3>
      <GithubSearch />
      <GithubResults />
    </GithubProvider>
  );
};

export default App;
 
