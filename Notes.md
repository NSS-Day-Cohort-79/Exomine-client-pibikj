# Notes

## Managers

### governorManager
- getGovernors
    - fetch list of active governors
    - return data

### colonyManager
- getColonies
    - fetch list of colonies
- getColonyMineral(colonyId)
    - fetch list of colonyMinerals (expand Mineral)

## facilityManager
- getFacilityMineral(facilityId)
    - fetch list of facilityMinerals (expand Mineral)
- getFacilities
    - fetch list of all facilities
- getFacility(id)
    - fetch facility by id from facilities

## mineralManager
- getMinerals
    - fetch list of minerals
    
## Components

### main
- render
    - get container ID
    - call GovernorSelector
    - call FacilitySelector
    - set innerhtml of container with wireframe
    - call renderColonyInventory()
    - call renderMineralSelector()
    - call renderSpaceCart()
    

### transientState
- needs to track
    - Mineral ID
    - Colony ID
    - Facility ID
- setColonyId()
- getColonyId()
- setFacilityId()
- getFacilityId()
- setMineralId()
- getMineralId()
- purchaseMinerals()
    
### GovernorSelector
create a selection dropdown that lists active governors
1. add change event listener 
    1. invoke setColonyId(id) from transientState
    1. invoke renderColonyInventory() from ColonyInventory
1. call getGovernors governorManager
1. build html for dropdown
    1. include colony ID in meta-data
1. return html 

### ColonyInventory
create display of colony name and inventory
- renderColonyInventory()
    1. get colony inventory element
    1. call getColonyInventory() from colonyManager
    1. build html for inventory display
    1. update innerhtml of the element

### FacilitySelector
create a selection dropdown that lists the mining facilities
- add "change" event listener 
    1. call setFacilityId from transientState
    1. call renderMineralSelector() from FacilityMineralSelector
- FacilitySelector() 
    1. call getFacilities() from FacilityManager to get list of facilities
    2. build html for the dropdown selection of facilities
    3. check transient state if colonyId > 0
    3. return appended html

### FacilityMineralSelector
create radio input that lists the minerals in a specific mining facility
- renderMineralSelector()
    1. get mineral list element by id
    1. call getFacilityMineral(facilityId) from facilityManager
    1. build html for radio inputs of minerals (if 0, no radio button)
    1. set innerhtml of element
- add "change" event listener
    1. call setMineralId from transientState
    2. call renderSpaceCart from SpaceCart

### SpaceCart
create display of colony name and inventory
- renderSpaceCart(mineralName, facilityName)
    1. get SpaceCart element 
    1. build html for cart display
    1. update innerhtml of the element

### Event Listeners
trigger a change or click event when selecting options to store in the transient state and to purchase minerals

