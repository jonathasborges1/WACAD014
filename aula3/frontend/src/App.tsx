import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TableCustom, { ICharacterData } from "./components/Table";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CartProvider from "./contexts/CartContext";
import { SnackbarProvider } from "notistack";

function App() {
	// const [count, setCount] = useState(0);

	// const characterData: ICharacterData[] = [
	// 	{
	// 		name: "Nat",
	// 		email: "nat@mail.com",
	// 	},
	// 	{
	// 		name: "João",
	// 		email: "joao@mail.com",
	// 	},
	// 	{
	// 		name: "José",
	// 		email: "jose@mail.com",
	// 	},
	// 	{
	// 		name: "Anna",
	// 		email: "anna@mail.com",
	// 	},
	// ];

	// const [characters, setCharacters] = useState<ICharacterData[]>(characterData);

	// const removeCharacter = (indexRemove: number) => {
	// 	const newChar = characters.filter((char, index) => {
	// 		return index !== indexRemove;
	// 	});
	// 	console.log("characters -> ", newChar);
	// 	setCharacters(newChar);
	// };

	// console.log("characters -> ", characters);

	return (
		<SnackbarProvider
			autoHideDuration={5000}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "center",
			}}
		>
			<CartProvider>
				<Layout></Layout>
			</CartProvider>
		</SnackbarProvider>
	);
}

export default App;
