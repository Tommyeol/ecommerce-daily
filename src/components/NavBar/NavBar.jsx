import Cart from "../Cart/Cart";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="nav-link active" aria-current="page" href="#categoria">
          <img
            src="https://dailyderm.com/wp-content/uploads/2019/06/cropped-Dailyderm-1.png"
            width={200}
            height={60}
            alt="Logo Dailyderm"
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
          <button className="btn btn-outline-primary">Cart</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
