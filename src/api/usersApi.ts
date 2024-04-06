import axios from "axios";

 const getUsers = async () =>{
    try {
        const response = await axios.get(`https://gorest.co.in/public/v2/users/`);
        return  response.data;
    } catch (error) {
        console.error('Failed to fetch user details:', error);
    throw error; 
    }
}

export default {
    getUsers,
  };
  