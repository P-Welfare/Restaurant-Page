export { renderContact }






function renderContact() {
    let mainContent = document.getElementById("mainContent");
    let contactContainer = document.createElement("div")
    contactContainer.id = 'contactContainer'
    mainContent.textContent = ""
    contactContainer.textContent = "Pop in and talk to us."
    mainContent.appendChild(contactContainer)
    
}