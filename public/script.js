// fetch method
// const url = "https://nerdy-pickup-lines1.p.rapidapi.com/cheesy-pickup-lines/random";

// function getPickupLine() {
//     fetch(url)
//     .then (data => data.json())
//     .then(item => {
//         pickupLine.textContent = `${item.text}`;
//     })
// }

// btn.addEventListener ("click", getPickupLine)

// async/wait method
const url = 'https://rizzapi.vercel.app/random';
const pickupLine = document.querySelector('.pickup-line');
const btn = document.querySelector('.button');

pickupLine.classList.remove("fade");
async function getPickupLine () {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        pickupLine.textContent = data.text;
        pickupLine.classList.add("fade");

    } catch (error) {
        console.error(error);
    }

}

btn.addEventListener("click", getPickupLine);



