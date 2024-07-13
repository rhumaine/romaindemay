import React from 'react';
import luciole from '../img/luciole.png';
import dansedesalon from '../img/dansedesalon.jfif';

function SectionReaperso() {
    return (  
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center perso" id="perso">
                <div className="w-100">
                        <h2 className="mb-5">Réalisations personnelles</h2>
                        <div className="d-flex flex-wrap justify-content-between justify-content-sm-center gap-3">
                                <div>
                                        <a href="https://luciole.vercel.app/" target="_blank" rel="noreferrer">
                                                <img src={luciole} alt="Aperçu du site luciole" />
                                                <p className="subheading text-center">Site de Luciole</p>
                                        </a>
                                </div>
                                <div>
                                        <a href="https://dansedesalonsaintave.fr/" target="_blank" rel="noreferrer">
                                                <img src={dansedesalon} alt="Aperçu du site danse de salon" />
                                                <p className="text-center subheading">Site de l'association de danse de salon de St Avé</p>
                                        </a>
                                </div>
                        </div>
                </div>
      </section>
    );

}

export default SectionReaperso;