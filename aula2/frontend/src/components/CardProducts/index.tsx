import React from 'react';
import './style.css';

interface PropsCardProduct {
  children?: React.ReactNode;
}

const CardProducts: React.FC<PropsCardProduct> = ({ children, ...props }) => {
  return (
    <div className='container'>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">

          <div className="card" style={{border: "0px solid red"}} >

            <img className="card-img-top" src="./assets/produtos/pc.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Pc Gamer Intel Core i7, 16GB RAM, GTX 1660 6GB, SSD 512GB, Fonte 500w, Gabinete Cooler FAN - Com Wifi</h5>
              <p className="card-text">O Pc Gamer Intel Core i7 é uma máquina poderosa, ideal para jogos e tarefas que exigem alto desempenho. Equipado com um processador Intel Core i7, oferece um poder de processamento excepcional. Com 16GB de RAM, garante uma execução suave e rápida de aplicativos e jogos</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>

        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          
          <div className="card" style={{border: "0px solid red"}} >

            <img className="card-img-top" src="./assets/produtos/pc.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Pc Gamer Intel Core i7, 16GB RAM, GTX 1660 6GB, SSD 512GB, Fonte 500w, Gabinete Cooler FAN - Com Wifi</h5>
              <p className="card-text">O Pc Gamer Intel Core i7 é uma máquina poderosa, ideal para jogos e tarefas que exigem alto desempenho. Equipado com um processador Intel Core i7, oferece um poder de processamento excepcional. Com 16GB de RAM, garante uma execução suave e rápida de aplicativos e jogos</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>

        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card" style={{border: "0px solid red"}} >

            <img className="card-img-top" src="./assets/produtos/pc.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Pc Gamer Intel Core i7, 16GB RAM, GTX 1660 6GB, SSD 512GB, Fonte 500w, Gabinete Cooler FAN - Com Wifi</h5>
              <p className="card-text">O Pc Gamer Intel Core i7 é uma máquina poderosa, ideal para jogos e tarefas que exigem alto desempenho. Equipado com um processador Intel Core i7, oferece um poder de processamento excepcional. Com 16GB de RAM, garante uma execução suave e rápida de aplicativos e jogos</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card" style={{border: "0px solid red"}} >

            <img className="card-img-top" src="./assets/produtos/pc.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Pc Gamer Intel Core i7, 16GB RAM, GTX 1660 6GB, SSD 512GB, Fonte 500w, Gabinete Cooler FAN - Com Wifi</h5>
              <p className="card-text">O Pc Gamer Intel Core i7 é uma máquina poderosa, ideal para jogos e tarefas que exigem alto desempenho. Equipado com um processador Intel Core i7, oferece um poder de processamento excepcional. Com 16GB de RAM, garante uma execução suave e rápida de aplicativos e jogos</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card" style={{border: "0px solid red"}} >

            <img className="card-img-top" src="./assets/produtos/pc.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Pc Gamer Intel Core i7, 16GB RAM, GTX 1660 6GB, SSD 512GB, Fonte 500w, Gabinete Cooler FAN - Com Wifi</h5>
              <p className="card-text">O Pc Gamer Intel Core i7 é uma máquina poderosa, ideal para jogos e tarefas que exigem alto desempenho. Equipado com um processador Intel Core i7, oferece um poder de processamento excepcional. Com 16GB de RAM, garante uma execução suave e rápida de aplicativos e jogos</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card" style={{border: "0px solid red"}} >

            <img className="card-img-top" src="./assets/produtos/pc.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Pc Gamer Intel Core i7, 16GB RAM, GTX 1660 6GB, SSD 512GB, Fonte 500w, Gabinete Cooler FAN - Com Wifi</h5>
              <p className="card-text">O Pc Gamer Intel Core i7 é uma máquina poderosa, ideal para jogos e tarefas que exigem alto desempenho. Equipado com um processador Intel Core i7, oferece um poder de processamento excepcional. Com 16GB de RAM, garante uma execução suave e rápida de aplicativos e jogos</p>
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
