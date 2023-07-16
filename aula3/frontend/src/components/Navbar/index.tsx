import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CartPage from "../../pages/Cart";
import HomePage from "../../pages/Home";

enum NavBarTabsOptions {
   Home = "home",
   Cart = "cart"
}

interface Props {
	children?: React.ReactNode;
}

const Component: React.FC<Props> = () => {
	return (
		<Tabs 
			defaultActiveKey="home"
			id="uncontrolled-tab-example"
			className="mb-3"
		>
			<Tab eventKey={NavBarTabsOptions.Home} title="Home">
            <HomePage></HomePage>
			</Tab>
			<Tab eventKey={NavBarTabsOptions.Cart} title="Carrinho de Compras">
            <CartPage></CartPage>
			</Tab>
		</Tabs>
	);
};

export default Component;
