import { useState, useEffect } from 'react'

function Utilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState([])
  const [erreur, setErreur] = useState("")
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    async function charger() {
      try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!reponse.ok) {
          throw new Error(`Erreur HTTP ${reponse.status}`)
        }
        const donnees = await reponse.json()
        setUtilisateurs(donnees)
      } catch (e) {
        setErreur(e.message)
      } finally {
        setChargement(false)
      }
    }

    charger()
  }, [])

  return (
    <section className="utilisateurs">
      <h2>Utilisateurs</h2>

      {chargement && <p>Chargement...</p>}
      {erreur && <p className="erreur">Erreur : {erreur}</p>}

      <ul>
        {utilisateurs.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> ({u.email}) : {u.address.city}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Utilisateurs