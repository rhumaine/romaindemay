import React, { useState, useEffect } from 'react';
import photoProfil from '../img/moi.jpg';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isMenuOpen && !event.target.closest('.navbar-collapse') && !event.target.closest('.navbar-toggler')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">DEMAY Romain</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={photoProfil} alt="Profile"/>
                </span>
            </a>
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about" onClick={closeMenu}>A propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#experience" onClick={closeMenu}>Experiences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#education" onClick={closeMenu}>Formations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#skills" onClick={closeMenu}>Compétences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#perso" onClick={closeMenu}>Réalisations professionnelles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#interests" onClick={closeMenu}>Intérêts</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul id="menu-icons" className="ul-contact list-inline list-social-icons mb-0">
                    <li className="list-inline-item">
                        <a className="nav_btn" href="https://www.linkedin.com/in/demayromain/" target="_blank" rel="noreferrer">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="nav_btn" href="mailto:romain.demay56@gmail.com">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="nav_btn" href="https://drive.google.com/file/d/10HR4e2Fv1H4jAcuti1JXFUVxXqrAuwVg/view" target="_blank" rel="noreferrer">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-file fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
