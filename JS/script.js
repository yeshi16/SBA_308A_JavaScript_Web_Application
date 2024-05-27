
import { connectApi, alertResponse } from "./MODULE/api.js"

document.addEventListener('DOMContentLoaded', starter)

// const herokuapp = 'http://cors-anywhere.herokuapp.com/'
const url = 'https://www.fruityvice.com/api/fruit/all'

async function starter() {
    try {
        console.log("hello script")
        const connection = await connectApi(url);
        const data = await alertResponse(connection)
        console.log(data)

    } catch (err) {
        console.log(`error: ${err}`)
    }
}
