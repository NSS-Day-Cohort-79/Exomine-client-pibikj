import { PurchaseCart } from "../managers/PurchaseManager.js"

const state = {
    colonyId: 0,
    facilityId: 0,
    cart: [] // facilityId, mineralId, qty
}

export const setColonyId = (id) => state.colonyId = id
export const getColonyId = () => state.colonyId

export const setFacilityId = (id) => state.facilityId = id
export const getFacilityId = () => state.facilityId

export const addToCart = (mineralId) => {
    //check if item already in cart
    let foundItem = state.cart.find(item => item.mineralId == mineralId && item.facilityId == state.facilityId)
    if (foundItem) {
        foundItem.qty++
    } else {
        state.cart.push({
            facilityId: state.facilityId,
            mineralId: mineralId,
            qty: 1
        })
    }
}
export const emptyCart = () => state.cart = []

export const purchaseMinerals = async () => {
    await PurchaseCart(structuredClone(state))
    emptyCart()
}
