// import { useState } from "react";

const Square = ({ value , onSquareClick}) => {
	

	return (
		<div>
			<button
				className="border-2 p-3 h-10 w-10 justify-center align-middle text-center"
				onClick={onSquareClick}
			>
				{value}
			</button>
		</div>
	);
};

export default Square;
