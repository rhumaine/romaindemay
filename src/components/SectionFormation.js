import React from 'react';

function SectionFormation() {
    return (  
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="w-100">
                        <h2 className="mb-5">Formations</h2>

                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                        <h3 className="mb-0">ISTEF</h3>
                                        <div className="subheading mb-3">Mastère Chef de projet Digital II en alternance</div>
                                </div>
                                <div className="resume-date text-md-right">
                                        <span className="text-primary">Septembre 2016 - Septembre 2018</span>
                                </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                        <h3 className="mb-0">IUT de Vannes</h3>
                                        <div className="subheading">Licence professionnelle S2IMa en alternance</div>
                                        <div>Système d’Information – Intégration et Maintenance applicative</div>
                                </div>
                                <div className="resume-date text-md-right">
                                        <span className="text-primary">Septembre 2014 - Août 2015</span>
                                </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                        <h3 className="mb-0">Lycée Notre-Dame de la Paix</h3>
                                        <div className="subheading">BTS SIO </div>
                                        <div className="mb-3">Option développeur d’applications - Solutions logicielles et applications métiers</div>
                                        <div className="subheading">Bac STG </div>
                                        <div>Option Gestion des Systèmes d’Information</div>
                                </div>
                                <div className="resume-date text-md-right">
                                        <span className="text-primary">Septembre 2011 - Juin 2014</span>
                                </div>
                        </div>
                </div>
        </section>
    );

}

export default SectionFormation;