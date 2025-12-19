import { purchaseMinerals } from "../utilities/TransientState.js"
import { renderMineralSelector } from "./FacilityMineralSelector.js"
import { renderColonyInventory } from "./ColonyInventory.js"


const handlePurchaseMinerals = async (clickEvent) => {
    if (clickEvent.target.disabled === false && clickEvent.target.id === "purchase-button") {
        await purchaseMinerals()
        renderColonyInventory()
        renderSpaceCart()
        renderMineralSelector()
    }
}


export const renderSpaceCart = (mineralName, facilityName) => {
    document.addEventListener("click", handlePurchaseMinerals)
    const spaceCart = document.querySelector("#renderSpaceCart")

    let html = "<h2>Space Cart</h2>"

    if (mineralName !== undefined) {
        html += `<div id="spaceCartItem">
                <p>1 ton of ${mineralName} from ${facilityName}</p>
        </div>
        <button id="purchase-button">Purchase Mineral</button>`
    } else if (mineralName === undefined) {
        html += `<button id="purchase-button" disabled>Purchase Mineral</button>`
    }

    spaceCart.innerHTML = html
}
