import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export const getUsers = async (pageNumber) => {
  try {
    // only page 1 and 2 works
    const response = await axios.get(`${BASE_URL}/users?page=${pageNumber}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// post user
export const createUser = async (name) => {
  try {
    await axios
      .post(`${BASE_URL}/users`, {
        name: name,
        // job is missing in Get LIST USERS
        job: name,
      })
      .then((response) => {
        console.log('createUser response = ', response);
      });
  } catch (error) {
    console.error('Error creating users:', error);
  }
};

// edit User
export const updateUser = async (name) => {
  try {
    await axios
      .put(`${BASE_URL}/users/2`, {
        name: name,
        // job is missing in Get LIST USERS
        job: name,
      })
      .then((response) => {
        console.log('updateUser response = ', response);
      });
  } catch (error) {
    console.error('Error updating users:', error);
  }
};

// delete User
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/users/${id}`).then((response) => {
      console.log('deleteUser response = ', response);
    });
  } catch (error) {
    console.error('Error deleting users:', error);
  }
};
