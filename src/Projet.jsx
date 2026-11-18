function Projet({ titre, description, lien }) {
  return (
    <article className="projet">
      <h3>{titre}</h3>
      <p>{description}</p>
      <a href={lien}>Voir le projet</a>
    </article>
  )
}

export default Projet 