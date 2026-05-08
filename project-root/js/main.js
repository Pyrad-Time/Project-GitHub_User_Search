/*
control events, 
call api, 
update state
 */

import { getUser } from "./api.js";
import { state } from "./state.js";

async function load(userName) {
    try {
    const data = await getUser(userName)

    state.loading = !true
    state.user = data.login
    state.profileImg = data.avatar_url

    } catch(error) {
        state.error = error.message

        if(error.message === "Not Found") 
            alert('User not found')

        alert(state.error)
    }    
}

load("pyrad-tme")
