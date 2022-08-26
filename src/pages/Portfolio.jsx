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
              <a
                target={"_blank"}
                href="https://pokedex-fcomtz.netlify.app/#/pokedex"
              >
                <h2>Pokedex</h2>
              </a>
              <p>
                Tecnologías usadas <br /> React | Redux | JavaScript | HTML5 |
                CSS3
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio__box">
          <div className="portfolio__imgBx">
            <img src="/Project_rick_and_morty.png" alt="Proyecto Pokedex" />
          </div>
          <div className="portfolio__content">
            <div>
              <a
                target={"_blank"}
                href="https://locationsrickandmorty-fcomtz.netlify.app/"
              >
                <h2>Rick and Morty</h2>
              </a>
              <p>
                Tecnologías usadas <br /> React | Redux | JavaScript | HTML5 |
                CSS3
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio__box">
          <div className="portfolio__imgBx">
            <img src="/Project_crud-user.png" alt="Proyecto Pokedex" />
          </div>
          <div className="portfolio__content">
            <div>
              <a
                target={"_blank"}
                href="https://crudcontacts-fcomtz.netlify.app/"
              >
                <h2>Crud User</h2>
              </a>
              <p>
                Tecnologías usadas <br /> React | Redux | JavaScript | HTML5 |
                CSS3
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
