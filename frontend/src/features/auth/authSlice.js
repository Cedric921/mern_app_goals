import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user')) ?? null;

const initialState = {
	user: user ?? null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.user = null;
			state.isError = false;
			state.isSuccess = false;
			state.isLoading = false;
			state.message = '';
		},
	},
	extraReducers: () => {},
});

export const { reset} = authSlice.actions
export default authSlice.reducer;
