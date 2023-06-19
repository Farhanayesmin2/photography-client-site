import Gallery from "../../Component/HomeSection/Gallery/Gallery";
import Shop from "../../Component/HomeSection/Shop/Shop";
import TopInstructor from "../../Component/HomeSection/TopInstructor";
import Banner from "../../Shared/Banner/Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Gallery></Gallery>
			<TopInstructor></TopInstructor>

			<Shop></Shop>
		</div>
	);
};

export default Home;
