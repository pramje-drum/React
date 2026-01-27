import ListContainer from "./ListContainer";

const FetchContainer = () => {
	return (
		<div>
			<div className="border">
				<h1 className="flex justify-center text-6xl p-5 m-5 from-stone-900 font-extrabold underline">
					TO-DO LIST
				</h1>
			</div>

			{/* List Container!! */}
			<div>
				<ListContainer />
			</div>
		</div>
	);
};

export default FetchContainer;
