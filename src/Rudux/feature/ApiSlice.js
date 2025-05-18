import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.10.124:3000",
 
  prepareHeaders: (headers, { getState, endpoint }) => {
    const accessToken = localStorage.getItem("access_token");
    const token = getState().auth.token || accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    // Only set Content-Type to application/json for non-file uploads
    if (endpoint !== "recipeCreate") {
      headers.set("Content-Type", "application/json");
    }
    return headers;
  },
});


export const ApiSlice = createApi({
  reducerPath: "ApiSlice",
  baseQuery,
  tagTypes: ["Profile", "ChefDashboard", "Project", "Employees"],
  endpoints: (builder) => ({


 recipeCreate: builder.mutation({
  query: (formDataToSend) => ({
    url: "api/recipe/v1/create/",
    method: "POST",
    body: formDataToSend, // ⬅️ do not stringify!
  }),
  invalidatesTags: ["ChefDashboard"],
}),



    getCategoryList: builder.query({
      query:()=>"/api/recipe/v1/categories/",

    })
  }),
});

// Export hooks for usage in components
export const {
  useRecipeCreateMutation,

  useGetCategoryListQuery,
} = ApiSlice;

export default ApiSlice;