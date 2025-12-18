export const getColonies = async () => {
    const response = await fetch("http://localhost:8088/colonies")
    const colonies = await response.json()
    return colonies
}

export const getColonyMineral = async (colonyId) => {
    const response = await fetch("http://localhost:8088/colonyMinerals?_expand=mineral")
    const colonyMinerals = await response.json()
    for (const colony of colonyMinerals) {
        if (colony.colonyId === colonyId) {
            return colony
        }
    }
}