const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);

  return response.json();
};

export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);

  return response.json();
};
