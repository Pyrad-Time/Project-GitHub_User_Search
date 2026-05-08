/*
control events, 
call api, 
update state
 */

import { getUser } from "./api.js";
import { state } from "./state.js";

const input = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")

async function load(userName) {
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
    }    
}

searchBtn.addEventListener("click", () => {
    state.inputValue = input.value

    load(state.inputValue)
})


