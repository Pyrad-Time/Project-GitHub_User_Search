/*
control events, 
call api, 
update state
 */

import { getUser } from "./api.js";
import { render } from "./render.js";
import { state } from "./state.js";

const input = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")


async function load(userName) {
    state.loading = true
    render()

    try {
    const data = await getUser(userName)

    state.loading = false
    state.user = data.login
    state.profileImg = data.avatar_url

    } catch(error) {
        state.error = error.message

        if(error.message === "User not found") 
            alert('User not found')

        alert(state.error)

        state.errorLog += state.error
        state.error = null

    }    

    state.loading = false

    render()

}

function btnSearch() {

}

searchBtn.addEventListener("click", async () => {

    if(input.value) {
        state.inputValue = input.value
        await load(state.inputValue)
    } else {
        alert("Insira um nome válido.")
    }
        

    console.log(state)
})


