import { useState } from 'react'

function Compteur() {
  const [nombre, setNombre] = useState(0)

  return (
    <section className="compteur">
      <h2>Compteur de clics</h2>
      <p>Nombre de clics : {nombre}</p>
      <button onClick={() => setNombre(nombre + 1)}>+1</button>
      <button onClick={() => setNombre(nombre > 0 ? nombre - 1 : 0)}>-1</button>
      <button onClick={() => setNombre(0)}>Remettre à zéro</button>
      {nombre >= 10 && <p>Bravo, tu as dépassé 10 clics !</p>}
    </section>
  )
}

export default Compteur 