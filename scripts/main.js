// import governor selector
// import facility selector
import { renderMineralSelector } from "./components/FacilityMineralSelector.js"
import { renderSpaceCart } from "./components/SpaceCart.js"
// import render facility mineral selector
// import render space cart

const mainContainer = document.querySelector("#container")

const ExomineHTML = () => {
    // const governorSelectorHTML = GovernorSelector()
    // const facilitySelectorHTML = FacilitySelector()

    return `
    <header><h1>Solar System Mining Marketplace</h1></header>
    
    <article id='GovFacSelector' class='selector-drop-down'>
        <section class='selector-govfac left'>
            <div class='selector--gov div-govfac'>
                *** GOVERNOR SELECTOR ***
            </div>
            <div class='selector--fac div-govfac'>
                *** FACILITY SELECTOR ***
            </div>
        </section>
        <section class='inv-colony right'>
            <div id='renderColonyMinerals'>
            </div>
        </section>
    </article>
    
    <article id='MinSelCart' class='bottom'>
        <section class='selector-mineral left'>
            <div id='renderFacilityMineralSelector' class='selector--min'>
                
            </div>
        </section>
        <section class='space-cart right'>
            <div id='renderSpaceCart' class='cart'>
            <h2>Space Cart</h2>
                *** render SPACE CART ***
            </div>
        </section>
    </article>
    `
}

const renderMain = async () => {
    mainContainer.innerHTML = await ExomineHTML()
    renderMineralSelector()
    renderSpaceCart()
}

renderMain()

// renderColonyInventory()
// renderSpaceCart()


/* -------------------------------------- */

