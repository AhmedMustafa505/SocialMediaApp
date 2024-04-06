import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';

import commentsApi from '../../api/commentsApi';
import { CommentProps } from '../../components/features/CommentCard/interface';

interface CommentsState {
  comments: CommentProps[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;

}

const initialState: CommentsState = {
  comments: [],
  status: 'idle',
  error: null,
};

export const fetchComments = createAsyncThunk<CommentProps[], { postId: number }, { rejectValue: string }>(
    'comments/fetchComments',
    async ({ postId }, { rejectWithValue }) => {
      try {
        const comments = await commentsApi.getCommentsForPost(postId);
        return comments;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.log(error.response.data);
          return rejectWithValue('Failed to fetch comments for this post');
        }
        return rejectWithValue('An unknown error occurred');
      }
    }
  );

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
  
});

export default commentsSlice.reducer;
