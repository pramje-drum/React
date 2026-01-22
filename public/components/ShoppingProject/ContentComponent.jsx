import React from "react";
import ChildContent from "./ChildContent";

const ContentComponent = ({ category, isStock, filterItem }) => {
	return (
		<div>
			{/* heading */}
			<div className="flex justify-center">
				<h1 className="font-bold text-3xl">{category}</h1>
			</div>

			{/* child content */}
			<div>
				<ChildContent
					category={category}
					isStock={isStock}
					filterItem={filterItem}
				/>
			</div>
		</div>
	);
};

export default ContentComponent;
