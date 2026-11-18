function Competence({ nom, niveau, actif }) {
  return (
    <li className="competence">
      {actif && <span>✔ </span>}
      <strong>{nom}</strong> : {niveau}
    </li>
  )
}

export default Competence 