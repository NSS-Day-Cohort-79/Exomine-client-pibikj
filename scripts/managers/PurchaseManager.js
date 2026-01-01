export const PurchaseCart = async (state) => {
    
}

export const PurchaseMineralsManager = async (state) => {
    
    // get colonyMinerals for colony ID and mineral ID
    const colonyResponse = await fetch(`http://localhost:8088/colonyMinerals?colonyId=${state.colonyId}&mineralId=${state.mineralId}`)
    const colonyArray = await colonyResponse.json()

    // get facilityMinerals for facility ID and mineral ID
    const facilityResponse = await fetch(`http://localhost:8088/facilityMinerals?facilityId=${state.facilityId}&mineralId=${state.mineralId}`)
    const facilityArray = await facilityResponse.json()

    // IF check - if mineral does not exist in the api database for colonyMineral 
    if (colonyArray.length === 0) {
        // build new entry
        const newColonyMineral = {
            colonyId: state.colonyId,
            mineralId: state.mineralId,
            stock: 1
        }
        // POST entry to colonyMinerals
        const newColonyResponse = await fetch("http://localhost:8088/colonyMinerals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newColonyMineral)
        })
    } else if (colonyArray.length === 1) { // mineral does exist for colony
        // build updated entry
        const updatedColonyMineral = {
            colonyId: state.colonyId,
            mineralId: state.mineralId,
            stock: colonyArray[0].stock + 1,
        }
        // PUT entry to colonyMinerals
        const updateColonyResponse = await fetch(`http://localhost:8088/colonyMinerals/${colonyArray[0].id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedColonyMineral)
        })
    } else {
        window.alert(`database error: multiple entries for mineral id ${state.mineralId} and colony id ${state.colonyId}`)
    }

    // build updated facility mineral

    const updatedFacilityMineral = {
        facilityId: state.facilityId,
        mineralId: state.mineralId,
        stock: facilityArray[0].stock - 1,
    }

    // PUT update facilityMineral stock
    const updateFacilityResponse = await fetch(`http://localhost:8088/facilityMinerals/${facilityArray[0].id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedFacilityMineral)
    })
}
