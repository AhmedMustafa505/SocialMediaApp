import axios from 'axios';

const baseURL = 'https://gorest.co.in/public/v2';

const getCommentsForPost = async (postId: number) => {
  try {
    const response = await axios.get(`${baseURL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export default {
  getCommentsForPost,
};
