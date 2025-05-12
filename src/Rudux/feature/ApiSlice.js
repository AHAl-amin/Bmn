


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://192.168.10.124:5000/api/auth/v1",
    prepareHeaders: (headers, { getState }) => {
        const accessToken = localStorage.getItem("access_token");
        console.log(accessToken);
        const token = getState().auth.token || accessToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Content-Type", "application/json");
        return headers;
    },
});

export const ApiSlice = createApi({
    reducerPath: "ApiSlice",
    baseQuery,
    // List all tag types used in the API slice
    tagTypes: ["Profile", "UserDashboard", "Project", "Employees"],
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: "/accounts/profile/",
                method: "GET",
            }),
            providesTags: ["Profile"],
            keepUnusedDataFor: 0,
            refetchOnMountOrArgChange: true,
        }),

       
       

        
    }),
});

// Export hooks for usage in components
export const {
   
} = ApiSlice;

export default ApiSlice;