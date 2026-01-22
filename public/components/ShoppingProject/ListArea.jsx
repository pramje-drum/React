import ContentComponent from "./ContentComponent";
import Labels from "./Labels";

const ListArea = ({ isStock, filterItem }) => {
	return (
		<div>
			{/* label-container */}
			<div>
				<Labels />
			</div>

			{/* list area where all items will be shown */}
			<div className="p-5 m-5">
				<ContentComponent
					category="Fruits"
					isStock={isStock}
					filterItem={filterItem}
				/>
				<ContentComponent
					category="Vegetables"
					isStock={isStock}
					filterItem={filterItem}
				/>
			</div>
		</div>
	);
};

export default ListArea;
