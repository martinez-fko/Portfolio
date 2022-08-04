import React from 'react';

const Skills = () => {
    return (
        <section className="skills" id="skill">
        <div className="skills__title">
          <h2>Experiencia y habilidades</h2>
          <p>He diseñado y desarrollado aplicaciones con React consumiendo APIS. He desarrollado toda la lógica con vanilla JavaScript. </p>
        </div>
        <div className="skills__experience">
          <h3>Experiencia</h3>
          <div className="experience-item">
            <p className="date">2022-Act.</p>
            <p className="experience-title">Academlo</p>
            <p>Desarrollo Front End</p>
          </div>
          <div className="experience-item">
            <p className="date">2019-2019</p>
            <p className="experience-title">Freelancer</p>
            <p>Desarrollo de Paginas WEB</p>
          </div>
          <div className="experience-item">
            <p className="date">2018-2018</p>
            <p className="experience-title">Estadía</p>
            <p>Apoyo en desarrollo Web</p>
          </div>
        </div>
        <div className="skills__box">
          <h2>Habilidades</h2>
          <div className="container_skills">
              <div className="item-skill">
                <img src="/physics.png" alt="React" />
                <p>React</p>
              </div>
              <div className="item-skill">
                <img src="/js.png" alt="JavaScript"/>
                <p>JavaScript</p>
              </div>
              <div className="item-skill">
                <img src="/html-5.png" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="item-skill">
                <img src="/css-3.png" alt="CSS3" />
                <p>CSS3</p>
              </div>
              <div className="item-skill">
                <img src="/git.png" alt="Git" />
                <p>Git</p>
              </div>
          </div>
        </div>
      </section>
    );
};

export default Skills;