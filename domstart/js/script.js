"use strict"

// document.body.style.background = "magenta"
/*
document.body.style.opacity = 0
document.body.style.transition = "1s"
*/

/* 1. Le contenu de body apparait avec transition */
/* setTimeout crée un delai */

setTimeout(() => {
  document.body.style.opacity = 1 // style inline, force 1000
}, 500)

/* 2. La propriété background-color de l'élément 
header est aléatoire 
["hotpink", "tomato", "orange"] 
*/

/* 4 */

const pIntroEl = document.getElementById("intro-criteres")

const criteres = document.querySelectorAll("#liste-criteres li")
console.log(criteres.length)

pIntroEl.textContent = `Nous avons préparés ${criteres.length} critères pour faciliter votre choix !`

/* 5 - quand je click sur bouton j'ai des informations */

const infoBtn = document.getElementById("info-btn")
// const infoBtn = document.querySelector("#info-btn")

const infoBtnClickHandler = () => {
  console.dir(document)
  alert(
    `Le titre de cette page est "${document.title}" (${document.documentElement.lang}), son URL est ${document.URL}`
  )
}

//infoBtn.addEventListener("click", infoBtnClickHandler)
if (infoBtn) {
  infoBtn.addEventListener("click", () => {
    console.dir(document)
    console.log(document)
    alert(
      `Le titre de cette page est "${document.title}" (${document.documentElement.lang}), son URL est ${document.URL}`
    )
  })
}

/* 6, 7 - panneau pub disparait */

const pubEl = document.getElementById("pub")
// const pubEl = document.querySelector('#pub')
const pubBtn = document.getElementById("pub-btn") // null
if (pubBtn) {
  pubBtn.addEventListener("click", () => {
    // on ne veut plus avoir pubEl
    pubEl.remove()
    //pubEl.hidden = true
  })
}

/* 8 - bouton header */
const headerEl = document.getElementById("header")
const tagline = document.getElementById("tagline")

const generateHeader = () => {
  const colors = ["hotpink", "tomato", "orange"]
  const randomIndexColor = Math.floor(Math.random() * colors.length)
  const hellos = ["Hello", "Salut", "Hola", "Cześć"]
  const randomIndexHellos = Math.floor(Math.random() * hellos.length)

  headerEl.setAttribute(
    "style",
    `background-color:${colors[randomIndexColor]}!important;`
  )
  tagline.textContent = `${hellos[randomIndexHellos]} 😊`
}

generateHeader()

const headerBtn = document.querySelector("#header button")

if (headerBtn) {
  headerBtn.addEventListener("click", generateHeader)
}

/* 9 */

const buttons = document.querySelectorAll("button")
// const buttons = document.getElementsByTagName("button")
console.log(buttons)

for (let button of buttons) {
  button.disabled = true
}

/* 10 */

const pCookies = document.createElement("p")
pCookies.textContent = "Ce site n'utilise pas des cookies"
console.log(pCookies)
console.dir(pCookies)
document.body.append(pCookies)

pCookies.className = "text-center"

console.log(headerEl.className)
console.log(headerEl.classList)
