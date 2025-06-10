import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function Trailer() {
  useEffect(() => {
    // Динамически подгружаем Bootstrap JS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="header">
        {['top', 'trailer', 'about', 'character', 'location'].map((route) => (
          <Link key={route} to={`/${route}`} className="button-style">
            {route.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="main trailer-main">
        <div id="carouselExampleIndicators" className="carousel slide size" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[
              'https://www.youtube-nocookie.com/embed/mDcVh5NJIVE',
              'https://www.youtube-nocookie.com/embed/hlKxIfqtBrc',
              'https://www.youtube-nocookie.com/embed/RkyQUsreWMc',
              'https://www.youtube-nocookie.com/embed/Id2EaldBaWw',
              'https://www.youtube-nocookie.com/embed/cMzJv0LOJYo',
            ].map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {[
              'https://www.youtube-nocookie.com/embed/mDcVh5NJIVE',
              'https://www.youtube-nocookie.com/embed/hlKxIfqtBrc',
              'https://www.youtube-nocookie.com/embed/RkyQUsreWMc',
              'https://www.youtube-nocookie.com/embed/Id2EaldBaWw',
              'https://www.youtube-nocookie.com/embed/cMzJv0LOJYo',
            ].map((src, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="ratio ratio-16x9">
                  <iframe src={src} title={`YouTube video ${index + 1}`} allowFullScreen />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="footer">
        © Островский Иван, ПИЭ-31
      </div>
    </>
  );
}

export default Trailer;