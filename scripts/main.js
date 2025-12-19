// import governor selector
import { FacilitySelector, enableFacilitySelector } from "./components/FacilitySelector.js"
import { renderColonyInventory } from "./components/ColonyInventory.js"
// import render facility mineral selector
// import render space cart

const mainContainer = document.querySelector("#container")

const ExomineHTML = async () => {
    // const governorSelectorHTML = GovernorSelector()
    const facilitySelectorHTML = await FacilitySelector()

    return `
    <header><h1>Solar System Mining Marketplace</h1></header>
    
    <article id='GovFacSelector' class='selector-drop-down'>
        <section class='selector-govfac left'>
            <div class='selector--gov div-govfac'>
                *** GOVERNOR SELECTOR ***
            </div>
            <div class='selector--fac div-govfac'>
                ${facilitySelectorHTML}
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
                *** render MINERAL SELECTOR ***
            </div>
        </section>
        <section class='space-cart right'>
            <div id='renderSpaceCart' class='cart'>
                *** render SPACE CART ***
            </div>
        </section>
    </article>
    `
}

const renderMain = async async () => {
    mainContainer.innerHTML = await await ExomineHTML()
    renderColonyInventory()
    enableFacilitySelector()
}

renderMain()

// renderMineralSelector()
// renderSpaceCart()


/* -------------------------------------- */

