const massInput = document.getElementById('massInput')
const select = document.getElementById('select')
const planetText = document.getElementById('planet-text')
const planetName = document.getElementById('planet-name')
const weightBtn = document.getElementById('btn-weight')
const calcWeight  = document.getElementById('calculated-weight')
const planetImage = document.getElementById('planet-image')
const planetImageBox = document.getElementById('planet-image-box')
const planetTextDiv = document.getElementById('planet-text-div')
const circleDiv = document.getElementById('circle-div')

const infoData = {
    MERCURY:{ 
        imagePath:'./assets/mercury.png',
        gravity:3.724
    },
    VENUS:{ 
        imagePath:'./assets/venus.png',
        gravity:8.918
    },
    EARTH:{ 
        imagePath:'./assets/earth.png',
        gravity:9.8
    },
    MOON:{ 
        imagePath:'./assets/moon.png',
        gravity:1.627
    },
    MARS:{ 
        imagePath:'./assets/mars.png',
        gravity:7.84
    },
    JUPITER:{ 
        imagePath:'./assets/jupiter.png',
        gravity:22.932
    },
    SATURN:{ 
        imagePath:'./assets/saturn.png',
        gravity:10.388
    },
    URANUS:{ 
        imagePath:'./assets/uranus.png',
        gravity:9.016
    },
    NEPTUNE:{ 
        imagePath:'./assets/neptune.png',
        gravity:11.662
    },
    PLUTO:{ 
        imagePath:'./assets/pluto.png',
        gravity:0.588
    },
}

const selectOptions = () => {
    Object.keys(infoData).forEach(planet => {
        select.innerHTML += `<option value='${planet}' class="semibold text-neutral-400 ">${planet}</option>`
    });   
}

window.addEventListener('load', selectOptions)

const displayImages = () => {
    planetImage.src = infoData[select.value].imagePath
}

select.addEventListener('change', displayImages)

const calculateWeight = () => {
   const input = Number(massInput.value)
   const selected = select.value
   console.log(Number.isNaN(input))
    try {
        if (Number.isNaN(input)) throw new Error ('Input a valid number')
        if ( input == '') {
            planetTextDiv.classList.replace('hidden', 'flex')
            planetImageBox.classList.add('hidden')
            circleDiv.classList.add('hidden')
            planetText.innerHTML = 'Mass is required'
        }
        else if (!selected) {
            planetTextDiv.classList.replace('hidden', 'flex')
            planetImageBox.classList.add('hidden')
            circleDiv.classList.add('hidden')
            planetText.innerHTML = "You didn't choose a planet yet"
        }
        else if ((Number.isNaN(input) == false) && selected) {
            planetImageBox.classList.replace('hidden', 'flex')
            circleDiv.classList.replace('hidden', 'flex')
            planetTextDiv.classList.replace('hidden', 'flex')
            planetText.innerHTML = `The weight of the object on`
            planetName.innerHTML = `${selected}`
            const answer = (input * infoData[selected].gravity).toFixed(2)
            calcWeight.innerHTML = answer + ' N'
            
        } 
        
    } catch (error) {
        console.log(error)
        planetTextDiv.classList.replace('hidden', 'flex')
        planetImageBox.classList.add('hidden')
        circleDiv.classList.add('hidden')
        planetText.innerHTML = error.message
        planetName.innerHTML = ``

    }
}

weightBtn.addEventListener('click', calculateWeight)
