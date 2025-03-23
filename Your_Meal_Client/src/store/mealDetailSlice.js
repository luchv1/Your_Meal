import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDetailMeal } from "../api/mealApi.js";

export const fetchDetailMeal = createAsyncThunk(
    "meal/fetchDetailMeal",
    async(mealId, { rejectWithValue }) => {
    try {
        return await getDetailMeal(mealId);
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
});

const mealDetailSlice = createSlice({
    name: "mealDetail",
    initialState: { data: null, isLoading: false, error: null },
    reducers: {
        clearMealDetail: (state) => {
            state.data = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailMeal.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDetailMeal.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchDetailMeal.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { clearMealDetail } = mealDetailSlice.actions;
export default mealDetailSlice.reducer;
