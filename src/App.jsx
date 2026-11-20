import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Entete from './Entete.jsx'
import Menu from './Menu.jsx'
import Accueil from './Accueil.jsx'
import Compteur from './Compteur.jsx'
import Todo from './Todo.jsx'
import Meteo from './Meteo.jsx'
import Utilisateurs from './Utilisateurs.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Entete nom="Ousseynou Niane" titre="Futur développeur fullstack" />
      <Menu />

      <main className="contenu">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/compteur" element={<Compteur />} />
          <Route path="/taches" element={<Todo />} />
          <Route path="/meteo" element={<Meteo />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App