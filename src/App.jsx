import Entete from './Entete.jsx'
import Competence from './Competence.jsx'
import Projet from './Projet.jsx'
import Compteur from './Compteur.jsx'
import Todo from './Todo.jsx'
import './App.css'

const competences = [
  { id: 1, nom: "HTML", niveau: "Bon", actif: true },
  { id: 2, nom: "CSS", niveau: "Bon", actif: true },
  { id: 3, nom: "JavaScript", niveau: "En progression", actif: false },
  { id: 4, nom: "Git", niveau: "Débutant", actif: false },
]

const projets = [
  {
    id: 1,
    titre: "Page de présentation",
    description: "Ma première page en HTML et CSS, avec Flexbox et un menu.",
    lien: "https://ousseynou-niane.github.io/formation-web/",
  },
  {
    id: 2,
    titre: "To-do list",
    description: "Une liste de tâches en JavaScript avec sauvegarde locale.",
    lien: "https://ousseynou-niane.github.io/formation-web/todo.html",
  },
  {
    id: 3,
    titre: "Page météo",
    description: "La météo d'une ville, avec fetch et une API.",
    lien: "https://ousseynou-niane.github.io/formation-web/meteo.html",
  },
]

function App() {
  return (
    <div>
      <Entete nom="Ousseynou Niane" titre="Futur développeur fullstack" />

      <main className="contenu">
        <h2>Mes compétences</h2>
        <ul>
          {competences.map((c) => (
            <Competence
              key={c.id}
              nom={c.nom}
              niveau={c.niveau}
              actif={c.actif}
            />
          ))}
        </ul>

        <Compteur />
        <Todo />

        <h2>Mes projets</h2>
        {projets.map((p) => (
          <Projet
            key={p.id}
            titre={p.titre}
            description={p.description}
            lien={p.lien}
          />
        ))}
      </main>
    </div>
  )
}

export default App 