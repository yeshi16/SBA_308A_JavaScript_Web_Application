
// import { connectApi, alertResponse } from "./MODULE/api.js"

document.addEventListener('DOMContentLoaded', fruitList)

// const fruits = []
const herokuapp = 'http://cors-anywhere.herokuapp.com/'
const url = 'https://www.fruityvice.com/api/fruit/all'

// async function starter() {
//     try {
//         console.log("hello script")
//         const connection = await connectApi(url);
//         const data = await alertResponse(connection)
//         console.log(data)

//     } catch (err) {
//         console.log(`error: ${err}`)
//     }
// }

async function connectApi() {
    const response = await fetch(`${herokuapp}${url}`, {

        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });


    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        return data

    } else {
        alert("The request returned a status other than 200 OK: " + response.status);
        return null;
    }
}

// async function alertResponse(response) {
//     if (response.ok) {
//         const data = await response.json();
//         // console.log(data);
//         return data

//     } else {
//         alert("The request returned a status other than 200 OK: " + response.status);
//     }
// }
/* <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
*/
async function fruitList() {
    const fruits = await connectApi();
    if (fruits) {
        const accordionContainer = document.getElementById('accordionFlush');
        fruits.forEach((element, i) => {
            // console.log(element.name)
            const itemDiv = document.createElement("div")
            itemDiv.classList.add("accordion-item")
            const header = document.createElement('h2')
            header.classList.add("accordion-header")
            const butn = document.createElement("button")
            butn.classList.add("accordion-button", "collapsed", "fw-bold", 'text-primary')
            butn.setAttribute("type", "button");
            butn.setAttribute("data-bs-toggle", "collapse")
            butn.setAttribute("data-bs-target", `#flush-collapse${i}`)
            butn.setAttribute("aria-expanded", "false")
            butn.setAttribute("aria-controls", `flush-collapse${i}`)
            butn.textContent = element.name
            header.appendChild(butn)

            const textOutterDiv = document.createElement("div")
            textOutterDiv.classList.add("accordion-collapse", "collapse")
            textOutterDiv.setAttribute("id", `flush-collapse${i}`)
            textOutterDiv.setAttribute("data-bs-parent", "#accordionFlush")

            const textDiv = document.createElement("div")
            textDiv.classList.add("accordion-body", 'text-primary')
            textDiv.innerHTML = `
            Family: ${element.family}<br>
            Order: ${element.order}<br>
            Genus: ${element.genus}<br>
            `

            textOutterDiv.appendChild(textDiv)
            itemDiv.appendChild(header)
            itemDiv.appendChild(textOutterDiv)

            accordionContainer.appendChild(itemDiv)
        });
    }
}
