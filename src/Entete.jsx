function Entete({ nom, titre }) {
  return (
    <header className="entete">
      <h1>{nom}</h1>
      <p>{titre}</p>
    </header>
  )
}

export default Entete