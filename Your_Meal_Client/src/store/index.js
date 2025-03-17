import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice.js";
import mealSlice from "./mealSlice.js";
import loadingSlice from "./loadingSlice.js";

const store = configureStore ({
    reducer: { auth: authSlice, meal:  mealSlice, loading: loadingSlice},
});

export default store;