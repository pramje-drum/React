import { ShoppingData } from "../../ShoppingData";
const ChildContent = ({ category, isStock, filterItem }) => {
	const filteredData = ShoppingData.filter((item) =>
		item.name.toLowerCase().includes(filterItem.toLowerCase()),
	);
	// console.log(filterItem)
	// const listItems = filteredData.map((e) => {
	// 	if (isStock) {
	// 		if (e.category === category && e.stocked === true) {
	// 			return (
	// 				<li className="flex  text-center items-center">
	// 					<p className="ml-80 ">{e.name}</p>
	// 					<p className="ml-80">{e.price}</p>
	// 					<p className="ml-80">{e.stocked ? "Available" : "Not Available"}</p>
	// 				</li>
	// 			);
	// 		}
	// 	} else {
	// 		if (e.category === category) {
	// 			return (
	// 				<li className="flex    text-center items-center">
	// 					<p className="ml-80 ">{e.name}</p>
	// 					<p className="ml-80">{e.price}</p>
	// 					<p className="ml-80">{e.stocked ? "Available" : "Not Available"}</p>
	// 				</li>
	// 			);
	// 		}
	// 	}
	// });

	return (
		<div>
			<div className="">
				<li className="list-none">
					{filteredData.map((e) => {
						if (isStock) {
							if (e.category === category && e.stocked === true) {
								return (
									<li className="flex  text-center items-center">
										<p className="ml-80 ">{e.name}</p>
										<p className="ml-80">{e.price}</p>
										<p className="ml-80">
											{e.stocked ? "Available" : "Not Available"}
										</p>
									</li>
								);
							}
						} else {
							if (e.category === category) {
								return (
									<li className="flex    text-center items-center">
										<p className="ml-80 ">{e.name}</p>
										<p className="ml-80">{e.price}</p>
										<p className="ml-80">
											{e.stocked ? "Available" : "Not Available"}
										</p>
									</li>
								);
							}
						}
					})}
				</li>
			</div>
		</div>
	);
};

export default ChildContent;
