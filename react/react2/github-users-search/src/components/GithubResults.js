import { useContext } from 'react';
import { GithubContext } from './GithubContext';

const GithubResults = () => {
  const { loading, error, users } = useContext(GithubContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching ({error})</div>;
  }

  if (users.length === 0) {
    return <div>No results...</div>;
  }

  return (
    <ul>
      {users.map(({id, login}) => (
        <li key={id}>{login}</li>
      ))}
    </ul>
  );
};

export default GithubResults;
