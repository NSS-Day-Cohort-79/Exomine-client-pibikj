export const GovernorManager = async () => {
    const response = await fetch("http://localhost:8088/governors?isActive=true")
    const governors = await response.json()

    return governors
}