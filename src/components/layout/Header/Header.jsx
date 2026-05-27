import logotipo from "@/assets/images/common/logo.svg";

import { Link } from "react-router-dom";

import "./header.sass";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__container site-container">
        <div className="site-header__content">
          <Link to="/" className="site-header__logotipo">
            <img
              src={logotipo}
              alt="RIMAC Seguros y Reaseguros"
              className="site-header__logotipo-img"
              width={73}
              height={36}
            />
          </Link>
          <div className="site-header__details">
            <div className="site-header__details-text">
              ¡Compra por este medio!
            </div>
            <a href="tel:(01) 411 6001" className="site-header__details-phone">
              (01) 411 6001
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
