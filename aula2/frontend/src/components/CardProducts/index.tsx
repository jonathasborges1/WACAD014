/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

interface ICardProduct {
  src?: string;
  title?: string;
  price?: string;
  subtitle?: string;
}

interface PropsCardProduct {
  children?: React.ReactNode;
  cardProducts?: ICardProduct[];
}

const CardProduct: React.FC<{cardProduct: ICardProduct}> = ({cardProduct}) => {
  return (
        <div className="card" style={{ border: "0px solid red", margin: "40px" }}>
          <img className="card-img-top" src={cardProduct.src} alt="Card image cap" />
          <div className="card-body">
          <p className="card-text">Preco: {cardProduct.price}</p>
            <h5 className="card-title">{cardProduct.title}</h5>
            <p className="card-text">{cardProduct.subtitle}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
      </div>
  )
}

const CardProducts: React.FC<PropsCardProduct> = ({ children, cardProducts, ...props }) => {
  return (
    <div className="container">
      <div className="row">
        {cardProducts.map((card, index) => {  
          return(
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <CardProduct cardProduct={card}  />
            </div>
          )
        })}
      </div>
  </div>

  );
}

export default CardProducts;
