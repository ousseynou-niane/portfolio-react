import { useState } from 'react'

function Todo() {
  const [taches, setTaches] = useState([])
  const [saisie, setSaisie] = useState("")

  function ajouter(evenement) {
    evenement.preventDefault()

    const texte = saisie.trim()
    if (texte === "") {
      return
    }

    setTaches([...taches, { id: Date.now(), texte: texte, faite: false }])
    setSaisie("")
  }

  function basculer(id) {
    setTaches(
      taches.map((t) => (t.id === id ? { ...t, faite: !t.faite } : t))
    )
  }

  function supprimer(id) {
    setTaches(taches.filter((t) => t.id !== id))
  }

  const restantes = taches.filter((t) => !t.faite).length

  return (
    <section className="todo">
      <h2>Ma to-do list</h2>

      <form onSubmit={ajouter} className="formulaire-todo">
        <input
          type="text"
          value={saisie}
          onChange={(e) => setSaisie(e.target.value)}
          placeholder="Nouvelle tâche..."
        />
        <button type="submit">Ajouter</button>
      </form>

      <p>{restantes} tâche(s) restante(s) sur {taches.length}</p>

      <ul className="liste-todo">
        {taches.map((t) => (
          <li key={t.id} className={t.faite ? "faite" : ""}>
            <input
              type="checkbox"
              checked={t.faite}
              onChange={() => basculer(t.id)}
            />
            <span>{t.texte}</span>
            <button onClick={() => supprimer(t.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Todo