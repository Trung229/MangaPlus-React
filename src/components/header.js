
import "../assets/css/main.css";
import "../assets/css/base.css";
import "../assets/css/grid.css";
import logo from "../assets/img/web__logo.png";
import picture1 from "../assets/img/festival1.jpeg";
import picture2 from "../assets/img/festival2.jpeg";

const header = () => {
    return (
        <header className="header">
            <div className="grid wide header__navbar">
                <label for="nav__moblie-input" className="nav-bar__menu">
                    <i className="menu-bar fas fa-bars"></i>
                </label>
                <input type="checkbox" className="nav__input" name="" id="nav__moblie-input"></input>
                <label for="nav__moblie-input" className="nav__overlay">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="">Updates</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">Features</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">Manga List</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">Favorites</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">About us</a>
                        </li>
                    </ul>

                    <div className="nav__menu-separator"></div>
                    <div className="leanguages">
                        <div className="header__leanguages">Selected languages</div>
                        <div className="header__selected">
                            <input type="radio" name="VN" id="VN" />
                            <label for="VN">Viet Nam</label>

                            <input type="radio" name="EN" id="EN" />
                            <label for="EN">ENGLISH</label>
                        </div>
                    </div>
                </label>
                <div className="header__logo">
                    <img className="header__logo-img" src={logo} alt="" />
                </div>
                <div className="header__nav-text">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="">Updates</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">Features</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">Manga List</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">Favorites</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="">About us</a>
                        </li>
                    </ul>
                </div>
                <form className="header__search">
                    <input className="header__search-input" type="text" placeholder="Search by title or author" />
                    <a href="">
                        <i className="fas fa-search"></i>
                    </a>
                </form>
            </div>
            <div className="header__navbar-special">
                <div className="header__navbar-special-item">
                    <img className="header__navbar-special-img" src={picture1} alt="" />
                </div>

                <div className="header__navbar-special-item">
                    <img className="header__navbar-special-img" src={picture2} alt="" />
                </div>

                <div className="header__navbar-special-item">
                    <img className="header__navbar-special-img" src={picture1} alt="" />
                </div>
            </div>
        </header>
    )
}

export default header;