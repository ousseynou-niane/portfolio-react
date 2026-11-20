import { useState } from 'react'

async function trouverVille(nom) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(nom)}&count=1&language=fr`
  const reponse = await fetch(url)
  if (!reponse.ok) {
    throw new Error(`Erreur HTTP ${reponse.status}`)
  }
  const donnees = await reponse.json()
  if (!donnees.results || donnees.results.length === 0) {
    throw new Error("Ville introuvable")
  }
  return donnees.results[0]
}

async function recupererMeteo(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  const reponse = await fetch(url)
  if (!reponse.ok) {
    throw new Error(`Erreur HTTP ${reponse.status}`)
  }
  const donnees = await reponse.json()
  return donnees.current_weather
}

function Meteo() {
  const [ville, setVille] = useState("")
  const [resultat, setResultat] = useState(null)
  const [erreur, setErreur] = useState("")
  const [chargement, setChargement] = useState(false)

  async function rechercher(evenement) {
    evenement.preventDefault()

    const nom = ville.trim()
    if (nom === "") {
      return
    }

    setChargement(true)
    setErreur("")
    setResultat(null)

    try {
      const lieu = await trouverVille(nom)
      const meteo = await recupererMeteo(lieu.latitude, lieu.longitude)
      setResultat({
        nom: `${lieu.name}, ${lieu.country}`,
        temperature: meteo.temperature,
        vent: meteo.windspeed,
      })
    } catch (e) {
      setErreur(e.message)
    } finally {
      setChargement(false)
    }
  }

  return (
    <section className="meteo">
      <h2>Météo d'une ville</h2>

      <form onSubmit={rechercher} className="formulaire-todo">
        <input
          type="text"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          placeholder="Ex : Dakar"
        />
        <button type="submit">Rechercher</button>
      </form>

      {chargement && <p>Chargement...</p>}
      {erreur && <p className="erreur">Erreur : {erreur}</p>}

      {resultat && (
        <div>
          <h3>{resultat.nom}</h3>
          <p className="temperature">{resultat.temperature} °C</p>
          <p>Vent : {resultat.vent} km/h</p>
        </div>
      )}
    </section>
  )
}

export default Meteo