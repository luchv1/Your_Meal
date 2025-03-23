import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice.js";
import mealSlice from "./mealSlice.js";
import loadingSlice from "./loadingSlice.js";
import mealDetailSlice from "./mealDetailSlice.js";

const store = configureStore ({
    reducer:
        {
            auth: authSlice,
            meal:  mealSlice,
            loading: loadingSlice,
            mealDetail: mealDetailSlice
        },
});

export default store;