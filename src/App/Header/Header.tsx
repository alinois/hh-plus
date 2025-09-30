import "./Header.scss"
import logo from "../../assets/hh.png"
import account from "../../assets/Vector.png"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <div className="header">
        <div className="header-title">
            <a className="header-title-logo"><img src={logo} /></a>
            <span className="header-title-topic_name">.FrontEnd</span>
        </div>

        <div className="header-pages">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header-pages-vacancy active" : "header-pages-vacancy"
          }
        >
          <span>Вакансии FE</span>
          <div className="active-point"></div>
        </NavLink>

        <NavLink
          to="/me"
          className={({ isActive }) =>
            isActive ? "header-pages-about active" : "header-pages-about"
          }
        >
          <img src={account} />
          <span>Обо мне</span>
        </NavLink>
        </div>
    </div>
)};

export default Header;