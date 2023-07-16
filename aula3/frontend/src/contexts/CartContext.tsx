import React, { createContext, useContext } from "react";
import { IProduct } from "../components/CardProduct";
import useDialogAlert from "../hooks/useDialogAlert";

interface Props {
	children?: React.ReactNode;
}

interface CartContextType {
	cart: IProduct[];
	setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
	addProductToCart: (product: IProduct) => void;
	removeProductFromCart: (index: number) => void;
}

const CartContextType = {} 

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<Props> = ({ children }) => {
	const { snackbar } = useDialogAlert();
	const [cart, setCart] = React.useState<IProduct[]>([]);

	const addProductToCart = (product: IProduct) => {
		try {
			setCart([...cart, product])
			snackbar({
				message:"Produto inserido no carrinho com sucesso.",
				variant: "success",
			});
		} catch (error) {
			snackbar({
				message: "Erro ao inserir no carrinho. Tentar novamente",
				variant: "error",
			});
		}
   } 

	const removeProductFromCart = (indexSelected: number) => {
		try {
			const newCart = cart.filter((item,index) => index !== indexSelected);
			setCart(newCart);
			snackbar({
				message:"Produto removido do carrinho com sucesso.",
				variant: "success",
			});
		} catch (error) {
			snackbar({
				message: "Erro ao remover o produto do carrinho. Tentar novamente",
				variant: "error",
			});
		}

	}

	console.log("CartProvider -> cart -> ", cart);

	return (
		<CartContext.Provider 
			value={{ cart, setCart, addProductToCart, removeProductFromCart }}>
				{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useContextCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error(
			"CartContext não pode ser utilizado fora de um CartContext.Provider"
		);
	}
	return context;
};
