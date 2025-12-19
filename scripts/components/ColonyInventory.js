import { getColonies, getColonyMineral } from "../managers/ColonyManager.js"
import { getColonyId } from "../utilities/TransientState.js"

// render colony inventory to DOM
export const renderColonyInventory = async () => {
    // select the colony inventory element
    const colonyInventoryContainer = document.querySelector("#renderColonyMinerals")
    // get colonyId from transient state
    const colonyId = getColonyId()
    // define colony inventory html string
    let colonyInventoryHTML = ""

    
    // if colonyId is greater than 0 (transient state has been set by the GovernorSelector)
    if (colonyId > 0) {
        // get list array of colony minerals by the colony id
        const colonyMinerals = await getColonyMineral(colonyId)

        // get colony objects, then find the colony object by id, get name of colony
        const colonies = await getColonies()
        const colonyName = colonies.find((colony) => (colonyId === colony.id)).name

        // if the colonyMinerals array is empty (the colony has not purchased any minerals) 
        //      - create header with colony name and empty inventory
        // else (colony has minerals in their inventory)
        //      - create header with colony name and list of inventory items
        if (colonyMinerals.length == 0) {
            colonyInventoryHTML += `<h2 class="colony-mineral-header colony-min-empty">${colonyName} Minerals</h2>`
        } else {
            const colonyMineralsMap = colonyMinerals.map((colonyMineral) => {
                return `<li data-stock="${colonyMineral.stock}" data-mineral="${colonyMineral.mineral.name}" data-colonyname="${colonyMineral.colony.name}">${colonyMineral.stock} tons of ${colonyMineral.mineral.name}</li>`
            })

            colonyInventoryHTML += `
                <h2 class="colony-mineral-header">${colonyName} Minerals</h2>
                <ul class="colony-minerals-list">
            `
            colonyInventoryHTML += colonyMineralsMap.join("")
            colonyInventoryHTML += `</ul>`
        }
    // if no governor is selected (transient state colonyId is 0)
    } else {
        colonyInventoryHTML += `<h2>Colony Minerals</h2>`
    }
    // set inner HTML of colony inventory container
    colonyInventoryContainer.innerHTML = colonyInventoryHTML
}