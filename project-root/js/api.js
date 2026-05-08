// just do fetch
import { state } from "./state.js"

export async function getUser(userName) {

    try {
        const response = await fetch (`https://api.github.com/users/${userName}`)

        if(!response.ok) 
            throw new Error("User not found")

        const data = await response.json()
        
        return data

    } catch(error) {
        throw error
    }   
}