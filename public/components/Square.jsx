// import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
	return (
		<div>
			<button
				className="h-20 w-20 bg-white border-none rounded-lg shadow-sm text-3xl font-black flex items-center justify-center transition-all hover:bg-slate-50 active:scale-95 text-slate-800 disabled:cursor-default"
				onClick={onSquareClick}
			>
				{value}
			</button>
		</div>
	);
};

export default Square;
