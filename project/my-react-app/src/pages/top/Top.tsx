import { Link } from 'react-router-dom';
import ps4Image from '../../assets/ps4-Photoroom.png';
import ps5Image from '../../assets/ps5-Photoroom.png';
import steamImage from '../../assets/steam-Photoroom.png';
import xboxImage from '../../assets/xbox-Photoroom.png';

function Top() {
  return (
    <>
      <div className="header">
        {['top', 'trailer', 'about', 'character', 'location'].map((route) => (
          <Link key={route} to={`/${route}`} className="button-style">
            {route.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="main top-main">
        <p className="p-style">RESIDENT EVIL 4</p>
        <div className="imgs">
          <img className="img-style" src={ps4Image} alt="PS4" />
          <img className="img-style" src={ps5Image} alt="PS5" />
          <img className="img-style" src={steamImage} alt="Steam" />
          <img className="img-style" src={xboxImage} alt="Xbox" />
        </div>
      </div>
      <div className="footer">
        © Островский Иван, ПИЭ-31
      </div>
    </>
  );
}

export default Top;