import Shop from "../../Component/HomeSection/Shop/Shop";
import TopInstructor from "../../Component/HomeSection/TopInstructor";
import Banner from "../../Shared/Banner/Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<TopInstructor></TopInstructor>
			<Shop></Shop>
		</div>
	);
};

export default Home;
