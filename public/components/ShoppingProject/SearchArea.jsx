import React from "react";

const SearchArea = ({ stockedFlag, setStockedFlag, setItem }) => {
	return (
		<div>
			{/* search bar */}
			<div>
				<input
					className="peer h-full min-h-25 w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
					type="text"
					onChange={(e) => {
						setItem(e.target.value);
					}}
				/>
			</div>
			{/* filter option */}
			<div>
				<input
				on
					type="checkbox"
					className=""
					onClick={() => {
						setStockedFlag(!stockedFlag);
					}}
				/>
				<span>Show only stocked items!</span>
			</div>
		</div>
	);
};

export default SearchArea;
