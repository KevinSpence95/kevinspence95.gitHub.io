async function fetchData() {
    try {
    const numAnimals = document.getElementById("input").value
    const response = await fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${numAnimals}`)
    if (!response.ok) {
        throw new Error('Failed to retrieve images.')
    }
    const data = await response.json()
    createAnimalCards(data)
    }
    catch (err) {
        displayError(err)
        console.log(err)
    }
}

const displayError = (err) => {
    const container = document.querySelector("#gridContainer")
    container.innerHTML = ``
    const error = document.createElement('h3')
    container.append(error)
    error.textContent = err
}

function createAnimalCards(data) {
    let icon = "../images/moonvector.png"
    //clear any html in the gridContainer section
    document.getElementById("gridContainer").innerHTML = ``
    //create and append a card to the gridContainer section for each animal
    const newCards = data.map((animal) => {
        if (animal.active_time === "Diurnal"){
            icon = "../images/sun.png"
        }
        let cardColor = generateHex()
        return `
        <div class = "animalCard" style="border-left: 2px solid ${cardColor};border-right: 2px solid ${cardColor};background-color:${cardColor}">
            <div class = "topSection" style="border: 2px solid ${cardColor}">
                <div class="names">
                    <h3 class = "name">${animal.name}</h3>
                    <p class= "latinName">${animal.latin_name} - <span class = "animalType">${animal.animal_type}</span></p>
                </div>
                <img class = "sunOrMoon" src = "${icon}">
            </div>
            <img class = "midSection" src = "${animal.image_link}">
            <div class = "bottomSection" style="border: 2px solid ${cardColor}">
                <p class = "habitat">Habitat: <span>${animal.habitat}</span></p>
                <p class = "located">Located: <span>${animal.geo_range}</span></p>
                <p class = "diet">Diet: <span>${animal.diet}</span></p>
                <p class = "maxWeight">Max Weight (lbs): <span>${animal.weight_max}</span></p>
                <p class = "maxLength">Max Length (ft): <span>${animal.length_max}</span></p>
                <p class = "lifeSpan">Life Span (years): <span>${animal.lifespan}</span></p>
            </div>
        </div>
        `
    }).join("");
    
    document.getElementById("gridContainer").innerHTML = newCards

}

function generateHex() {
    let digits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let randoHex = ["#"]
    for(let i = 0; i < 6; i++){
      let newHex = randoHex.push(digits[Math.floor(Math.random()*16)])
    }
    const theStuff = randoHex.join("")
    return theStuff
  }



