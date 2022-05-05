import axios from 'axios';

export const getAllUsers = async () => {
  try {
    const users = await axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
    });
    return users.data.map((user) => ({
      name: user.name,
      username: user.username,
    }));
  } catch (e) {
    return [];
  }
};

export const getToDos = async (userId) => {
  try {
    const toDosResponse = await axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/todos/${userId}`,
    });
    return toDosResponse.data;
  } catch (e) {
    return [];
  }
};
