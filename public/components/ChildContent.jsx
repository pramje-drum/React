import { ShoppingData } from "../ShoppingData";
const ChildContent = ({ category }) => {
	const listItems = ShoppingData.map((e) => {
		if (e.category === category)
			return (
				<li className="flex justify-evenly">
					<p>{e.name}</p>
					<p>{e.price}</p>
				</li>
			);
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
