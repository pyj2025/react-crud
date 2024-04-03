import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=2`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
