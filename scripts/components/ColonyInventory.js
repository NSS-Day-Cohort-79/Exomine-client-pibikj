import { getColonyMineral } from "../managers/ColonyManager.js"
import { getColonyId } from "../utilities/TransientState.js"

export const renderColonyInventory = async () => {
    const colonyInventoryContainer = document.querySelector("#renderColonyMinerals")

    const colonyId = getColonyId()

    let colonyInventoryHTML = ""
    
    if (colonyId > 0) {
        const colonyMinerals = await getColonyMineral(colonyId)

        let colonyName = ""

        const colonyMineralsMap = colonyMinerals.map((colonyMineral) => {
            colonyName = colonyMineral.colony.name
            return `<li>${colonyMineral.stock} tons of ${colonyMineral.mineral.name}</li>`
        })

        colonyInventoryHTML += `
            <h2>${colonyName} Minerals</h2>
            <ul>
        `
        colonyInventoryHTML += colonyMineralsMap.join("")
        colonyInventoryHTML += `</ul>`

    } else {
        colonyInventoryHTML += `<h2>Colony Minerals</h2>`
    }

    colonyInventoryContainer.innerHTML = colonyInventoryHTML
}