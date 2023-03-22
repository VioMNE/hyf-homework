import { createContext, useState } from 'react';

// @ts-ignore
const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const searchUsers = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();
      setUsers(data.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GithubContext.Provider value={{ loading, error, users, searchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
