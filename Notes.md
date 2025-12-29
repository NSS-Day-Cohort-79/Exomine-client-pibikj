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
    - fetch list of facilityMinerals (expand Mineral and Facility)
- getFacilities
    - fetch list of all facilities
- getFacility(id)
    - fetch facility by id from facilities

## mineralManager
- getMinerals
    - fetch list of minerals

## PurchaseManager
- PurchaseCart(state)
    1. loop through state.cart and call PurchaseMineralManager(purchase)
- PurchaseMineralsManager(purchase)
    - IF check - if mineral does not exist in the api database for colonyMineral stock
        - POST transientState to colony
        - PUT update facilityMineral stock
    - ELSE
        - PUT transientState
            1. update facilityMineral stock
            2. update colonyMineral stock
    
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
    - Colony ID
    - Facility ID
    - Cart []
        - mineral id
        - Facility id
        - qty
- setColonyId()
- getColonyId()
- setFacilityId()
- getFacilityId()
- addToCart(mineralId)
    1. take mineralId and facilityId and update cart with qty
- emptyCart()
    1. set cart to empty array
- getCart()
    1. return state.cart
- purchaseMinerals()
    1. pass transientState to PurchaseMineralsManager(transientState) from PurchaseManager
    1. setMineralId to 0
    
### GovernorSelector
create a selection dropdown that lists active governors
1. add change event listener 
    1. invoke setColonyId(id) from transientState
    1. invoke renderColonyInventory() from ColonyInventory
    1. call enableFacilitySelector() from FacilitySelector
1. call getGovernors governorManager
1. build html for dropdown
    1. include colony ID in meta-data
1. return html 

### ColonyInventory
create display of colony name and inventory
- renderColonyInventory()
    1. get colony inventory element
    1. call getColonyId from transientState
    1. if ColonyId is 0
        1. html is just header
    1. if ColonyId is > 0
        1. call getColonyMineral(colonyId) from colonyManager
    1. build html for inventory display
    1. update innerhtml of the element

### FacilitySelector
create a selection dropdown that lists the mining facilities
- add "change" event listener 
    1. call setFacilityId from transientState
    1. call renderMineralSelector() from FacilityMineralSelector
- FacilitySelector() 
    1. call getFacilities() from FacilityManager to get list of facilities
    2. build html for the dropdown selection of facilities (disabled)
d    3. return appended html
- enableFacilitySelector()
    1. get FacilitySelector element from DOM
    1. remove disabled attribute from element

### FacilityMineralSelector
create radio input that lists the minerals in a specific mining facility
- renderMineralSelector()
    1. get mineral list element by id
    1. call getFacilityId() from transientState
    1. if facilityId is 0
        1. html is just header
    1. if facilityId is > 0
        1. call getCart() from transientState
        1. filter cart for entries matching facilityId
        1. call getFacilityMineral(facilityId) from facilityManager
        1. build html for radio inputs of minerals
            1. if 0, no radio button
            1. if space cart qty >= mineral qty
                1. disable radio button
            1. add data-facilityActive
    1. set innerhtml of element
- add "change" event listener
    1. check if data-facilityActive is true
        1. call addToCart(id) from transientState
        1. call renderSpaceCart() from SpaceCart

### SpaceCart
create display of current cart and purchase/empty buttons
- renderSpaceCart()
    1. get SpaceCart element 
    1. call getCart() from TransientState
    1. if cart not empty
        1. loop cart items and build html for cart display
        1. build button html
    1. if cart is empty
        1. build disabled button
    1. build "Empty Cart" button
    1. update innerhtml of the element
- add event "click" event listener
    1. if (target button is not disabled)
        1. call purchaseCart() from transientState
        1. call renderMineralSelector() from FacilityMineralSelector
        1. invoke renderColonyInventory() from ColonyInventory
        1. invoke renderSpaceCart() 
    1. if target is empty button
        1. call emptyCart() from TransientState
        1. call renderSpaceCart()


### Event Listeners
trigger a change or click event when selecting options to store in the transient state and to purchase minerals

## Modules
### Managers
- GovernorManager.js
- ColonyManager.js
- FacilityManager.js
- PurchaseManager.js

### Selectors
- GovernorSelector.js
- FacilitySelector.js
- FacilityMineralSelector.js

### Components
- main.js
- TransientState.js
- ColonyInventory.js
- SpaceCart.js

