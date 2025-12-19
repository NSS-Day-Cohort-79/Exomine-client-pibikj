import { purchaseMineralsManager } from "../managers/PurchaseManager.js"

const state = {
    mineralId: 0,
    colonyId: 0,
    facilityId: 0
}

export const setColonyId = (id) => state.colonyId = id
export const getColonyId = () => state.colonyId

export const setFacilityId = (id) => state.facilityId = id
export const getFacilityId = () => state.facilityId

export const setMineralId = (id) => state.mineralId = id
export const getMineralId = () => state.mineralId

export const purchaseMinerals = async () => {
    await purchaseMineralsManager(structuredClone(state))
    state.mineralId = 0
}
