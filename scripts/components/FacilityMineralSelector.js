import { getFacilityMinerals } from "../managers/FacilityManager.js"
import { getFacilityId, setFacilityId } from "../utilities/TransientState.js"
import { renderSpaceCart } from "./SpaceCart.js"


const handleFacilityMineralOption = (changeEvent) => {
    const itemChanged = changeEvent.target
    if (itemChanged.dataset.facilityActive === "true") {
        setMineralId(itemChanged.mineral.id)
        renderSpaceCart(itemChanged.mineral.name, itemChanged.facility.name)
    }
}

document.addEventListener("change", handleFacilityMineralOption)

export const renderMineralSelector = async () => {
    const mineralListId = document.querySelector("#renderFacilityMineralSelector")
    setFacilityId(1)
    const facilityId = getFacilityId()
    let html = "<h2>Facility Minerals</h2>"

    if (facilityId > 0) {
        const facilityMinerals = await getFacilityMinerals(facilityId)
        const facilityMineralArray = facilityMinerals.map(
            (facilityMineral) => {
                if (facilityMineral.stock === 0) {
                    return ""
                } else {
                    return `<input type="radio" name="facilityMineral" data-facilityActive="true" id="${facilityMineral.id}" /> ${facilityMineral.mineral.name}`
                }
            }
        )
        html += facilityMineralArray.join("")
    }
    mineralListId.innerHTML = html
}