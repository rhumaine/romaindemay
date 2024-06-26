import React from 'react';

function Mgs() {
    return (  
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Développeur Web</h3>
          <div className="subheading mb-3">MGS Consulting Ouest</div>
          <ul>
            <li>Montée en compétence sur Symfony 2</li>
            <li>Contribution au développement d’une application mobile pour les personnes ayant des troubles de la mémoire</li>
            <li>Contribution au développement d’une application de simulation de tableaux sur un mur</li>
          </ul>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Février 2015 - Août 2015</span>
        </div>
      </div>
    );

}

export default Mgs;