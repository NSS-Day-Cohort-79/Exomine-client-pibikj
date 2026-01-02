# Event Examples & Inspiration

This document provides concrete examples to help you design your random events system. **Use these as inspiration, not as a checklist**—your team should create events that fit your vision for the game.

## 🎲 Sample Event Templates

### Resource Events

#### Example 1: "Rich Vein Discovered"
**Trigger**: Random chance after any transaction (5% probability)  
**Effects**:
- Selected mining facility's mineral inventory increases by 50%
- That facility's mineral prices decrease by 25% for 60 seconds
- Facility's active status set to true if it was inactive

**Narrative**: "Miners at [Facility Name] have struck a rich vein of [Mineral Type]! Prices have dropped due to surplus supply."

**Interactive Element**: Players who see this event can rush to purchase from this facility before the 60-second discount ends. Creates a "buy now!" moment.

---

#### Example 2: "Supply Shortage"
**Trigger**: After 10 transactions have occurred  
**Effects**:
- Random mineral type becomes unavailable at all facilities for 90 seconds
- Remaining minerals increase in price by 40%
- Colony "needs" for that mineral increase

**Narrative**: "Galactic demand for [Mineral Type] has exceeded supply. All shipments have been halted pending resupply."

**Interactive Element**: Players must decide—do they buy substitute minerals at inflated prices, or do they wait for the shortage to end and risk their colony going without?

---

### Threat Events

#### Example 3: "Pirate Raid"
**Trigger**: Every 90 seconds, 30% chance  
**Effects**:
- Random colony loses 25% of its mineral inventory (if tracking inventories)
- Affected facility becomes temporarily inactive for 60 seconds
- Governor from that colony gets a notification

**Narrative**: "Space pirates have raided [Facility Name]! Operations suspended while security teams respond."

**Interactive Element**: Players can purchase "Security Upgrades" (new action button) that cost 100 credits but reduce pirate raid probability by 50% for their facilities. Do you invest in protection or take the risk?

---

#### Example 4: "Solar Storm Warning"
**Trigger**: Random, 15% chance per transaction  
**Effects**:
- Random facility becomes inactive for 45 seconds
- "Storm forecast" visible 30 seconds before it hits
- All active transactions to that facility are delayed

**Narrative**: "Solar flare activity detected near [Facility Name]. Operations will be suspended in 30 seconds for crew safety."

**Interactive Element**: Players get a 30-second warning. They can either complete a purchase now (before the storm), or wait and hope another facility has better prices. Creates urgency and decision-making.

---

### Population Events

#### Example 5: "Immigration Wave"
**Trigger**: When colony population falls below certain threshold  
**Effects**:
- Colony population increases by random amount (50-200)
- Colony's mineral needs increase by 20%
- Governor's budget increases by 50 credits (more taxes collected)

**Narrative**: "New settlers have arrived at [Colony Name]! Population: +[Amount]. Infrastructure demands rising."

**Interactive Element**: Track colony needs in UI. If needs aren't met, colony happiness decreases. Players must balance spending credits on needs vs. saving for emergencies.

---

#### Example 6: "Workforce Strike"
**Trigger**: If facility is used for 5+ consecutive purchases  
**Effects**:
- That facility becomes inactive for 120 seconds
- Facility's mineral prices increase by 50% when reopened
- Event log shows strike demand (better conditions)

**Narrative**: "Workers at [Facility Name] are on strike! Operations suspended until management addresses concerns."

**Interactive Element**: Players can "Negotiate with Workers" (spend 75 credits) to reduce strike duration to 30 seconds. Is it worth paying to end the strike early?

---

### Economic Events

#### Example 7: "Market Boom"
**Trigger**: After 15 successful transactions with positive colony happiness  
**Effects**:
- All mineral prices decrease by 30%
- All facilities become active
- Transaction costs reduced by 50%
- Lasts for 120 seconds

**Narrative**: "The galactic economy is booming! It's a buyer's market as prices plummet across the solar system."

**Interactive Element**: This is a reward for good play. Players who've been managing their colonies well get a bonus shopping spree. Buy as much as you can during the boom!

---

#### Example 8: "Market Crash"
**Trigger**: If player budget drops below 25 credits  
**Effects**:
- All mineral prices increase by 50%
- One random facility closes permanently
- Player's budget regenerates slower (if using budget regeneration)

**Narrative**: "Economic downturn strikes the solar system. [Facility Name] has declared bankruptcy and closed its doors."

**Interactive Element**: Creates a risk/reward dynamic—if you spend too aggressively and run low on credits, you trigger bad events. Players must manage spending carefully.

---

### Special Events

#### Example 9: "Emergency Supply Request"
**Trigger**: After 3 minutes of gameplay  
**Effects**:
- A specific colony desperately needs a specific mineral type
- If player delivers it within 60 seconds, they receive 200 bonus credits
- If they don't, colony happiness decreases

**Narrative**: "URGENT: [Colony Name] requires immediate delivery of [Mineral Type]! Governor [Name], can you help?"

**Interactive Element**: This is a timed mini-objective. Players must find a facility with the requested mineral and purchase it quickly. Rewards fast thinking and action.

---

#### Example 10: "Technology Breakthrough"
**Trigger**: After 50 total transactions across all players (or after 10 minutes)  
**Effects**:
- New "Synthesized Mineral" becomes available at all facilities
- This mineral satisfies multiple colony needs
- Costs more but is highly efficient
- Unlocks permanently

**Narrative**: "BREAKTHROUGH: Scientists have developed synthetic minerals that can replace multiple traditional resources!"

**Interactive Element**: Players can now choose—buy traditional minerals (cheaper but multiple needed) or synthesized minerals (expensive but more efficient). Strategic choice that affects long-term planning.

## 🔧 Technical Implementation Patterns

### Pattern 1: Simple Time-Based Event
```javascript
// Example: Event triggers every 60 seconds
setInterval(() => {
    const shouldTrigger = Math.random() < 0.5; // 50% chance
    if (shouldTrigger) {
        triggerRandomEvent();
    }
}, 60000);
```

### Pattern 2: Action-Based Event Counter
```javascript
// Example: Event triggers after X transactions
let transactionCount = 0;

function handleTransaction() {
    transactionCount++;
    
    if (transactionCount >= 10) {
        triggerSupplyShortageEvent();
        transactionCount = 0; // Reset
    }
}
```

### Pattern 3: Weighted Random Selection
```javascript
// Example: Different events have different probabilities
const eventPool = [
    { name: "richVein", weight: 5 },      // Common
    { name: "pirateRaid", weight: 3 },    // Uncommon  
    { name: "solarStorm", weight: 2 },    // Rare
    { name: "firstContact", weight: 0.5 } // Very rare
];

function selectRandomEvent() {
    const totalWeight = eventPool.reduce((sum, e) => sum + e.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const event of eventPool) {
        if (random < event.weight) {
            return event.name;
        }
        random -= event.weight;
    }
}
```

### Pattern 4: Event with Duration
```javascript
// Example: Event that lasts for a specific duration
function triggerMarketBoom() {
    // Apply effects
    modifyAllPrices(0.7); // 30% discount
    
    // Set up cleanup
    setTimeout(() => {
        resetAllPrices();
        notifyUser("Market boom has ended!");
    }, 120000); // 2 minutes
}
```

## 🎨 Event Design Principles

### Make Events Meaningful
❌ Bad: "Something happened. Prices changed by 2%."  
✅ Good: "Pirate raid on Mars Colony! 25% of titanium reserves stolen. Security measures increased."

### Balance Risk and Reward
- Negative events should create interesting challenges, not feel punishing
- Positive events should feel earned or lucky, not like cheating
- Consider letting players prepare for or respond to events

### Create Narrative Momentum
- Events should tell a story about your universe
- Link related events together (pirate raid → increased security → security breach)
- Use consistent naming and theming

### Consider Player Agency
- Can players influence event outcomes?
- Are there strategic decisions to make during/after events?
- Do events create interesting choices?

## 💭 Event System Variations

### Variation 1: Event Queue
Instead of random timing, maintain a queue of upcoming events:
- Players can see "3 events pending"
- Events trigger in sequence
- Adds strategic planning element

### Variation 2: Event Chains
Events can trigger other events:
- Solar storm → Power outage → Emergency supplies needed
- Creates more complex narratives

### Variation 3: Player-Influenced Events
Let player actions affect event probability:
- Frequent trading increases pirate raid chances
- High security reduces threat event probability
- Specialization triggers market events

### Variation 4: Global vs. Local Events
Some events affect everyone, others affect specific players:
- Global: "Galactic recession affects all colonies"
- Local: "Governor Smith's colony experiences drought"

## 📊 Event Tracking Ideas

Consider tracking and displaying:
- Total events experienced
- Most impactful event
- Current active effects
- Event history/timeline
- Events survived vs. succumbed to
- Rarest event encountered

## ⚡ Quick Start: Simplest Possible Event System

If you're overwhelmed, start here:

1. Create an array of 4 simple events
2. Every 60 seconds, randomly select one
3. Modify one property based on the event
4. Display an alert() or update a div with the event description
5. Done! Now iterate and improve.

## 🎯 Remember

- Start simple, then add complexity
- Test your events frequently
- Make sure events are noticeable
- Have fun with the narratives!
- Your implementation should be unique to your team

Good luck, and may the odds be ever in your favor! 🚀
