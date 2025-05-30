import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-menu">
            <li>
              <Link to={"/trailer"}>Trailer</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/character"}>Character</Link>
            </li>
            <li>
              <Link to={"/location"}>Location</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

