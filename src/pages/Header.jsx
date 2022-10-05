import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>
          Desarrollador <br /> Front-end
        </h1>
        <h2>Hola, soy Francisco Martínez, tengo 29 años. Soy de México.</h2>
      </div>
      <a href="/CV_Francisco_Martinez_Front-End.pdf" className="btn" download={'Francisco_Martinez-Desarrollador_Front_End-CV'}>
        <i className="bx bx-cloud-download"></i>
        CV
      </a>
      <div className="information">
        <img src="/francisco.jpeg" alt="Foto" />
        <div className="information__box">
          <p>
            Desarrollador Front-End con experiencia practica diseñando,
            desarrollando e implementando aplicaciones.
          </p>
          <p>
            <span>+1 año</span> de experiencia
          </p>
          <div className="networks">
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/josé-francisco-martínez-59aa7a241/"
              className="icon"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            {/* <a href="#" className="icon">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="bx bxl-instagram"></i>
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
