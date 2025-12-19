import { getFacilityMinerals } from "../managers/FacilityManager.js"
import { getFacilityId, setFacilityId, setMineralId } from "../utilities/TransientState.js"
import { renderSpaceCart } from "./SpaceCart.js"


const handleFacilityMineralOption = (changeEvent) => {
    const itemChanged = changeEvent.target
    if (itemChanged.dataset.facilityactive === "true") {
        setMineralId(parseInt(itemChanged.dataset.mineralid))
        renderSpaceCart(itemChanged.dataset.mineralname, itemChanged.dataset.facilityname)
    }
}


export const renderMineralSelector = async () => {
    document.addEventListener("change", handleFacilityMineralOption)
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
                    return `<input type="radio" name="facilitymineral" data-mineralid="${facilityMineral.mineralId}" data-facilityActive="true" data-facilityName="${facilityMineral.facility.name}" data-mineralName="${facilityMineral.mineral.name}" id="${facilityMineral.id}" /> ${facilityMineral.mineral.name}`
                }
            }
        )
        html += facilityMineralArray.join("")
    }
    mineralListId.innerHTML = html
}