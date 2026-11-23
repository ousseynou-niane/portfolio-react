const nom = "Ousseynou"
const notes = [12, 15, 9, 18]

let somme = 0
for (const n of notes) {
  somme += n
}

console.log(`Bonjour ${nom}, ta moyenne est ${somme / notes.length}`)