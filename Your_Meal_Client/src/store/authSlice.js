import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendSignupForm, sendLoginForm } from "../api/authApi.js"

export const postLoginForm = createAsyncThunk("auth/login",
    async ({email, password}, { rejectWithValue }) => {
    try {
        return await sendLoginForm(email, password);
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong !");
    }
})

export const postSignupForm = createAsyncThunk("auth/signup",
    async (email, { rejectWithValue }) => {
    try {
        return await sendSignupForm(email);
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong !");
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState: { data: null, isLoading: false, error: null},
    reducers: {
        saveAuth(state, actions) {
            const email = actions.payload.email;
            const password = actions.payload.password
            state.email = email;
            state.password = password;
        },
        clearAuth: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(postSignupForm.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        //done
        .addCase(postSignupForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        // fail
        .addCase(postSignupForm.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;