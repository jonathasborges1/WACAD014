import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { Grid } from '@mui/material';

import { useContextCart } from '../../contexts/CartContext';

export interface IProduct {
   name?: string;
   price?: string;
   description?: string;
   src?: string
}

interface Props {
   children?: React.ReactNode;
   products: IProduct[];
}

interface CardProductProps {
   productProps: IProduct;
}

const CardProduct: React.FC<CardProductProps> = ({productProps, ...props}) => {
   
   const { addProductToCart } = useContextCart();

   return (
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={productProps.src}/>
         <Card.Body>
            <Card.Title>{productProps.name}</Card.Title>
            <Card.Text>{productProps.price}</Card.Text>
            <Card.Text>{productProps.description}</Card.Text>
            <Button variant="primary" onClick={() => addProductToCart(productProps)} >Adicionar</Button>
            {/* onClick={handleAddProductToCart(productProps)} */}
         </Card.Body>
    </Card>
   )
}

const CardProducts: React.FC<Props> = ({ products, ...props }) => {
   return (
      <Grid container>
         {products.map((product,index) => {
            return (
               <Grid key={index} item xs={4}>
                  <CardProduct productProps={product}   />
                  {/* onClickAdd={props.onClickAdd} */}
               </Grid>
            )
         })}
      </Grid>
   )
}

export default CardProducts;