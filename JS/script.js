// import { connectApi, alertResponse } from "./MODULE/api.js"

document.addEventListener("DOMContentLoaded", fruitList);

const herokuapp = "http://cors-anywhere.herokuapp.com/";
const url = "https://www.fruityvice.com/api/fruit/all";


async function connectApi() {
    const response = await fetch(`${herokuapp}${url}`, {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });

    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        return data;
    } else {
        alert(
            "The request returned a status other than 200 OK: " + response.status
        );
        return null;
    }
}


async function fruitList() {
    const fruits = await connectApi();
    if (fruits) {
        const accordionContainer = document.getElementById("accordionFlush");
        fruits.forEach((element, i) => {
            // console.log(element.name)
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("accordion-item");
            const header = document.createElement("h2");
            header.classList.add("accordion-header");
            const butn = document.createElement("button");
            butn.classList.add(
                "accordion-button",
                "collapsed",
                "fw-bold",
                "text-primary"
            );
            butn.setAttribute("type", "button");
            butn.setAttribute("data-bs-toggle", "collapse");
            butn.setAttribute("data-bs-target", `#flush-collapse${i}`);
            butn.setAttribute("aria-expanded", "false");
            butn.setAttribute("aria-controls", `flush-collapse${i}`);
            butn.textContent = element.name;
            header.appendChild(butn);

            const textOutterDiv = document.createElement("div");
            textOutterDiv.classList.add("accordion-collapse", "collapse");
            textOutterDiv.setAttribute("id", `flush-collapse${i}`);
            textOutterDiv.setAttribute("data-bs-parent", "#accordionFlush");

            const textDiv = document.createElement("div");
            textDiv.classList.add("accordion-body", "text-primary");
            textDiv.innerHTML = `
            Family: ${element.family}<br>
            Order: ${element.order}<br>
            Genus: ${element.genus}<br>
            `;

            textOutterDiv.appendChild(textDiv);
            itemDiv.appendChild(header);
            itemDiv.appendChild(textOutterDiv);

            accordionContainer.appendChild(itemDiv);
        });
    }
}
