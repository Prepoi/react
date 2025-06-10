import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const location = useLocation();

  const pages = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О проекте" },
    { path: "/character", label: "Персонажи" },
    { path: "/location", label: "Локации" },
    { path: "/trailer", label: "Трейлер" },
  ];

  return (
    <header className="header">
      <nav>
        {pages.map((page) => {
          if (location.pathname === page.path) return null;
          return (
            <Link 
              key={page.path} 
              to={page.path}
              className="header__link"
            >
              {page.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};