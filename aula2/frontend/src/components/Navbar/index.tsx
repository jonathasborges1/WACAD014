import React from 'react';

interface PropsNavbar {
  children?: React.ReactNode;
}

const Navbar: React.FC<PropsNavbar> = ({ children, ...props }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link" href="#">Signup</a>
          </li>
          <li className="nav-item dropdown">
            {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Produtos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
               {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="dropdown-item" href="#">Cadastrar</a>
              </li>
              <li>
               {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="dropdown-item" href="#">Editar</a>
              </li>
              <li>
               {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="dropdown-item" href="#">Deletar</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
