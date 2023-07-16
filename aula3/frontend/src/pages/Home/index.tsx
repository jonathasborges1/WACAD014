import { Grid } from '@mui/material';
import React from 'react';
import CardProducts, { IProduct } from '../../components/CardProduct';
import { useContextCart } from '../../contexts/CartContext';

interface Props {
   children?: React.ReactNode;
}

const HomePage: React.FC<Props> = () => {

   const cardProductData: IProduct[] = [
      {
        name: 'Camiseta Polo',
        price: "R$ 79,90",
        description: "Camiseta polo clássica, feita de algodão de alta qualidade. Perfeita para ocasiões casuais ou semi-formais.",
        src:"product/CamisetaPolo.jpg"
      },
      {
        name: 'Tênis Esportivo',
        price: "R$ 199,99",
        description: "Tênis esportivo com design moderno e confortável. Ideal para atividades físicas ou uso diário.",
        src:"product/TenisEsportivo.jpg"
      },
      {
        name: 'Bolsa Feminina',
        price: "R$ 149,90",
        description: "Bolsa feminina elegante e espaçosa, feita de couro sintético. Compartimentos internos para organização.",
        src:"product/BolsaFeminina.jpg"
      }
    ];

   return (
      <Grid container>
         <h1>Home Page</h1>
         <CardProducts products={cardProductData}  />
      </Grid>
   )
}

export default HomePage;