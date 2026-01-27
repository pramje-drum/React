import { useEffect, useState } from "react";



const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {console.log("useEffect called!!")}, [count])

	const increment = () => {
		setCount((count) => count + 1);
	};

	const decrement = () => {
		setCount((count) => count - 1);
	};

	const reset = () => {
		setCount(0);
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="p-8 bg-white rounded-lg shadow-md text-center">
				<p className="text-4xl font-bold mb-6 text-blue-600">{count}</p>
				<div className="flex gap-4">
					<button
						onClick={increment}
						className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
					>
						Increase
					</button>
					<button
						onClick={decrement}
						className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
					>
						Decrease
					</button>
					<button
						onClick={reset}
						className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
