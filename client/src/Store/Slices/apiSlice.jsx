import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

<<<<<<< HEAD

=======
// const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({
//         baseUrl:
//             'http://localhost:4444/',

//         credentials:'include',
//         prepareHeaders:(headers,{getState})=>{
//             console.log(getState().authSlice);
//             const accessToken=getState().authSlice.token
//             // const userInfo=getState().auth.user
//             console.log(accessToken);
//             if(accessToken){
//               //headers.set("authorization",`Bearer ${accessToken}`)
//                 headers.set("authorization",`Bearer ${accessToken}`)
//                 debugger;
//                 headers.set("ttt",1)
//                 headers.getState("ttt")
//                 console.log("headers",headers);
//             }
//             // if(userInfo){
//             //     headers.set("userInfo",userInfo)
//             // }
//             return headers
//         }
//     }),
//     endpoints: () => ({}),
// })
// export default apiSlice
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4444",
        credentials: 'include',
<<<<<<< HEAD
=======
        // prepareHeaders: (headers, { getState }) => {
        //     debugger;
        //     console.log("apiSlice");
        //     //const token = getState().apiSlice.token
        //     ///קריטיי!!!!!!!!!!!!!!!!!
        //     const token = getState().authSlice.token
        //     headers.set("ssssssss","apislice")
        //     if (token) {
        //         headers.set("authorization", `Bearer ${token}`)
        //         // localStorage.setItem("aaaa",headers.get("authorization"))
        //         console.log(headers,"jjjj");
        //     }
        //     return headers
        // }
        credentials: 'include',
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        prepareHeaders: (headers, { getState }) => {
           
            const token = getState().authSlice.token
            if (token) {
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: () => ({})
})
export default apiSlice