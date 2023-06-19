const BigButton = () => {
	return (
		<div>
			{/* <div className="">
				<button className="bg-[#37BEB0] px-8 py-4 font-serif font-semibold text-2xl rounded-lg text-black hover:text-white hover:shadow-[inset_16rem_0_0_0] hover:shadow-[#0C6170] duration-[400ms,700ms] transition-[color,box-shadow]">
					
				</button>
			</div> */}
			<div className="">
				<button className=" bg-cyan-500 px-4 py-3 font-serif font-semibold text-lg rounded-full text-white hover:text-black hover:shadow-[inset_16rem_0_0_0] hover:shadow-gray-200  duration-[400ms,700ms] transition-[color,box-shadow]">
					{" "}
					Explore More{" "}
				</button>
			</div>
		</div>
	);
};

export default BigButton;
