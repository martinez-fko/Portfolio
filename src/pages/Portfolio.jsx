import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio__container">
        <div className="portfolio__box">
          <div className="portfolio__imgBx">
            <img src="/Project_pokedex.png" alt="Proyecto Pokedex" />
          </div>
          <div className="portfolio__content">
            <div>
              <h2>Pokedex</h2>
              <p>
                Tecnologías usadas <br /> React | Redux | JavaScript | HTML5 |
                CSS3
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio__box">
          <div className="portfolio__imgBx">
            <img src="/Project_pokedex.png" alt="Proyecto Pokedex" />
          </div>
          <div className="portfolio__content">
            <div>
              <h2>Pokedex</h2>
              <p>
                Tecnologías usadas <br /> React | Redux | JavaScript | HTML5 |
                CSS3
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio__box">
          <div className="portfolio__imgBx">
            <img src="/Project_pokedex.png" alt="Proyecto Pokedex" />
          </div>
          <div className="portfolio__content">
            <div>
              <h2>Pokedex</h2>
              <p>
                Tecnologías usadas <br /> React | Redux | JavaScript | HTML5 |
                CSS3
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="portfolio-item">
        <h3>Pokedex</h3>
        <a target={"_blank"}  href="https://pokedex-fcomtz.netlify.app/#/pokedex">
          <img src="/Project_pokedex.png" alt="" />
        </a>
      </div>
      <div className="portfolio-item">
        <h3>Rick and Morty</h3>
        <a target={"_blank"}  href="https://locationsrickandmorty-fcomtz.netlify.app/">
          <img src="/Project_rick_and_morty.png" alt="Rick and Morty" />
        </a>
      </div>
      <div className="portfolio-item">
        <h3>Crud User</h3>
        <a target={"_blank"} href="https://crudcontacts-fcomtz.netlify.app/">
          <img src="/Project_crud-user.png" alt="" />
        </a>
      </div> */}
    </section>
  );
};

export default Portfolio;
