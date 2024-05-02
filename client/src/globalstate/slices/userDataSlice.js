import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    minval: null,
    data: null,
    loading: false,
    error: null
};

export const fetchUserData = createAsyncThunk(
    'userdata/fetchUserData',
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/singleuser/${userId}`); // Fetch user data based on the userId
            return response.data.user;
        } catch (error) {
            console.log(error.response);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const userDataSlice = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.minval = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export const { setUserId } = userDataSlice.actions;
export default userDataSlice.reducer;
