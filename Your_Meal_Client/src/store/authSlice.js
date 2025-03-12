import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: null,
        password: null,
    },
    reducers: {
        saveAuth(state, actions) {
            const email = actions.payload.email;
            const password = actions.payload.password
            state.email = email;
            state.password = password;
        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;