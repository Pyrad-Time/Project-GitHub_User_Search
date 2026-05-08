// Show ui informations
import { state } from "./state.js";
const container = document.getElementById("search-result")

function renderProfile () {
    const userName = document.createElement("p")
    userName.textContent = state.user

    const userProfileImg = document.createElement("img")
    userProfileImg.src = state.profileImg


    container.append(userName, userProfileImg)
}

function handleLoading() {
    
}

function handleError() {

}

export function render() {
    container.textContent = ""

    if(state.loading) {
        handleLoading()
        return
    }
        

    if(state.error) {
        handleError()
        return
    }
        
    renderProfile()
}