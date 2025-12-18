// import governor selector
// import facility selector
// import render colony inventory
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
            *** render COLONY MINERALS ***
        </section>
    </article>
    
    <article id='MinSelCart' class='bottom'>
        <section class='selector-mineral left'>
            <div class='selector--min'>
                *** render MINERAL SELECTOR ***
            </div>
        </section>
        <section class='space-cart right'>
            <div class='cart'>
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