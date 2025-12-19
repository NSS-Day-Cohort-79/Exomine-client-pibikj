// import governor selector
// import facility selector
// import render colony inventory
// import render facility mineral selector
// import render space cart

// here is the test to check if code runs, run it in serve and check console for an array
import { setColonyId, setMineralId, setFacilityId, purchaseMinerals, getColonyId, getMineralId, getFacilityId } from "./utilities/TransientState.js"
const test = async () => {
setColonyId(1)
console.log(getColonyId())
setMineralId(1)
console.log(getMineralId())
setFacilityId(1)
console.log(getFacilityId())
await purchaseMinerals()
console.log(getMineralId())
}
test()

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
                *** render COLONY MINERALS ***
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

const renderMain = () => {
    mainContainer.innerHTML = ExomineHTML()
}

renderMain()

// renderColonyInventory()
// renderMineralSelector()
// renderSpaceCart()
