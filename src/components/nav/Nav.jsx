import { useContext } from "react";
import { ToggleContext } from "../../contexts/ToggleContext";

const Nav = () => {

    const { Toggle } = useContext(ToggleContext);

    return (
        //bs5-nav -> bs5-navbar-background
        <nav
            className="navbar navbar-expand-sm navbar-dark bg-transparent px-3"
        >
            <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="bi bi-justify"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                {/* change me-auto -> ms-auto */}
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Yousof
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Setting</a>
                            <a className="dropdown-item" href="#">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Nav;