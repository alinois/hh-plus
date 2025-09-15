import "./Header.scss"
import logo from "../../assets/hh.png"
import account from "../../assets/Vector.png"

const Header = () => {
    return (
    <div className="header">
        <div className="header-title">
            <a className="header-title-logo"><img src={logo} /></a>
            <span className="header-title-topic_name">.FrontEnd</span>
        </div>

        <div className="header-pages">
            <div className="header-pages-vacancy">
                <span>Вакансии FE</span>
                <div className="active-point"></div>
            </div>

            <div className="header-pages-about">
                <img src={account} />
                <span>Обо мне</span>
            </div>
        </div>
    </div>
)};

export default Header;