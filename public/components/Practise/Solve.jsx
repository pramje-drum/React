// import { useState } from "react";
import { useEffect, useState } from "react";
import Solve2 from "./Solve2.jsx";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Dummy_JSON } from "../URLS.jsx";
// const INITIAL_LIST = [];

const Solve = () => {
	// const user = {
	// 	name: "MS Dhoni",
	// 	imageUrl:
	// 		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiVE1NFJo91ZA-O_XWXv_1mNuGSnnPceW8tcTr__mUHZ1aiTTjkaw_vnTvQfuUj6DDAnJeR8uRzp6NtOs_4baZnLg_tg4zQSqGkxnGoOU&s=10",
	//   imageSize: 90
	// };

	// function handleClick(){
	//   alert('You clicked a Button!')
	// }

	// const [count, setCount] = useState(0);
	// const increase = () => {
	//   setCount(count + 1);
	//   alert(count);
	// }

	// const [count, setCount] = useState(0);

	// function solve() {
	// 	setCount(count + 1);
	// }

	// const [count, setcount] = useState(0);

	// function temp(){
	//   setcount(count + 1);
	// }

	// const {
	// 	register,
	// 	handleSubmit,
	// 	watch,
	// 	formState: { errors },
	// } = useForm();

	// const onSubmit = async (data) => {
	// 	await new Promise((resolve) => {setTimeout(resolve, 2000)})
	// 	alert("Submittng the Data")
	// 	console.log("Submitting the form", data);
	// }\

	// const [value, setValue] = useState("");
	// const [listItems, setListItems] = useState(INITIAL_LIST);
	// const handleChange = (e) => {
	// 	setValue(e.target.value);
	// };

	// const handleSubmit = (e) => {
	// 	if (value) {
	// 		setListItems(listItems.concat(value))
	// 	}
	// 	e.preventDefault();
	// };
	// const [count, setcount] = useState(0);
	// const [total, setTotal] = useState(1);
	// useEffect(() => {alert("I will run on Each Render")});
	// useEffect(() => {alert("I will run on First Render")}, []);
	//  useEffect(() => {alert("I will run every time when count is updated")}, [count]);
	//  useEffect(() => {alert("I will run every time when count or total is updated is updated")}, [count, total]);
	// useEffect(() => {
	// 	alert("I will run every time when count or total is updated is updated");
	// 	return () => {
	// 		alert("Component Unmounted");
	// 	};
	// }, [count, total]);

	// const handleClick = () => {
	// 	setcount((count) => count + 1);
	// };
	// const handleTotal = () => {
	// 	setTotal((total) => total + 1);
	// };

	// const [item, setItem] = useState(true);

	// useEffect(() => {
	// 	fetch(Dummy_JSON)
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data))
	// 		.then(() => alert("Heloo World"))
	// 		.catch((error) => console.log("OOPS some Error Occured!" + error));
	// }, [item]);

	const [item, setItem] = useState(true);

	const getData = async () => {
		try {
			let response = await fetch(Dummy_JSON);
			if (!response.ok) throw new Error("Network not Responding");
			let Data = await response.json();
			console.log(Data);
		} catch (error) {
			console.log(error);
		} finally {
			alert("Operation Completed!!");
		}
	};

	useEffect(() => {
		getData();
	}, [item]);
	return (
		<div>
			<button onClick={() => setItem(!item)} className="bg-gray-500 border-2 ">
				Change
			</button>

			{/* <button onClick={handleClick}>Update Count!!</button>
			<p>Count is : {count}</p>
			<br />
			<button onClick={handleTotal}>Update Total!!</button>
			<p>Count is : {total}</p> */}
			{/* <div>Hello World</div> */}

			{/* <div>
				<form onSubmit={handleSubmit}>
					<input type="text" onChange={handleChange} value={value} />
					<button type="submit">Add Item</button>
				</form>
			</div>
			<div>
				<ul>
					{listItems.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
			 */}

			{/* <div>
				<input type="checkbox" onClick={(e) => {e.preventDefault()}} />
				<label>Normal checkbox behaviour!!</label>
			</div> */}

			{/* // <div className="flex justify-center items-center min-h-screen bg-gray-100">
		// 	<div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl [&_form]:flex [&_form]:flex-col [&_form]:gap-5 [&_label]:block [&_label]:text-sm [&_label]:font-semibold [&_label]:text-gray-700 [&_label]:text-left [&_input]:w-full [&_input]:p-2.5 [&_input]:border [&_input]:border-gray-300 [&_input]:rounded-lg [&_input]:focus:ring-2 [&_input]:focus:ring-blue-500 [&_input]:outline-none [&_input[type=submit]]:bg-blue-600 [&_input[type=submit]]:font-bold [&_input[type=submit]]:text-white [&_input[type=submit]]:cursor-pointer [&_input[type=submit]]:hover:bg-blue-700 [&_input[type=submit]]:transition-colors [&_input[type=submit]]:mt-2">
		// 		<form onSubmit={handleSubmit(onSubmit)}>
		// 			<div>
		// 				<label> First Name:</label>
		// 				<input {...register("firstName", { required: true, */}
			{/* // 					minLength:{value:3, message:'Minimum Length should be 3!!'}
		// 				 })} />
		// 				 {errors.firstName && <p className="text-red-300">{errors.firstName.message}</p>}
		// 			</div> */}
			{/* // 			<div>
		// 				<label> Middle Name:</label>
		// 				<input {...register("secondName")} />
		// 			</div>
		// 			<div>
		// 				<label> Last Name:</label>
		// 				<input {...register("thirdName")} />
		// 			</div>
		// 			<div>
		// 				<input type="submit" />
		// 			</div>
		// 		</form> */}
			{/* // 	</div> */}

			{/* <h1>updated Together</h1>
      <Solve2 count={count} onClick ={temp}/>
      <Solve2 count={count} onClick ={temp}/> */}
			{/* <button onClick={solve}>you clicked {count} times</button> */}
			{/* <button onClick={increase}>Click Me</button> */}
			{/* <button type="button" onClick={handleClick}>Button</button> */}
			{/* <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={"Photo of" + user.name}/> */}
			{/* <h1>Hello How are you!!</h1>
			<p>
				Hello there.
				<br />
				How do you do?
			</p> */}
			{/* <button
				type="button"
			>
				Hello I am a Button!!
			</button> */}
		</div>
	);
};
export default Solve;
