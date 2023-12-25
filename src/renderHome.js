export { renderHome }

function renderHome() {

    let mainContent = document.getElementById("mainContent");
    let homeContainer = document.createElement("div")
    homeContainer.id = 'menuContainer'
    mainContent.textContent = ""
    homeContainer.textContent = "Paul's Restaurant is a fabulous place to eat. Nestled amidst old growth trees in the English countryside, this woodland cottage restaurant has something for everyone. We serve Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vel? S"
    mainContent.appendChild(homeContainer)
    
}