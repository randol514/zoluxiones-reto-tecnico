import { NavLink, Link, useLocation } from "react-router-dom";

import IconPrev2 from "@/assets/images/icons/icon-prev2.svg";
import IconProgress from "@/assets/images/icons/icon-progress.svg";

import "./menu.sass";

const Menu = () => {
  const location = useLocation();

  const links = [
    { to: "/planes", label: "Planes y coberturas", index: 1 },
    { to: "/resumen", label: "Resumen", index: 2 },
  ];
  return (
    <div className="menu-header">
      <div className="menu-header__desktop">
        <div className="menu-header__links">
          {links.map(({ to, label, index }) =>
            location.pathname === to ? (
              <NavLink
                key={index}
                to={to}
                data-index={index}
                className="menu-header__link current--page"
              >
                {label}
                <img className="menu-header__line" src={IconProgress} alt="" />
              </NavLink>
            ) : (
              <span
                key={index}
                to={to}
                data-index={index}
                className="menu-header__link"
              >
                {label}
                <img className="menu-header__line" src={IconProgress} alt="" />
              </span>
            ),
          )}
        </div>
      </div>
      <div className="menu-header__mobile">
        <Link to="/" className="menu-header__back">
          <img src={IconPrev2} alt="" />
        </Link>
        <div className="menu-header__steps">Paso 1 de 2</div>
        <div className="menu-header__progress"></div>
      </div>
    </div>
  );
};
export default Menu;
