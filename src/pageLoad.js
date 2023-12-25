import { renderMenu } from '/src/renderMenu.js'
import { renderContact } from '/src/renderContact.js'
import {renderHome } from '/src/renderHome.js'
export { pageLoad }
function pageLoad() {
   const content = document.getElementById("content")

var h = document.createElement("HEADER")
content.appendChild(h)
var headerDiv = document.createElement("div")
h.appendChild(headerDiv)
const image = document.createElement('img')
image.src = "../src/icon.jpg"
image.style.height = "100px";
image.style.width = "100px";
headerDiv.appendChild(image)


// HOME
let homeButton = document.createElement("BUTTON")
homeButton.type = "button";
homeButton.id = "Home";
homeButton.innerText = "Home";

headerDiv.appendChild(homeButton)

homeButton.addEventListener('click', () => {
   renderHome()
   
})

// CONTACT
let contactButton = document.createElement("BUTTON")
contactButton.type = "button";
contactButton.innerText = "Contact";
contactButton.id = "Contact"
headerDiv.appendChild(contactButton)

contactButton.addEventListener('click', () => {
   renderContact()
})


// MENU
let menuButton = document.createElement("BUTTON")
menuButton.type = "button";
menuButton.innerText = "Menu";
menuButton.id = "Menu"
headerDiv.appendChild(menuButton)

menuButton.addEventListener('click', () => {
   renderMenu()
})

let mainContent = document.createElement("div")
mainContent.id = "mainContent";
mainContent.innerText = "Paul's Restaurant is a fabulous place to eat. Nestled amidst old growth trees in the English countryside, this woodland cottage restaurant has something for everyone. We serve Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vel? S"

content.appendChild(mainContent)
    
}
