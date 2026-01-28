import ShoppingProject from "../public/components/ShoppingProject/ShoppingProject.jsx";
import Solve from "../public/components/Practise/Solve.jsx";
import Tictactoe from "../public/components/TicTacToeComponents/Tictactoe.jsx";
import Counter from "../public/components/CounterApp/Counter.jsx";
import { Dummy_JSON } from "../public/components/URLS.jsx";
import FetchContainer from "../public/components/FetchProject/FetchContainer.jsx";
import Parent from "../public/components/useContextPractise/Parent.jsx";
import store from "./store.jsx";
import { Provider } from "react-redux";

function App() {
	return (
		<>
			<Provider store={store}>
				{/* <ShoppingProject /> */}
				<Solve />
				{/* <Parent/> */}
				{/* <Counter/> */}
				{/* <Tictactoe /> */}
				{/* <FetchContainer/> */}
			</Provider>
		</>
	);
}

export default App;
