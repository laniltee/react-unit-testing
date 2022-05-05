import { useEffect, useState } from 'react';
import { getAllUsers } from '../utils/UsersUtils';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsers()
      .then((usersResponse) =>
        setUsers(
          usersResponse.map((user) => (
            <li className="userItem">
              {user.username} : {user.name}
            </li>
          ))
        )
      )
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>List of Users</h2>
      <ol>{users}</ol>
      {isLoading && <p>Loading Users .. .</p>}
      {isError && <p>Failed to Load Users</p>}
    </>
  );
};

export default Users;
