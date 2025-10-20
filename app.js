// ---- Programme des séances ----
const sessions = [
  { titre: 'Séance 1 – Découverte de l’ordinateur', contenu: 'Identifier les composants d’un ordinateur, comprendre le matériel et le logiciel.' },
  { titre: 'Séance 2 – Navigation et sécurité', contenu: 'Apprendre à naviguer sur Internet et adopter les bons réflexes de sécurité.' },
  { titre: 'Séance 3 – Comprendre le Web', contenu: 'Découvrir le fonctionnement des sites web et la notion de code.' },
  { titre: 'Séance 4 – Premiers pas en HTML', contenu: 'Créer sa première page HTML.' },
  { titre: 'Séance 5 – Les balises essentielles', contenu: 'Utiliser les balises pour structurer un contenu.' },
  { titre: 'Séance 6 – Introduction au CSS', contenu: 'Apprendre à styliser une page web.' },
  { titre: 'Séance 7 – Mise en page avancée', contenu: 'Découvrir Flexbox et Grid.' },
  { titre: 'Séance 8 – Introduction à JavaScript', contenu: 'Créer des interactions simples sur une page web.' },
  { titre: 'Séance 9 – Mini-jeu JS', contenu: 'Créer un petit jeu interactif.' },
  { titre: 'Séance 10 – Projet final : préparation', contenu: 'Choisir un thème et planifier le projet.' },
  { titre: 'Séances 11 à 13 – Réalisation du projet', contenu: 'Construire le site web complet en équipe.' },
  { titre: 'Séance 14 – Finitions', contenu: 'Vérifier et corriger le code.' },
  { titre: 'Séance 15 – Présentation', contenu: 'Présenter le projet et valoriser le travail accompli.' }
];

const container = document.getElementById('sessions');
sessions.forEach(s => {
  const div = document.createElement('div');
  div.classList.add('session');
  div.innerHTML = `<h3>${s.titre} <span>+</span></h3><p>${s.contenu}</p>`;
  div.querySelector('h3').addEventListener('click', () => {
    div.classList.toggle('active');
  });
  container.appendChild(div);
});

// ---- Formulaire de contact ----
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  window.location.href = `mailto:abdedou75008@gmail.com?subject=Contact%20formation&body=Nom:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
});

// ---- Section Avis ----
const avisForm = document.getElementById('avisForm');
const listeAvis = document.getElementById('listeAvis');

let avis = JSON.parse(localStorage.getItem('avisList')) || [];

function afficherAvis() {
  listeAvis.innerHTML = '';
  avis.forEach(a => {
    const div = document.createElement('div');
    div.classList.add('avis-card');
    div.innerHTML = `<h4>${a.auteur}</h4><p>${a.commentaire}</p>`;
    listeAvis.appendChild(div);
  });
}

afficherAvis();

avisForm.addEventListener('submit', e => {
  e.preventDefault();
  const auteur = document.getElementById('auteur').value;
  const commentaire = document.getElementById('commentaire').value;
  const nouveauAvis = { auteur, commentaire };
  avis.push(nouveauAvis);
  localStorage.setItem('avisList', JSON.stringify(avis));
  afficherAvis();
  avisForm.reset();
});

// ---- DARK MODE ----
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Vérifie si un thème est enregistré
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️ Mode clair';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const darkMode = body.classList.contains('dark');
  themeToggle.textContent = darkMode ? '☀️ Mode clair' : '🌙 Mode sombre';
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
});
