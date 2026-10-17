import React from 'react';

function SectionApropos() {
    return (  
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
            <h1 className="mb-0">DEMAY  
            <span className="ml-1 text-primary">Romain</span>
            </h1>
            <div className="subheading mb-5">91360 Epinay-sur-orge · 06 70 60 15 89 ·
            <a href="mailto:name@email.com">romain.demay56@gmail.com</a>
            </div>
            <p className="lead mb-5">
                Développeur web PHP, j’interviens depuis octobre 2024 à la CFTC sur
                le développement et la maintenance d’applications web utilisant MySQL et Oracle.
                Je contribue notamment à INARIC, la plateforme centrale de gestion des
                adhérents et des structures, ainsi qu’au projet 3C, consacré à la gestion
                des cotisations confédérales.
                <br />
                Mes missions comprennent le développement de fonctionnalités métier,
                les traitements d’import/export, la correction d’anomalies et
                l’intégration des API AgoraPay et Helium Connect.
                <br />
                <br />
                Auparavant, mon expérience chez Consort NT m’a permis de participer
                à différents projets back-end et front-end : une application
                d’automatisation des configurations réseau sous CodeIgniter pour EDF,
                une application interne de création de CV sous Symfony et le
                développement d’interfaces de back-office.
                <br />
                Ces missions ont renforcé mes compétences en PHP, HTML, CSS,
                JavaScript, jQuery et bases de données relationnelles.
                <br />
                <br />
                Mon parcours comprend également deux années d’alternance chez Izianet,
                consacrées à la création de sites et de modules personnalisés sous Drupal,
                ainsi qu’au développement de sites e-commerce en PHP natif.
                <br />
                En parallèle, mes projets de formation et personnels m’ont permis
                de pratiquer Laravel et CodeIgniter, de découvrir React et de réaliser
                une migration de Drupal 7 vers Drupal 10.
            </p>
        </div>
        </section>
    );

}

export default SectionApropos;
