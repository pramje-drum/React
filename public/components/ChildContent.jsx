import { ShoppingData } from "../ShoppingData";
const ChildContent = ({ category, isStock }) => {
	const listItems = ShoppingData.map((e) => {
		if (isStock) {
			if (e.category === category && e.stocked === true) {
				return (
					<li className="flex justify-evenly">
						<p>{e.name}</p>
						<p>{e.price}</p>
					</li>
				);
			}
		} else {
			if (e.category === category) {
				return (
					<li className="flex justify-evenly">
						<p>{e.name}</p>
						<p>{e.price}</p>
					</li>
				);
			}
		}
	});

	return (
		<div>
			<div className="">
				<li>{listItems}</li>
			</div>
		</div>
	);
};

export default ChildContent;
