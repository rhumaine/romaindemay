import React from 'react';

function Consort() {
    return (  
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Développeur Web</h3>
          <div className="subheading mb-3">Consort NT</div>
            <ul>
              <li>Développement d’une application de création de CV en interne
                <ul>
                  <li>Connexion / Profil Candidat / Génération d’un PDF / Recherche des profils</li>
                    <ul>
                      <li>Symfony 5, Twig, jQuery, MySql</li>
                    </ul>
                </ul>
              </li>

              <li>Prestataire chez EDF
                <ul>
                  <li>Conception et réalisation d’une application d’automatisation des configurations des
                    éléments du réseau</li>
                    <ul>
                      <li>CodeIgniter (PHP), HTML, CSS, PostgreSQL</li>
                    </ul>
                </ul>
              </li>

              <li>Prestataire chez ALLSET
                <ul>
                  <li>Développement front-end sous Symfony du backoffice de l’entreprise</li>
                    <ul>
                      <li>Symfony 5, Twig, HTML, CSS</li>
                    </ul>
                </ul>
              </li>

              <li>Prestataire chez TERRENA
                <ul>
                  <li>Développement de mapping permettant la transformation de données</li>
                    <ul>
                      <li>STAMBIA, Sq</li>
                    </ul>
                </ul>
              </li>
            </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Janvier 2021 - Mai 2023</span>
        </div>
      </div>
    );

}

export default Consort;