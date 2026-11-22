import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" end>Accueil</NavLink>
      <NavLink to="/compteur">Compteur</NavLink>
      <NavLink to="/taches">Tâches</NavLink>
      <NavLink to="/meteo">Météo</NavLink>
      <NavLink to="/utilisateurs">Utilisateurs</NavLink>
      <NavLink to="/a-propos">À propos</NavLink>
    </nav>
  )
}

export default Menu 