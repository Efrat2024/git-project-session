import apiSlice from '../Slices/apiSlice';
import { setToken } from './authSlice';

// Logout
const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (e) => ({
                url: "/api/auth/login",
                method: "POST",
                body: e
            }),
            providesTags:["Vacation1"]
        }),
    
        refresh: build.mutation({
            query: () => ({
                url: "/api/auth/login",
                method: "GET"
            }),
            providesTags:["Vacation1"]
        }),

        register: build.mutation({
            query: (registerUser)=>({
            url: "/api/auth/register",
            method: "POST",
            body: registerUser
            }),
            providesTags:["Vacation1"]
            }),
        getUser: build.query({
            query: () => ({
                url: "/api/user",
                method: "GET",
            }),
            providesTags:["Vacation1"]

        }),
        keepMeUpdate: build.mutation({
            query: (e) => ({
                url: "/api/user/keepMeUpdate",
                method: "PUT",
                body:e
            }),
            providesTags:["Vacation1"]
        }),
        AddQuestionToTamar: build.mutation({
            query: (e) => ({
                url: "/api/user/AddQuestionToTamar",
                method: "POST",
                body:e
            }),
            providesTags:["Vacation1"]
        }),
        getAllRegisters: build.query({
            query: () => ({
                url: "/api/user/allRegisters",
                method: "PUT"
            }),
            providesTags:["Vacation1"]
        }),
    }),
});

// Destructure the generated hooks from authApiSlice
export const {useRegisterMutation,useLoginMutation, useRefreshMutation ,useGetUserQuery,useKeepMeUpdateMutation,useGetAllRegistersQuery,useAddQuestionToTamarMutation} = authApiSlice

// const authApiSlice = apiSlice.injectEndpoints({
//     endpoints: (build) => ({
//         register: build.mutation(
//             {
//             query: (registerUser) => ({
//                 url: "/api/auth/register",
//                 method: "POST",
//                 body: registerUser
//             })
//         }),
//         login: build.mutation({
//             query: (loginData) => ({
//                 url: "/api/auth/login",
//                 method: "POST",
//                 body: loginData
//             })
//         })
//     })
// })
// import apiSlice from '../Slices/apiSlice';
// const authApiSlice = apiSlice.injectEndpoints({
//     endpoints: (build) => ({
//         register: build.mutation({
//             query: (registerUser) => ({
//                 url: "/api/auth/register",
//                 method: "POST",
//                 body: registerUser
//             })
//         }),
//         login: build.mutation({
//             query: (loginData) => ({
//                 url: "/api/auth/login",
//                 method: "POST",
//                 body: loginData
//             })
//         }),
//         getUser: build.query({
//             query: () => ({
//                 url: "/api/user",
//                 method: "GET",
//             }),
//             providesTags: ["Vacation1"]

//         }),
//     })
// })
// export const { useRegisterMutation, useLoginMutation, useGetUserQuery } = authApiSlice