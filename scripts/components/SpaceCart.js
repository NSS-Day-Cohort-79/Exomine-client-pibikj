import { purchaseMinerals } from "../utilities/TransientState.js"
import { renderMineralSelector } from "./FacilityMineralSelector.js"
// import { renderColonyInventory } from "./ColonyInventory.js"


const handlePurchaseMinerals = (clickEvent) => {
    if (clickEvent.target === "enable") {
        purchaseMinerals()
        renderMineralSelector()
       // renderColonyInventory()
        renderSpaceCart()
    }
}


export const renderSpaceCart = (mineralName, facilityName) => {
    document.addEventListener("click", handlePurchaseMinerals)
    const spaceCart = document.querySelector("#renderSpaceCart")

    let html = ""

    if (mineralName !== null) {
        html += `<div id="spaceCartItem">
                <p>1 ton of ${mineralName} from ${facilityName}</p>
        </div>
        <button id="purchase-button" enable>Purchase Mineral</button>`
    } else if (mineralName === null) {
        html += `<button id="purchase-button" disable>Purchase Mineral</button>`
    }

    spaceCart.innerHTML = html
}