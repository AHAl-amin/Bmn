
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
  tagTypes: ["Profile", "ChefDashboard", "Project", "Employees" , "updateRecipes"], // Add 'updateRecipes' to tagTypes
  endpoints: (builder) => ({

    // chef dashboard

    recipeCreate: builder.mutation({
      query: (formattedData) => ({
        url: "api/recipe/v1/create/",
        method: "POST",
        body: formattedData, // do not stringify!
      }),
      invalidatesTags: ["ChefDashboard"],
    }),



    getCategoryList: builder.query({
      query: () => "/api/recipe/v1/categories/",

    }),


    getCreateRecipe: builder.query({
      query: () => "/api/recipe/v1/all/",
      providesTags: ["ChefDashboard"],
    }),
    getRecipeDettails: builder.query({
      query: (id) => `/api/recipe/v1/details/${id}/`,

    }),
    deleteChefRecipe: builder.mutation({
      query: (id) => ({
        url: `/api/recipe/v1/delete/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["ChefDashboard"],
    }),


    aiTraining: builder.mutation({
      query: ({ formDataToSend, id }) => ({
        url: `/api/recipe/v1/ai-train/create/${id}/`,
        method: "POST",
        body: JSON.stringify(formDataToSend), // Capital "JSON"
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    // recipe update
    recipeUpdate: builder.mutation({
      query: ({ id, form }) => ({
        url: `/api/recipe/v1/update/${id}/`,
        method: 'PUT',
        // body: data,
        body:JSON.stringify(form)// Use the form data directly
      }),
      invalidatesTags: ['updateRecipes'], // Invalidate cache to refresh recipe list
    }),


    // chefdashboared subscription part

    chefPlanCreate: builder.mutation({
      query: (formattedData) => ({
        url: "api/subscriptions/v1/chef-plans/create/",
        method: "POST",
        body: formattedData, // do not stringify!
      }),
      invalidatesTags: ["ChefDashboard"],
    }),


  }),
});

// Export hooks for usage in components
export const {
  useRecipeCreateMutation,

  useGetCategoryListQuery, useGetCreateRecipeQuery, useDeleteChefRecipeMutation, useAiTrainingMutation, useRecipeUpdateMutation, useGetRecipeDettailsQuery, useChefPlanCreateMutation
} = ApiSlice;

export default ApiSlice;