import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiBaseURL } from "../../lib/dotenv";

const baseQuery = fetchBaseQuery({
	baseUrl: apiBaseURL,
	prepareHeaders: (headers, { getState, endpoint }) => {
		const token = getState().auth.token;
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		// Only set Content-Type to application/json for non-file uploads
		if (
			!["recipeCreate", "updateProfile", "aiTraining"].includes(endpoint)
		) {
			headers.set("Content-Type", "application/json");
		}
		return headers;
	},
});

export const ApiSlice = createApi({
	reducerPath: "ApiSlice",
	baseQuery,
	tagTypes: [
		"Profile",
		"ChefDashboard",
		"UserDashboard",
		"Project",
		"Employees",
	],
	endpoints: (builder) => ({
		// User dashboard
		getProfile: builder.query({
			query: () => "/api/auth/v1/profile/",
			providesTags: ["Profile"],
		}),

		updateProfile: builder.mutation({
			query: (formDataToSend) => ({
				url: "/api/auth/v1/update-profile/",
				method: "PUT",
				body: formDataToSend, // FormData, do not stringify
			}),
			invalidatesTags: ["Profile"],
		}),

		// User dashboard - Modified to support brand_id filtering
		getAllRecipes: builder.query({
			query: (brand_id = null) =>
				brand_id
					? `/api/main/v1/recipes/${brand_id}`
					: "/api/recipe/v1/all/1",
			providesTags: ["UserDashboard"],
		}),

		getAllBrands: builder.query({
			query: () => "/api/main/v1/chef/brands/",
			providesTags: ["UserDashboard"],
		}),

		getCreateRecipe: builder.query({
			query: () => "/api/recipe/v1/all/",
		}),

		// Chef dashboard
		recipeCreate: builder.mutation({
			query: (formDataToSend) => ({
				url: "/api/recipe/v1/create/",
				method: "POST",
				body: formDataToSend, // FormData, do not stringify
			}),
			invalidatesTags: ["ChefDashboard"],
		}),

		getCategoryList: builder.query({
			query: () => "/api/recipe/v1/categories/",
		}),

		// Removed redundant getCreateRecipe endpoint
		// getCreateRecipe: builder.query({
		//   query: () => "/api/recipe/v1/all/",
		// }),

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
				body: formDataToSend, // Let RTK Query handle serialization
			}),
		}),
	}),
});

// Export hooks for usage in components
export const {
	useGetProfileQuery,
	useUpdateProfileMutation,
	useGetAllRecipesQuery,
	useGetCreateRecipeQuery,
	useGetAllBrandsQuery,
	useRecipeCreateMutation,
	useGetCategoryListQuery,
	useDeleteChefRecipeMutation,
	useAiTrainingMutation,
} = ApiSlice;

export default ApiSlice;
