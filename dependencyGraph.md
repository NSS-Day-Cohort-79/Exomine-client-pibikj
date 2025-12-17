```mermaid

graph TD;

    Main-->GovernorSelector
    Main-->ColonyInventory
    Main-->FacilitySelector
    Main-->FacilityMineralSelector
    Main-->SpaceCart
    GovernorSelector-->GovernorManager
    GovernorSelector-->TransientState
    GovernorSelector-->ColonyInventory
    GovernorSelector-->FacilitySelector
    ColonyInventory-->ColonyManager
    ColonyInventory-->TransientState
    FacilitySelector-->FacilityManager
    FacilitySelector-->TransientState
    FacilitySelector-->FacilityMineralSelector
    FacilityMineralSelector-->FacilityManager
    FacilityMineralSelector-->TransientState
    FacilityMineralSelector-->SpaceCart
    SpaceCart-->TransientState
    SpaceCart-->FacilityMineralSelector
    SpaceCart-->ColonyInventory
    TransientState-->PurchaseManager
    GovernorManager-->Database
    ColonyManager-->Database
    FacilityManager-->Database
    MineralManager-->Database
    PurchaseManager-->Database
    
```