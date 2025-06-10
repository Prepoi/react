import { Link } from 'react-router-dom';

function Location() {
  return (
    <>
      <div className="header">
        {['top', 'trailer', 'about', 'character', 'location'].map((route) => (
          <Link key={route} to={`/${route}`} className="button-style">
            {route.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="main">
        <p className="p-style">Location Page</p>
      </div>
      <div className="footer">
        © Островский Иван, ПИЭ-31
      </div>
    </>
  );
}

export default Location;