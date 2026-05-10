// Show ui informations

import { state } from "./state.js"

const containerResult = document.getElementById("search-result")
const containerStatus = document.getElementById("search-status")

function renderProfile () {
    const userName = document.createElement("p")
    userName.textContent = state.user

    const userProfileImg = document.createElement("img")
    userProfileImg.src = state.profileImg


    containerResult.append(userName, userProfileImg)
}

function handleLoading() {
    const status = state.loading

    const p = document.createElement("p")
    p.textContent = status

    containerStatus.append(p)
    
}

function handleError() {

}

export function render() {
    containerResult.textContent = ""
    containerStatus.textContent = ""

    if(state.loading) {
        handleLoading()
        console.log('entrou no loading')
        return
    }
        

    if(state.error) {
        handleError()
        return
    }

    renderProfile()   
}