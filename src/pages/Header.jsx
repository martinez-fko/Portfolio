import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>Desarrollador <br/> Front-end</h1>
        <h2>Hola, soy Francisco Martínez soy programador.</h2>
      </div>
      <button className="btn">
        <i className="bx bx-cloud-download"></i>
        CV
      </button>
      <div className="information">
        <img src="/francisco.jpeg" alt="Foto" />
        <div className="information__box">
          <p>Me apasiona la programación. </p>
          <p>
            <span>+1 año</span> de experiencia
          </p>
          <div className="networks">
            <a target={'_blank'} href="https://www.linkedin.com/in/josé-francisco-martínez-59aa7a241/" className="icon">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#" className="icon">
                <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
