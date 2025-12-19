import { getGovernors } from "../managers/GovernorManager.js"
import { setColonyId } from "../utilities/TransientState.js"
// import { renderMineralSelector } from "../components/FacilityMineralSelector.js"

// add "change" event listener
document.addEventListener("change", (event) => {
    if (event.target.id === "governor-selector") {
        const selectedId = parseInt(event.target.value)
        setColonyId(selectedId)
        // renderMineralSelector()
    }
})

// create a selection dropdown that lists the active Governors
export const GovernorSelector = async () => {
    // call getGovernors() from GovernorManager to get active governors
    const governors = await getGovernors()
    // build html for the dropdown selection of governors 
    let governorsHTML = `
        <label for="governors">Choose a governor</label>
        <select name="governors" id="governor-selector" class="governor-list">
            <option value="0" selected disabled hidden>Choose a governor</option>
    `

    governorsHTML += governors.map((governor) => {
        return `<option value="${governor.colonyId}">${governor.name}</option>`
    }).join("")

    governorsHTML += "</select>"

    return governorsHTML
}
