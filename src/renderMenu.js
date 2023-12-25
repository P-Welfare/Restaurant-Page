export { renderMenu } 

function renderMenu() {
    let mainContent = document.getElementById("mainContent");
    let menuContainer = document.createElement("div")
    menuContainer.id = 'menuContainer'
    mainContent.textContent = ""
    menuContainer.textContent = "We have sold out of food."
    mainContent.appendChild(menuContainer)
    
}