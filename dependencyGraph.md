```mermaid

graph TD;

    Main-->GovernorSelector
    Main-->ColonyInventory
    Main-->FacilitySelector
    Main-->FacilityMineralSelector
    Main-->SpaceCart
    Main-->PurchaseButton
    GovernorSelector-->GovernorManager
    GovernorSelector-->TransientState
    ColonyInventory-->ColonyManager
    ColonyInventory-->TransientState
    FacilitySelector-->FacilityManager
    FacilitySelector-->TransientState
    FacilityMineralSelector-->FacilityManager
    FacilityMineralSelector-->MineralManager
    FacilityMineralSelector-->TransientState
    SpaceCart-->TransientState
    PurchaseButton-->PurchaseManager
    PurchaseManager-->TransientState
    GovernorManager-->Database
    ColonyManager-->Database
    FacilityManager-->Database
    MineralManager-->Database
    PurchaseManager-->Database
    

```