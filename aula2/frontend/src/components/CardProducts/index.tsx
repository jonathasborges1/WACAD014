import React from 'react';

interface PropsCardProduct {
  children?: React.ReactNode;
  src?: string;
  title?: string;
  subtitle?: string;
}

const CardProducts: React.FC<PropsCardProduct> = ({ children, ...props }) => {
  return (
    <div className='container'>

      <div className="row">
        
        <div className="col-sm-12 col-md-6 col-lg-4">

          <div className="card" style={{border: "0px solid red"}} >

            <img className="card-img-top" src={props.src} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.subtitle}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>

        </div>

      </div>

    </div>

  );
}

export default CardProducts;
