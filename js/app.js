const info = document.querySelector('.info')

const input = document.querySelector('.input--search')

const select = document.querySelector('#option')

const range = document.querySelector('#prices')

const change = document.querySelector('#changePrice')

const inpCheckbox = document.querySelector('#checkbox')

const clearbtn = document.querySelector('.clearBtn')

const modal = document.querySelector('.modal')

const modalContent = document.querySelector('.modalContent')

const closes = document.querySelector('.closes')

let data = []

const displayElemets = async() =>{
    let response = await fetch('https://course-api.com/react-store-products')
    data = await response.json()
    onlineMagazine(data)
}

/* Search */

input.addEventListener('keyup', (event) =>{
    const filterData = data.filter( (elem) =>{
        return elem.name.includes(event.target.value)
    } )
    
    onlineMagazine(filterData)

} )

/* Modal */

// modal.addEventListener('click', showmod)

// function showmod(){
//     modal.classList.toggle('block')
// }

const getId = (items) =>{
    console.log(items);
    modal.classList.add('block')
}








/* Map */

const onlineMagazine = (sofa) =>{

    let html = ``

    sofa.map( (stul) =>{

        html +=`
            <div class = "col-lg-4  ">
                <div class = "img--div">
                    <img onclick ="getId('${stul.id}')" class ="img--info" src="${stul.image}" alt="">
                </div>
                <div class = "information">
                    <p class = "name"> ${stul.name} </p>
                    <p> ${stul.price}$ </p>
                </div>
            </div>
        `

    } )

    info.innerHTML = html
   
}


/* Filter */

function filterCategory(cat) {
    const chair = data.filter( (searches) => {
        return searches.category === cat
    })
    onlineMagazine(chair)

    
}

const filterCategoryAll = (alls) =>{
    if (alls === "all") {
        displayElemets()   
    } else  {
        const chair = data.filter( (searches) => {
        return searches.category === cat
    })
        info.innerHTML = chair
        onlineMagazine(chair)
    }
}

const displayOptions = (opt) =>{
    const option = data.filter( (el) =>{
        return el.company === select.value
    } )

    info.innerHTML = select
    onlineMagazine(option)
}

const inputRange = () =>{
    const priceRange = data.filter((pr) =>{
        return pr.price <= range.value
    } )
    console.log(priceRange.value);
    onlineMagazine(priceRange)
    // info.innerHTML = '$' + range.value
}

const inputRadio = () =>{
    const radioInp = data.filter((rad) =>{
        return rad.shipping === true
    } )
    onlineMagazine(radioInp)
}

let cheked = true

const inputCheck = ()=>{
    cheked = !cheked

    const inpship = data.filter( (inputship) =>{
        if(cheked){
            return inputship.shipping == true
        } else{
            return inputship
        }
    } )
    onlineMagazine(inpship)
}








displayElemets()