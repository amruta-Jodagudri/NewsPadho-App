import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'b4c3875a1d8843b280bda42697e4d7a6';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ country, category, pageSize, page }) => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
    );
    return response.data.articles;
  }
);

export const searchNews = createAsyncThunk(
  'news/searchNews',
  async ({ query, pageSize, page }) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
    );
    return response.data.articles;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(searchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
