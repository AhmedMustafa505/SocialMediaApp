import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';
import usersApi from '../../api/usersApi';



export interface UserProps {
    id: number;
    name:string,
    email:string,
    gender: string;
    status:string,
  }
interface UsersState {
  Users: UserProps[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;

}

const initialState: UsersState = {
  Users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk<UserProps[], void, { rejectValue: string }>(
    'posts/fetchUsers',
    async (_, { rejectWithValue }) => {
      try {
        const users = await usersApi.getUsers();
        return users;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          return rejectWithValue('Failed to fetch users');
        }
        return rejectWithValue('An unknown error occurred');
      }
    }
  );

export const UsersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
  
});

export default UsersSlice.reducer;
