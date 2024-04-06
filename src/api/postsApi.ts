import axios from 'axios';

const baseURL = 'https://gorest.co.in/public/v2';

const getPosts = async () => {
  const response = await axios.get(`${baseURL}/posts`);
  return response.data;
};

export default {
  getPosts,
};
