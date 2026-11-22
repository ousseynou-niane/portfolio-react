import photo from '../assets/photo.png'

function APropos() {
  return (
    <section className="a-propos">
      <img src={photo} alt="Ousseynou Niane" className="photo-profil" />
      <div>
        <h2>À propos de moi</h2>
        <p>
          Je me forme au développement web et mobile : HTML, CSS, JavaScript,
          React, puis back-end avec Node.js. Mon objectif : devenir développeur
          fullstack, trouver un emploi et travailler en freelance.
        </p>
        <p>
          <a href="https://github.com/ousseynou-niane">Mon profil GitHub</a>
        </p>
      </div>
    </section>
  )
}

export default APropos