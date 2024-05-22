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
<<<<<<< HEAD
            providesTags:["Vacation1"]
=======
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        }),
    
        refresh: build.mutation({
            query: () => ({
                url: "/api/auth/login",
                method: "GET"
<<<<<<< HEAD
            }),
            providesTags:["Vacation1"]
=======
            })
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        }),

        register: build.mutation({
            query: (registerUser)=>({
            url: "/api/auth/register",
            method: "POST",
            body: registerUser
<<<<<<< HEAD
            }),
            providesTags:["Vacation1"]
=======
            })
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
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
<<<<<<< HEAD
            providesTags:["Vacation1"]
        }),
        AddQuestionToTamar: build.mutation({
            query: (e) => ({
                url: "/api/user/AddQuestionToTamar",
                method: "POST",
                body:e
            }),
            providesTags:["Vacation1"]
=======
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        }),
        getAllRegisters: build.query({
            query: () => ({
                url: "/api/user/allRegisters",
                method: "PUT"
            }),
<<<<<<< HEAD
            providesTags:["Vacation1"]
=======
        }),
        sendEmailTamar: build.mutation({
            query: (e) => ({
                url: "/api/user/sendEmailTamar",
                method: "POST",
                body:e
            }),
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        }),
    }),
});

// Destructure the generated hooks from authApiSlice
<<<<<<< HEAD
export const {useRegisterMutation,useLoginMutation, useRefreshMutation ,useGetUserQuery,useKeepMeUpdateMutation,useGetAllRegistersQuery,useAddQuestionToTamarMutation} = authApiSlice
=======
export const {useRegisterMutation,useLoginMutation, useRefreshMutation ,useGetUserQuery,useKeepMeUpdateMutation,useGetAllRegistersQuery,useSendEmailTamarMutation} = authApiSlice
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278

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