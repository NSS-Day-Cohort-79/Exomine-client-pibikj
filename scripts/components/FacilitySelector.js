import { getFacilities } from "../managers/FacilityManager.js"
import { setFacilityId } from "../utilities/TransientState.js"
// import { renderMineralSelector } from "../components/FacilityMineralSelector.js"

// add "change" event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "facility-selector") {
        const selectedId = parseInt(event.target.value)
        setFacilityId(selectedId)
        // renderMineralSelector()
    }
})

// create a selection dropdown that lists the mining facilities
export const FacilitySelector = async () => {
    // call getFacilities() from FacilityManager to get list of facilities
    const facilities = await getFacilities()
    // build html for the dropdown selection of facilities (disabled) d 3. return appended html
    let facilitiesHTML = `
        <label for="facilities">Choose a facility</label>
        <select name="facilities" id="facility-selector" class="facility-list" disabled>
            <option value="0" selected disabled hidden>Choose a facility</option>
    `

    facilitiesHTML += facilities.map((facility) => {
        return `<option value="${facility.id}">${facility.name}</option>`
    }).join("")

    facilitiesHTML += "</select>"

    return facilitiesHTML
}

export const enableFacilitySelector = () => {
    // get FacilitySelector element from DOM
    const selectorEl = document.querySelector("#facility-selector")
    // remove disabled attribute from element
    selectorEl.disabled = false
}
