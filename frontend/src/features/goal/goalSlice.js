import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	goals: [],
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: '',
};

export const goalSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase();
	},
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
