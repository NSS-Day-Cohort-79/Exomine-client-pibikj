import { getFacilityMinerals } from "../managers/FacilityManager.js"
import { getFacilityId, addToCart, getCart } from "../utilities/TransientState.js"
import { renderSpaceCart } from "./SpaceCart.js"


const handleFacilityMineralOption = (event) => {
    const itemChanged = event.target
    if (itemChanged.className === "mineral-button" && !itemChanged.disabled) {
        addToCart(parseInt(itemChanged.dataset.mineralid))
        renderSpaceCart()
        renderMineralSelector()
    }
}


export const renderMineralSelector = async () => {
    document.addEventListener("click", handleFacilityMineralOption)
    const mineralListId = document.querySelector("#renderFacilityMineralSelector")
    const facilityId = getFacilityId()
    let html = "<h2>Facility Minerals</h2>"

    if (facilityId > 0) {
        const cart = getCart()
        const facilityCart = cart.filter((item) => item.facilityId === facilityId)
        const facilityMinerals = await getFacilityMinerals(facilityId)
        const facilityMineralArray = facilityMinerals.map(
            (facilityMineral) => {
                if (facilityMineral.stock === 0) {
                    return ""
                } else {
                    let disabled = ""
                    let cartItem = facilityCart.find((item) => item.mineralId === facilityMineral.mineralId)
                    if (cartItem) {
                        if (cartItem.qty >= facilityMineral.stock) {
                            disabled = "disabled"
                        }
                    }
                    if (!facilityMineral.facility.isActive) {disabled = "disabled"}
                    return `
                        <button ${disabled}
                            class="mineral-button"
                            id="add-mineral-${facilityMineral.id}" 
                            data-mineralid="${facilityMineral.mineralId}">
                                add to cart
                        </button>
                        ${facilityMineral.stock} tons of ${facilityMineral.mineral.name}
                        <br>
                    `
                }
            }
        )
        html += facilityMineralArray.join("")
    }
    mineralListId.innerHTML = html
}
