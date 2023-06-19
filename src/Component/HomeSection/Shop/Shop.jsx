import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const products = [
	{
		id: 1,
		name: "Product 1",
		price: 19.99,
		image:
			"https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		description: "Description 1",
	},
	{
		id: 2,
		name: "Product 2",
		price: 29.99,
		image:
			"https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		description: "Description 2",
	},
	{
		id: 1,
		name: "Product 1",
		price: 19.99,
		image:
			"https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		description: "Description 1",
	},
	{
		id: 2,
		name: "Product 2",
		price: 29.99,
		image:
			"https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		description: "Description 2",
	},
	// Add more product objects as needed
];

const Shop = () => {
	const [hoveredProductId, setHoveredProductId] = useState(null);

	const handleMouseEnter = (productId) => {
		setHoveredProductId(productId);
	};

	const handleMouseLeave = () => {
		setHoveredProductId(null);
	};

	return (
		<div className="container mx-auto">
			<header className="bg-gray-900 text-white py-4 px-8">
				<h1 className="text-2xl">Shop</h1>
			</header>

			<div className="flex justify-between mt-4 px-8">
				<div className="w-1/4">
					<select className="border border-gray-300 rounded p-2">
						<option value="category">Sort by Category</option>
						<option value="top">Sort by Top</option>
						<option value="new">Sort by New</option>
					</select>
				</div>

				<div className="w-3/4 flex justify-end">
					{/* Sorting options */}
					<Tabs>
						<TabList>
							<Tab>Class Tab</Tab>
							<Tab>Categories</Tab>
							<Tab>New</Tab>
							<Tab>Top Seller</Tab>
						</TabList>

						{products.map((product) => (
							<TabPanel key={product.id}>
								<div
									className="relative bg-white rounded-lg shadow-lg p-4"
									onMouseEnter={() => handleMouseEnter(product.id)}
									onMouseLeave={handleMouseLeave}
								>
									<div
										className="h-40 bg-cover bg-center bg-no-repeat"
										style={{ backgroundImage: `url(${product.image})` }}
									>
										{hoveredProductId === product.id && (
											<div className="absolute inset-0 flex items-center justify-center">
												<button className="text-white w-50 flex items-center p-2 bg-cyan-400 text-md  font-mono">
													<FaCartPlus className="" /> Add to Cart
												</button>
											</div>
										)}
									</div>
									<div className="flex justify-between items-center mt-4">
										<h3 className="text-lg font-medium">{product.name}</h3>
										<span className="text-gray-600">
											${product.price.toFixed(2)}
										</span>
									</div>
									<p className="text-gray-500">{product.description}</p>
								</div>
							</TabPanel>
						))}
						{products.map((product) => (
							<TabPanel key={product.id}>
								<div
									className="relative bg-white rounded-lg shadow-lg p-4"
									onMouseEnter={() => handleMouseEnter(product.id)}
									onMouseLeave={handleMouseLeave}
								>
									<div
										className="h-40 bg-cover bg-center bg-no-repeat"
										style={{ backgroundImage: `url(${product.image})` }}
									>
										{hoveredProductId === product.id && (
											<div className="absolute inset-0 flex items-center justify-center">
												<button className="text-white w-50 flex items-center p-2 bg-cyan-400 text-md  font-mono">
													<FaCartPlus className="" /> Add to Cart
												</button>
											</div>
										)}
									</div>
									<div className="flex justify-between items-center mt-4">
										<h3 className="text-lg font-medium">{product.name}</h3>
										<span className="text-gray-600">
											${product.price.toFixed(2)}
										</span>
									</div>
									<p className="text-gray-500">{product.description}</p>
								</div>
							</TabPanel>
						))}
						{products.map((product) => (
							<TabPanel key={product.id}>
								<div
									className="relative bg-white rounded-lg shadow-lg p-4"
									onMouseEnter={() => handleMouseEnter(product.id)}
									onMouseLeave={handleMouseLeave}
								>
									<div
										className="h-40 bg-cover bg-center bg-no-repeat"
										style={{ backgroundImage: `url(${product.image})` }}
									>
										{hoveredProductId === product.id && (
											<div className="absolute inset-0 flex items-center justify-center">
												<button className="text-white w-50 flex items-center p-2 bg-cyan-400 text-md  font-mono">
													<FaCartPlus className="" /> Add to Cart
												</button>
											</div>
										)}
									</div>
									<div className="flex justify-between items-center mt-4">
										<h3 className="text-lg font-medium">{product.name}</h3>
										<span className="text-gray-600">
											${product.price.toFixed(2)}
										</span>
									</div>
									<p className="text-gray-500">{product.description}</p>
								</div>
							</TabPanel>
						))}
						{products.map((product) => (
							<TabPanel key={product.id}>
								<div
									className="relative bg-white rounded-lg shadow-lg p-4"
									onMouseEnter={() => handleMouseEnter(product.id)}
									onMouseLeave={handleMouseLeave}
								>
									<div
										className="h-40 bg-cover bg-center bg-no-repeat"
										style={{ backgroundImage: `url(${product.image})` }}
									>
										{hoveredProductId === product.id && (
											<div className="absolute inset-0 flex items-center justify-center">
												<button className="text-white w-50 flex items-center p-2 bg-cyan-400 text-md  font-mono">
													<FaCartPlus className="" /> Add to Cart
												</button>
											</div>
										)}
									</div>
									<div className="flex justify-between items-center mt-4">
										<h3 className="text-lg font-medium">{product.name}</h3>
										<span className="text-gray-600">
											${product.price.toFixed(2)}
										</span>
									</div>
									<p className="text-gray-500">{product.description}</p>
								</div>
							</TabPanel>
						))}
					</Tabs>
				</div>
			</div>

			<section className="px-8 mt-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
					{/* Product cards within the tabs */}
				</div>

				<div className="flex justify-center mt-8">
					<ul className="flex">
						<li className="mr-2">
							<a
								href="#"
								className="px-4 py-2 bg-gray-200 rounded-l-lg hover:bg-gray-300"
							>
								1
							</a>
						</li>
						<li className="mr-2">
							<a href="#" className="px-4 py-2 bg-gray-200 hover:bg-gray-300">
								2
							</a>
						</li>
						<li className="mr-2">
							<a href="#" className="px-4 py-2 bg-gray-200 hover:bg-gray-300">
								3
							</a>
						</li>
						<li className="mr-2">
							<a
								href="#"
								className="px-4 py-2 bg-gray-200 rounded-r-lg hover:bg-gray-300"
							>
								4
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default Shop;
