import { HashRouter, Routes, Route } from 'react-router-dom'
import Entete from './Entete.jsx'
import Menu from './Menu.jsx'
import Accueil from './Accueil.jsx'
import Compteur from './Compteur.jsx'
import Todo from './Todo.jsx'
import Meteo from './Meteo.jsx'
import Utilisateurs from './Utilisateurs.jsx'
import APropos from './pages/APropos.jsx'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Entete nom="Ousseynou Niane" titre="Futur développeur fullstack" />
      <Menu />

      <main className="contenu">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/compteur" element={<Compteur />} />
          <Route path="/taches" element={<Todo />} />
          <Route path="/meteo" element={<Meteo />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Routes>
      </main>
    </HashRouter>
  )
}

export default App 