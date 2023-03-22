import { useContext, useState } from 'react';
import { GithubContext } from './GithubContext';

const GithubSearch = () => {
  const { searchUsers } = useContext(GithubContext);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(query);
  };

    return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default GithubSearch;
