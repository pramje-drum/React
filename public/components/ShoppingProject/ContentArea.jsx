import React, { useEffect, useState } from "react";
import { Dummy_JSON } from "../URLS";

const ContentArea = () => {
	const [list, setList] = useState("");
	useEffect(() => {
		fetch(Dummy_JSON)
			.then((res) => res.json())
			.then((data) => setList(data));
	}, []);

	console.log(list);
	return (
		<div className=" m-5 p-6 justify-center flex">
			<li className="list-none border p-5 w-190 h-130 flex justify-center ">
				Tasks
			</li>
		</div>
	);
};

export default ContentArea;
