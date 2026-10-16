import React from 'react';

function Cftc() {
    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Développeur PHP / MySQL / Oracle</h3>
          <div className="subheading mb-3">CFTC</div>
          <ul>
            <li>Développement et maintenance d’applications web PHP connectées à MySQL et Oracle</li>
            <li>Projets Internet et INARIC, plateforme centrale de gestion des adhérents et des structures</li>
            <li>Projet 3C : Circuit de Cotisations Confédérale</li>
            <li>Développement de fonctionnalités métier et de requêtes SQL</li>
            <li>Traitements d’import/export et génération de fichiers Excel</li>
            <li>Correction d’anomalies et maintenance évolutive</li>
          </ul>
          <p>Technologies : API AgoraPay, API Helium Connect, HTML, PHP, CSS, Oracle, MySQL</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">Octobre 2024 - Aujourd'hui</span>
        </div>
      </div>
    );

}

export default Cftc;
