export const getColonies = async () => {
    const response = await fetch("http://localhost:8088/colonies")
    const colonies = await response.json()
    return colonies
}

export const getColonyMineral = async (colonyId) => {
    const response = await fetch(`http://localhost:8088/colonyMinerals?_expand=mineral&colonyId=${colonyId}`)
    const colonyMinerals = await response.json()

    return colonyMinerals
}