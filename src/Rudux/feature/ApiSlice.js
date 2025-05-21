import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseURL } from "../../lib/dotenv";

const baseQuery = fetchBaseQuery({
	baseUrl: apiBaseURL,

	prepareHeaders: (headers, { getState, endpoint }) => {
		const refreshToken = localStorage.getItem("refresh_token");
		const token = getState().auth.token;
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		// Only set Content-Type to application/json for non-file uploads
		if (!["recipeCreate", "updateProfile"].includes(endpoint)) {
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
		// user dashboard
		getProfile: builder.query({
			query: () => "/api/auth/v1/profile/",
			providesTags: ["Profile"],
		}),

		updateProfile: builder.mutation({
			query: (formDataToSend) => ({
				url: "/api/auth/v1/update-profile/",
				method: "PUT",
				body: formDataToSend, // do not stringify!
			}),
			invalidatesTags: ["Profile"],
		}),

		// chef dashboard
		recipeCreate: builder.mutation({
			query: (formDataToSend) => ({
				url: "/api/recipe/v1/create/",
				method: "POST",
				body: formDataToSend, // do not stringify!
			}),
			invalidatesTags: ["ChefDashboard"],
		}),

		getCategoryList: builder.query({
			query: () => "/api/recipe/v1/categories/",
		}),
		getCreateRecipe: builder.query({
			query: () => "/api/recipe/v1/all/",
		}),
		deleteChefRecipe: builder.mutation({
			query: (id) => ({
				url: `/api/recipe/v1/delete/${id}/`,
				method: "DELETE",
			}),
			invalidatesTags: ["ChefDashboard"],
		}),

		// chefAiChat: builder.mutation({
		//   query: (formDataToSend) => ({
		//     url: "/api/recipe/v1/ai-train/create/1/",
		//     method: "POST",
		//     body: formDataToSend, // do not stringify!
		//   }),
		// }),
		aiTraining: builder.mutation({
			query: ({ formDataToSend, id }) => ({
				url: `/api/recipe/v1/ai-train/create/${id}/`,
				method: "POST",
				body: JSON.stringify(formDataToSend), // Capital "JSON"
				// headers: {
				//   "Content-Type": "application/json",
				// },
			}),
		}),
	}),
});

// Export hooks for usage in components
export const {
	useGetProfileQuery,
	useUpdateProfileMutation,
	useRecipeCreateMutation,
	useGetCategoryListQuery,
	useGetCreateRecipeQuery,
	useDeleteChefRecipeMutation,
	useAiTrainingMutation,
} = ApiSlice;

export default ApiSlice;
