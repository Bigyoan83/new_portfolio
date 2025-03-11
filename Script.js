// Stocke la position précédente du scroll
let prevScrollPos = window.pageYOffset;

// Sélectionne la barre de navigation
const navBar = document.querySelector('.nav_barre');

window.onscroll = function() {
    // Position actuelle du scroll
    let currentScrollPos = window.pageYOffset;

    // Si on fait défiler vers le bas, cache la barre de navigation
    if (prevScrollPos < currentScrollPos) {
        navBar.style.top = "-100px"; // Cache la barre (ajustez cette valeur si nécessaire)
    } else {
        navBar.style.top = "100px"; // Affiche la barre
    }

    // Met à jour la position précédente pour le prochain défilement
    prevScrollPos = currentScrollPos;
};

document.addEventListener("DOMContentLoaded", function () {
    function showCompetenceDetails(competenceId) {
        const detailsDiv = document.getElementById('competence-details');

        const competences = {
            hardware: {
                title: "Hardware",
                description: "Conception de PC Gamer sur mesure <br> Installation de périphérique externe ",
            },
            vm: {
                title: "VM avec VirtualBox",
                description: "Installation de machine virtuel <br> (Kali Linux, Windows, Windows Server)",
            },
            os: {
                title: "Systèmes d'exploitation",
                description: "Windows, Kali Linux",
            },
            software: {
                title: "Logiciels divers",
                description: "Wireshark, Nmap, Hexascan, Sharpoint",
            },
            office: {
                title: "Pack Office",
                description: "Word, Excel, PowerPoint",
            },
        };

        if (competences[competenceId]) {
            detailsDiv.innerHTML = `
                <h3>${competences[competenceId].title}</h3>
                <p>${competences[competenceId].description}</p>
            `;    
        } else {
            detailsDiv.innerHTML = `
                <h3>Erreur</h3>
                <p>Aucune information disponible.</p>
            `;
        }
    }

    // Associez la fonction au global si nécessaire
    window.showCompetenceDetails = showCompetenceDetails;
});


