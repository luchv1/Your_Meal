import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendSignupForm, sendLoginForm } from "../api/authApi.js";
import {logError} from "../utils/logError.js"


// Login Thunk
export const postLoginForm = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const token = await sendLoginForm(email, password);
            if (!token) {
                console.log("Login Fail !");
            }
            localStorage.setItem('token', token);
            const userInfo = {email: email, password: password}
            return {
                token,
                user: userInfo,
                message: "Login Successful!"
            };
        } catch (error) {
            logError("login Failed", error);
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

// Signup Thunk
export const postSignupForm = createAsyncThunk(
    "auth/signup",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await sendSignupForm(userData);
            return response;
        } catch (error) {
            logError("login Failed", error);
            return rejectWithValue(error.response?.data || "Signup failed");
        }
    }
);

// Logout Thunk
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { dispatch }) => {
        localStorage.removeItem('token');
        return null;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        user: null,
        isAuthenticated: !!localStorage.getItem('token'),
        isLoading: false,
        error: null
    },
    reducers: {
        // Additional synchronous reducers if needed
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        // Login Cases
        builder.addCase(postLoginForm.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(postLoginForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.error = null;
        })
        .addCase(postLoginForm.rejected, (state, action) => {
            state.isLoading = false;
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        })

        // Signup Cases
        .addCase(postSignupForm.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(postSignupForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            // Handle signup success (might want to auto-login or show success message)
        })
        .addCase(postSignupForm.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        // Logout Cases
        .addCase(logout.fulfilled, (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
        });
    }
});

// Export actions and reducer
export const authActions = {
    ...authSlice.actions,
    postLoginForm,
    postSignupForm,
    logout
};

export default authSlice.reducer;