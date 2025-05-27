import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    results: []
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
      state.results = [];
    }
  }
});

export const { setSearchQuery, setSearchResults, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;