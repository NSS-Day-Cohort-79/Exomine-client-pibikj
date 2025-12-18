export const getFacilities = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()
    return facilities
}

export const getFacilityMinerals = async (facilityId) => {
    const response = await fetch(`http://localhost:8088/facilityMinerals?_expand=facility&_expand=mineral&facilityId=${facilityId}`)
    const facilityMinerals = await response.json()

    return facilityMinerals
}

export const getFacility = async (id) => {
    const response = await fetch(`http://localhost:8088/facilities/${id}`)
    const facility = await response.json()

    return facility
}