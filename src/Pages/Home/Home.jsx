import Gallery from "../../Component/HomeSection/Gallery/Gallery";
import Provide from "../../Component/HomeSection/Provide/Provide";
import TopInstructor from "../../Component/HomeSection/TopInstructor";
import Banner from "../../Shared/Banner/Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Provide></Provide>
			<Gallery></Gallery>
			<TopInstructor></TopInstructor>
		</div>
	);
};

export default Home;
