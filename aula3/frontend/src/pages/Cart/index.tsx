import React, { useState } from 'react';
import TableCustom from '../../components/Table';
import { useContextCart } from '../../contexts/CartContext';

interface Props {
   children?: React.ReactNode;
}

const CartPage: React.FC<Props> = () => {

   const { cart, removeProductFromCart } = useContextCart();

   const characterData = cart.map((cartItem,index) => {
      return {
         name: cartItem.name || "",
         price: cartItem.price || "",
      }
   })

   const THead = ["Name", "Price","#"];

   return (
      <>
         <h1>Cart Page</h1>
         <TableCustom THead={THead} characterData={characterData} removecharacter={removeProductFromCart}></TableCustom>
      </>
   )
}

export default CartPage;