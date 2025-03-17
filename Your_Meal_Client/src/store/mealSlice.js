import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSeaFoodMeal } from "../api/mealApi.js";

export const fetchSeaFoodMeal = createAsyncThunk("meal/fetchMeal", async (_, { rejectWithValue }) => {
    try {
        return await getSeaFoodMeal();
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
});

const mealSlice = createSlice({
    name: "meal",
    initialState: { data: null, isLoading: false, error: null},
    reducers: {
        clearMeal: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSeaFoodMeal.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        // done
        .addCase(fetchSeaFoodMeal.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        // fail
        .addCase(fetchSeaFoodMeal.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

    }
})

export const { clearMeal } = mealSlice.actions;
export default mealSlice.reducer;