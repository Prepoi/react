import { Link } from 'react-router-dom';
import aboutImg1 from '../../assets/about_img_1.png';
import aboutImg2 from '../../assets/about_img_2.png';
import aboutImg3 from '../../assets/about_img_3.png';

function About() {
  return (
    <>
      <div className="header">
        {['top', 'trailer', 'about', 'character', 'location'].map((route) => (
          <Link key={route} to={`/${route}`} className="button-style">
            {route.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="main about-main">
        <div className="image-with-text">
          <p className="p-style">ABOUT</p>
          <p className="p-style">Survival is just the beginning</p>
          <p className="p-style">Resident Evil 4 is a remake of the 2005 original Resident Evil 4</p>
          <p className="p-style">Reimagined for 2023 to bring state-of-the-art survival horror</p>
          <p className="p-style">
            Resident Evil 4 preserves the essence of the original game, while introducing modernized gameplay, a reimagined
            storyline, and vividly detailed graphics to make this the latest survival horror game where life and death, terror
            and catharsis intersect.
          </p>
        </div>
        <div className="imgs">
          <img src={aboutImg1} style={{ paddingLeft: '120px', paddingRight: '30px' }} alt="About 1" />
          <img src={aboutImg2} style={{ paddingRight: '30px' }} alt="About 2" />
          <img src={aboutImg3} alt="About 3" />
        </div>
        <div className="image-with-text-1">
          <p className="p-style-1">ABOUT</p>
          <p className="p-style-1">Survival is just the beginning</p>
          <p className="p-style-1">Resident Evil 4 is a remake of the 2005 original Resident Evil 4</p>
          <p className="p-style-1">Reimagined for 2023 to bring state-of-the-art survival horror</p>
          <p className="p-style-1">
            Resident Evil 4 preserves the essence of the original game, while introducing modernized gameplay, a reimagined
            storyline, and vividly detailed graphics to make this the latest survival horror game where life and death, terror
            and catharsis intersect.
          </p>
        </div>
      </div>
      <div className="footer">
        © Островский Иван, ПИЭ-31
      </div>
    </>
  );
}

export default About;