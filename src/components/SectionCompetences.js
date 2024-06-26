import React from 'react';

function SectionCompetences() {
    return (  
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                <h2 className="mb-5">Compétences</h2>

                <div className="subheading mb-3">Languages de programmations &amp; Outils</div>
                        <ul className="list-inline dev-icons">
                                <li className="list-inline-item">
                                        <i className="fab fa-php"></i>
                                </li>
                                <li className="list-inline-item">
                                        <i className="fab fa-html5"></i>
                                </li>
                                        <li className="list-inline-item">
                                        <i className="fab fa-css3-alt"></i>
                                </li>
                                <li className="list-inline-item">
                                        <i className="fab fa-js-square"></i>
                                </li>
                                <li className="list-inline-item">
                                        <i className="fab fa-drupal"></i>
                                </li>
                                <li className="list-inline-item">
                                        <i className="fab fa-symfony"></i>
                                </li>
                                <li className="list-inline-item">
                                        <i className="fab fa-laravel"></i>
                                </li>
                                <li className="list-inline-item">
                                        <i className="fab fa-free-code-camp"></i>
                                </li>
                                <li className="list-inline-item">
                                        <i className="fab fa-react"></i>
                                </li>
                                <li className="list-inline-item">
                                        <i className="fab fa-wordpress"></i>
                                </li>
                        </ul>
                </div>
      </section>
    );

}

export default SectionCompetences;