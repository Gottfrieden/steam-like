import React from 'react';
import './header.css';


function displaySubmenu() {
    const allSubMenu = [];
    let subMenu = document.getElementsByClassName("submenu");
    for (let i = 0; i < subMenu.length; i++) {
        allSubMenu.push(subMenu[i]);
        allSubMenu[i].classList.toggle('visible');

    }
}

function TopNavBar() {
    return (
        <div className="top-nav-container">
            <nav className="top-nav">
                <div className="top-left-nav">
                    <ul>
                        <li>
                            <a href="#" className="submenu-opener" onClick={displaySubmenu}>Steam</a>
                            <div className="submenu">
                                <ul>
                                    <li>  
                                        <a href="#">Changer de compte...</a>
                                    </li>
                                    <li>  
                                        <a href="#">Passer en mode hors-ligne...</a>
                                    </li>
                                    <li>  
                                        <a href="#">Rechercher des mises à jour du client Steam...</a>
                                    </li>
                                    <li>  
                                        <a href="#">Sauvegarder et restaurer des jeux...</a>
                                    </li>
                                    <li>  
                                        <a href="#">Paramètres</a>
                                    </li>
                                    <li>  
                                        <a href="#">Quitter</a>
                                    </li>
                                </ul>
                            </div>
                        </li>  
                        <li>  
                            <a href="#" className="submenu-opener" onClick={displaySubmenu}>Afficher</a>
                            <div className="submenu">
                                <ul>
                                    <li>  
                                        <a href="#">Bibliothèque</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Jeux masqués</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Téléchargements</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Mode réduit</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Mode Big Picture</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Musiques</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Lecteur de musique</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Amis</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Joueurs</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Serveurs</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Capture d'écran</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Inventaire</a>
                                        
                                    </li>
                                    <li>  
                                        <a href="#">Actualités</a>
                                    </li>
                                    <li>  
                                        <a href="#">Paramètres</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="submenu-opener" onClick={displaySubmenu}>Amis</a>
                            <div className="submenu">
                                <ul>
                                    <li>  
                                        <a href="#">Afficher la liste d'amis (2 en ligne)</a>
                                    </li>
                                    <li>  
                                        <a href="#">Ajouter un ami...</a>
                                    </li>
                                    <li>  
                                        <a href="#">Modifier le nom de profil ou l'avatar...</a>
                                    </li>
                                    <li>  
                                        <a href="#">En ligne</a>
                                    </li>
                                    <li>  
                                        <a href="#">Absent</a>
                                    </li>
                                    <li>  
                                        <a href="#">Invisible</a>
                                    </li>
                                    <li>  
                                        <a href="#">Hors ligne</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="submenu-opener" onClick={displaySubmenu}>Jeux</a>
                            <div className="submenu">
                                <ul>
                                    <li>  
                                        <a href="#">Afficher la bibliothèque de jeux</a>
                                    </li>
                                    <li>  
                                        <a href="#">Activer un produit sur Steam</a>
                                    </li>
                                    <li>  
                                        <a href="#">Activer un code de porte-monnaie Steam...</a>
                                    </li>
                                    <li>  
                                        <a href="#">Gérer les cadeaux et invitations...</a>
                                    </li>
                                    <li>  
                                        <a href="#">Ajouter un jeu non-Steam à ma bibliothèque... </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="submenu-opener" onClick={displaySubmenu}>Aide</a>
                            <div className="submenu">
                                <ul>
                                    <li>  
                                        <a href="#">Support Steam</a>
                                    </li>
                                    <li>  
                                        <a href="#">Politique de protection de la vie-privée</a>
                                    </li>
                                    <li>  
                                        <a href="#">Mentions légales</a>
                                    </li>
                                    <li>  
                                        <a href="#">Accord de souscription Steam</a>
                                    </li>
                                    <li>  
                                        <a href="#">Informations système</a>
                                    </li>
                                    <li>  
                                        <a href="#">A propos de Steam</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="top-right-nav">
                    <div className="top-right-nav-element community"></div>
                    <div className="top-right-nav-element mail"></div>
                    <div className="top-right-nav-element user">
                        <div className="user-picture"></div>
                        <div className="user-name">
                            Gottfrieden
                            <span className="dropdown-arrow"></span>
                        </div>
                    </div>
                    <div className="top-right-nav-element fullscreen"></div>
                    <div className="top-right-nav-element reduce"></div>
                    <div className="top-right-nav-element resize-screen"></div>
                    <div className="top-right-nav-element close"></div>
                </div>
            </nav>
        </div>
    )
}
    
export default TopNavBar;