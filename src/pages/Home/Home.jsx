import imageHome from "@/assets/images/home/home_bg.webp";
import imageHomeMobile from "@/assets/images/home/home_bg_mobile.webp";

import "./home.sass";
import FormHome from "@/components/forms/FormHome";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page__container site-container">
        <div className="home-page__content">
          <figure className="home-page__content-image">
            <img
              src={imageHome}
              alt="RIMAC Seguros y Reaseguros"
              className="home-page__content-image-img"
              loading="lazy"
              width={480}
              height={560}
            />
          </figure>
          <div className="home-page__content-form">
            <div className="home-page__content-form-top">
              <div className="home-page__content-form-titles">
                <div className="home-page__content-form-subtitle">
                  Seguro Salud Flexible
                </div>
                <div className="home-page__content-form-title">
                  <h1 className="home-page__content-form-title-text">
                    Creado para ti y tu familia
                  </h1>
                </div>
              </div>
              <figure className="home-page__content-form-image">
                <img
                  src={imageHomeMobile}
                  alt="Rimac Seguros y Reaseguros"
                  className="home-page__content-form-img"
                  width={136}
                  height={160}
                />
              </figure>
            </div>
            <div className="home-page__content-form-text">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </div>
            <div className="home-page__content-form-form">
              <FormHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
