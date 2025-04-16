import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logError } from "../utils/logError.js"
import { getSeaFoodMeal, saveYourMeal } from "../api/mealApi.js";

export const fetchSeaFoodMeal = createAsyncThunk("meal/fetchMeal", async (_, { rejectWithValue }) => {
    try {
        return await getSeaFoodMeal();
    } catch (error) {
        logError("FetchMeal Error", error);
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
});

export const saveMeal = createAsyncThunk("meal/saveYourMeal", async ({meal, username}, {rejectWithValue}) => {
    try {
        return await saveYourMeal(meal, username);
    } catch (error) {
        logError("saveYourMeal Error", error);
    }
})

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
        })
    }
})

export const { clearMeal } = mealSlice.actions;
export default mealSlice.reducer;