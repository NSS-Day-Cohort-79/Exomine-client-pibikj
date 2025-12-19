import { getColonies, getColonyMineral } from "../managers/ColonyManager.js"
import { getColonyId, setColonyId } from "../utilities/TransientState.js"

export const renderColonyInventory = async () => {
    const colonyInventoryContainer = document.querySelector("#renderColonyMinerals")
    const colonyId = getColonyId()

    let colonyInventoryHTML = ""
    
    if (colonyId > 0) {
        const colonyMinerals = await getColonyMineral(colonyId)
        const colonies = await getColonies()
        const colonyName = colonies.find((colony) => (colonyId === colony.id)).name

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

    } else {
        colonyInventoryHTML += `<h2>Colony Minerals</h2>`
    }

    colonyInventoryContainer.innerHTML = colonyInventoryHTML
}