import ContentComponent from "./ContentComponent";
import Labels from "./Labels";

const ListArea = ({ isStock }) => {
	return (
		<div>
			{/* label-container */}
			<div>
				<Labels />
			</div>

			{/* list area where all items will be shown */}
			<div>
				<ContentComponent category="Fruits" isStock={isStock} />
				<ContentComponent category="Vegetables" isStock={isStock} />
			</div>
		</div>
	);
};

export default ListArea;
