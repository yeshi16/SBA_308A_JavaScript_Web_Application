
const herokuapp = 'http://cors-anywhere.herokuapp.com/'
// const url = 'https://www.fruityvice.com/api/fruit/all'
document
.getElementById("btn")
.addEventListener("click", connectApi);

export async function connectApi(url) {
    
    const response = await fetch(`${herokuapp}${url}`, {     

        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });
    console.log("hello api")
    return response
    // const data = alertResponse(response)
    // return data;
}
// connectApi()
 export async function alertResponse(response) {
    try {
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data
        } else {
            console.log(`error: ${response.statusText}`)
        }
    } catch (err) {
        console.error(`fetch error: ${err}`)
    }
}