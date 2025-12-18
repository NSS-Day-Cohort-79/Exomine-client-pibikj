const mainContainer = document.querySelector("#container")

const ExomineHTML = () => {

    return `
    <header><h1>Solar System Mining MarketPlace</h1></header>
    
    <article id='GovFacSelector' class='selector-drop-down left'>
        ***GOVERNOR SELECTOR***
        ***FACILITY SELECTOR***
    </article>

    <article id='ColonyInventory' class='right'>
        ***COLONY MINERALS***
    </article>
    
    <article id='MinSelCart' class='mineral-selector space-cart bottom'>
        ***MINERAL SELECTOR***
        ***SPACE CART***
    </article>

    `
}


const render = () => {
    mainContainer.innerHTML = ExomineHTML()
}

render()