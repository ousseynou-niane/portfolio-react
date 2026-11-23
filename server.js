import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

let taches = [
  { id: 1, texte: "Apprendre Node.js", faite: false },
  { id: 2, texte: "Créer une API", faite: false },
  { id: 3, texte: "Publier mon portfolio", faite: true },
]

app.get('/', (req, res) => {
  res.json({ message: "API des tâches", version: 1 })
})

app.get('/api/taches', (req, res) => {
  res.json(taches)
})

app.get('/api/taches/:id', (req, res) => {
  const id = Number(req.params.id)
  const tache = taches.find((t) => t.id === id)

  if (!tache) {
    return res.status(404).json({ erreur: "Tâche introuvable" })
  }

  res.json(tache)
})

app.use((req, res) => {
  res.status(404).json({ erreur: "Route introuvable" })
})

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`)
})