import ShoppingProject from "../public/components/ShoppingProject/ShoppingProject.jsx";
import Solve from "../public/components/Practise/Solve.jsx";
import Tictactoe from "../public/components/TicTacToeComponents/Tictactoe.jsx";
import Counter from "../public/components/CounterApp/Counter.jsx";
import { Dummy_JSON } from "../public/components/URLS.jsx";
import FetchContainer from "../public/components/FetchContainer.jsx";

function App() {
	return (
		<>
			{/* <ShoppingProject /> */}
			{/* <Solve /> */}
			{/* <Counter/> */}
			{/* <Tictactoe /> */}
			<FetchContainer/>
		</>
	);
}

export default App;
