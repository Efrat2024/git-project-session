<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit"
import apiSlice from "../Slices/apiSlice"
import authSliceReducer from "../Slices/authSlice"
import counter from "../Slices/counterSlice"
const store = configureStore({
    reducer: {
        counter,
=======
// import { configureStore } from "@reduxjs/toolkit"
// import apiSlice from "../Slices/apiSlice"
// import authSliceReducer from "../Slices/authSlice"
// const store = configureStore({
//     reducer: {
//         auth: authSliceReducer,
//         [apiSlice.reducerPath]: apiSlice.reducer
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools: true
// })
// export default store

import { configureStore } from "@reduxjs/toolkit"
import apiSlice from "../Slices/apiSlice"
import authSliceReducer from "../Slices/authSlice"
const store = configureStore({
    reducer: {
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        auth: authSliceReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
export default store
