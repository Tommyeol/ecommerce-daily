import Cart from "../Cart/Cart";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="nav-link active" aria-current="page" href="#categoria">
          <img
            src="https://mail.google.com/mail/u/0?ui=2&ik=400e2ed626&attid=0.8&permmsgid=msg-f:1735809838817246247&th=1816d5da08547c27&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_u4RIVJ8mofVAt0QBYaWBi1cBnewQ02iV1HfraEPHkj7RTeFbN733BLfLddukWqYl4Za9_5Va6oZG8ApiKFN6uJnFchNzM62vjEokcQlgWEUkpQXwlJhvlqbw&disp=emb"
            alt=""
            className="img-fluid"
          />
        </a>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "perfecto" : "perfecto")}
        >
          Inicio
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/categoria/Gel"> Gel</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="categoria/Crema">Crema</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <button className="btn btn-outline-primary">
            <Cart />
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
