import ChildA from "./ChildA";
import { createContext, useState } from "react";

const UserContext = createContext();

const Parent = () => {
    const [item] = useState({name:"Mobile"});
	return (
		<div>
			<UserContext.Provider value={item}>
				Hello World!!
				<ChildA />
			</UserContext.Provider>
		</div>
	);
};

export default Parent;
export {UserContext};
