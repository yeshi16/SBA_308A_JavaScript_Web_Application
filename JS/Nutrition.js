const herokuapp = "http://cors-anywhere.herokuapp.com/";
const url = "https://www.fruityvice.com/api/fruit/all";

document.addEventListener("DOMContentLoaded", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");

    /* <li><a class="dropdown-item text-primary" href="#">Drama</a></li> */
    async function nutritionList() {
        const fruits = await connectApi();
        if (fruits) {
            fruits.forEach((fruit) => {
                const list = document.createElement("li");
                const link = document.createElement("a");
                link.classList.add("dropdown-item", "text-primary");
                link.href = "#"; //"./nutrition.html"
                link.textContent = fruit.name;
                link.addEventListener("click", function () {
                    selectedFruit(fruit);
                });
                list.appendChild(link);
                dropdownMenu.appendChild(list);
            });
        }
    }

    /* <div class="card-header bg-transparent border-success">Header</div>
          <div class="card-body text-success">
            <h5 class="card-title">Success card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div> */

    async function selectedFruit(fruit) {
        clear();

        const fruitCard = document.getElementById("fruitCard");
        fruitCard.textContent = ""; // clear card

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header", "bg-transparent", "border-primary");
        cardHeader.textContent = `${fruit.name} Nutrition Facts`;
        fruitCard.appendChild(cardHeader);

        const cardBody = document.createElement("div");
        cardHeader.classList.add("card-body", "text-primary");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title", "text-primary");
        cardTitle.textContent = fruit.name;
        cardBody.appendChild(cardTitle);

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerHTML = `
           
                calories: ${fruit.nutritions.calories} <br>
                fat: ${fruit.nutritions.fat}<br>
                sugar: ${fruit.nutritions.sugar}<br>
                carbohydrates: ${fruit.nutritions.carbohydrates}<br>
                protein: ${fruit.nutritions.protein}<br>
            
          `;
        cardBody.appendChild(cardText);
        fruitCard.appendChild(cardBody);
    }

    // clear card
    function clear() {
        const fruitCard = document.getElementById("fruitCard");
        fruitCard.innerHTML = "";
    }

    // call Api
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

    nutritionList();
});
