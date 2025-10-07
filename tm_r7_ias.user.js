// ==UserScript==
// @name         Mon Extension Personnalisée
// @namespace    http://votredomaine.com/
// @version      1.0.0
// @description  Description de votre extension
// @author       Votre nom
// @match        https://site-a-modifier.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/votre-username/votre-repo/main/mon-script.meta.js
// @downloadURL  https://raw.githubusercontent.com/votre-username/votre-repo/main/mon-script.user.js
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    
    // Votre code JavaScript ici
    console.log('Script chargé !');
    
    // Exemple : modifier le CSS
    const style = document.createElement('style');
    style.textContent = `
        /* Votre CSS personnalisé */
        body {
            background-color: #f0f0f0;
        }
    `;
    document.head.appendChild(style);
    
    // Votre code de modification du DOM, etc.
})();
