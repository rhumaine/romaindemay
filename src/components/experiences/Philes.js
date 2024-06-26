import React from 'react';

function Philes() {
    return (  
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Développeur Web</h3>
          <div className="subheading mb-3">Philes</div>
            <ul>
              <li>Prestataire chez CGI - SopraSteria
                <ul>
                  <li>Développement sous Drupal 8 du forum de la DGFiP</li>
                  <li>Développement / maintenance de l’intranet pour un projet en internet</li>
                  <ul>
                    <li>Symfony, HTML, CSS, Cobol, JAVA, MySQL, PostgreSql</li>
                  </ul>
                </ul>
              </li>
            </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Octobre 2019 - Mai 2020</span>
        </div>
      </div>
    );

}

export default Philes;