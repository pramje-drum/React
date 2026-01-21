import { useState } from "react";
import Square from "./Square";
const tictactoe = () => {
	const [flag, setFlag] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));

	const calculateWinner = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};

	const handleClick = (i) => {
		if (squares[i] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();
		flag ? (nextSquares[i] = "X") : (nextSquares[i] = "◯");
		setSquares(nextSquares);
		setFlag(!flag);
	};

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner:" + winner;
	} else {
		status = "Next Player " + (flag ? "X" : "◯");
	}

	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 font-sans">
				<div
					className={`mb-6 px-6 py-2 rounded-full text-xl font-bold shadow-sm border-2 ${winner ? "bg-green-100 text-green-700 border-green-200" : "bg-white text-slate-700 border-slate-200"}`}
				>
					{status}
				</div>
				<div className="bg-slate-200 p-2 rounded-xl shadow-lg gap-3 m-3.5">
					<div className="flex gap-2 mb-2">
						<Square
							value={squares[0]}
							onSquareClick={() => {
								handleClick(0);
							}}
						/>
						<Square
							value={squares[1]}
							onSquareClick={() => {
								handleClick(1);
							}}
						/>
						<Square
							value={squares[2]}
							onSquareClick={() => {
								handleClick(2);
							}}
						/>
					</div>
					<div className="flex gap-2 mb-2">
						<Square
							value={squares[3]}
							onSquareClick={() => {
								handleClick(3);
							}}
						/>
						<Square
							value={squares[4]}
							onSquareClick={() => {
								handleClick(4);
							}}
						/>
						<Square
							value={squares[5]}
							onSquareClick={() => {
								handleClick(5);
							}}
						/>
					</div>
					<div className="flex gap-2">
						<Square
							value={squares[6]}
							onSquareClick={() => {
								handleClick(6);
							}}
						/>
						<Square
							value={squares[7]}
							onSquareClick={() => {
								handleClick(7);
							}}
						/>
						<Square
							value={squares[8]}
							onSquareClick={() => {
								handleClick(8);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default tictactoe;
