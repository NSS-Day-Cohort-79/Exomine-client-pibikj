import { emptyCart, getCart, purchaseMinerals } from "../utilities/TransientState.js"
import { renderMineralSelector } from "./FacilityMineralSelector.js"
import { renderColonyInventory } from "./ColonyInventory.js"
import { getFacility } from "../managers/FacilityManager.js"
import { getMineral } from "../managers/MineralManager.js"


const handlePurchaseMinerals = async (clickEvent) => {
    if (clickEvent.target.disabled === false && clickEvent.target.id === "purchase-button") {
        await purchaseMinerals()
        renderColonyInventory()
        renderSpaceCart()
        renderMineralSelector()
    }
    if (clickEvent.target.id === "empty-cart-button") {
        emptyCart()
        renderSpaceCart()
        renderMineralSelector()
    }
}


export const renderSpaceCart = async () => {
    document.addEventListener("click", handlePurchaseMinerals)
    const spaceCartEl = document.querySelector("#renderSpaceCart")
    let cart = getCart()

    let html = "<h2>Space Cart</h2>"
    
    for (const item of cart) {
        const facility = await getFacility(item.facilityId)
        const mineral = await getMineral(item.mineralId)
        html += `
            <div id="spaceCartItem">
                ${item.qty} tons of ${mineral.name} from ${facility.name}
            </div>
        `
    }

    if (cart.length) {
        html += `<button id="purchase-button">Purchase Mineral</button>`
    } else {
        html += `<button id="purchase-button" disabled>Purchase Mineral</button>`
    }

    html += `<br><button id="empty-cart-button">Empty Cart</button>`

    spaceCartEl.innerHTML = html
}
