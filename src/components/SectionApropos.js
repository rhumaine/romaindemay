import React from 'react';

function SectionApropos() {
    return (  
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
            <h1 className="mb-0">DEMAY  
            <span className="ml-1 text-primary">Romain</span>
            </h1>
            <div className="subheading mb-5">54 rue du château de Wasmes, 59390 Toufflers · 06 70 60 15 89 ·
            <a href="mailto:name@email.com">romain.demay56@gmail.com</a>
            </div>
            <p className="lead mb-5">
            Fort d’une expérience de deux ans chez Consort NT en tant que développeur PHP,
            j’ai pu mettre approfondir mes compétences lors de différents projets.
            <br/>
            J’ai pu travailler sur des applications nécessitant du développement Back-End et Font-End avec le framework CodeIgniter pour EDF.
            <br/>
            Ainsi que des projets en Symfony pour le compte de consort NT en interne.
            <br/>
            Je maîtrise donc le HTML, CSS, Javascript et jQuery ainsi que le PHP.
            <br/>
            <br/>
            De plus, mon expérience de deux ans en alternance chez Izianet m'a permis également d'approfondir mes compétances en PHP avec 
            le CMS Drupal mais également en Laravel et codeigniter lors des projets pendant la formation.
            </p>
        </div>
        </section>
    );

}

export default SectionApropos;