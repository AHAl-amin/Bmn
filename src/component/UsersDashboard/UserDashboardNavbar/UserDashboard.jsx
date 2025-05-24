import { useDispatch, useSelector } from "react-redux";
import UserDashboardNavbar from "./UserDashboardNavbar";
import AllRecipes from "../UserDashboardPages/AllRecipes/AllRecipes";
import {
	useGetAllBrandsQuery,
	useGetAllRecipesQuery,
} from "../../../Redux/features/ApiSlice"; // Corrected path
import {
	setSelectedBrandId,
	setSearchTerm,
} from "../features/userDashboardSlice";

function UserDashboard() {
	const dispatch = useDispatch();
	const { selectedBrandId, searchTerm } = useSelector(
		(state) => state.userDashboard
	);
	const {
		data: brandsData,
		isLoading: brandsLoading,
		isError: brandsError,
		error: brandsErrorData,
	} = useGetAllBrandsQuery();
	const {
		data: recipesData,
		isLoading: recipesLoading,
		isError: recipesError,
		error: recipesErrorData,
	} = useGetAllRecipesQuery(selectedBrandId);

	if (brandsLoading || recipesLoading) return <div>Loading...</div>;
	if (brandsError)
		return <div>Error loading brands: {brandsErrorData.message}</div>;
	if (recipesError)
		return <div>Error loading recipes: {recipesErrorData.message}</div>;

	const brands = brandsData?.data || [];
	console.log("brands", brands);
	console.log("error ", brandsError);
	const recipes = recipesData?.data || [];

	const handleBrandChange = (brandId) => {
		dispatch(setSelectedBrandId(brandId));
	};

	const handleSearch = (term) => {
		dispatch(setSearchTerm(term));
	};

	return (
		<div>
			<UserDashboardNavbar
				brands={brands}
				onBrandChange={handleBrandChange}
				onSearch={handleSearch}
			/>
			<AllRecipes
				recipes={recipes}
				searchTerm={searchTerm}
				selectedBrandId={selectedBrandId}
			/>
		</div>
	);
}

export default UserDashboard;
