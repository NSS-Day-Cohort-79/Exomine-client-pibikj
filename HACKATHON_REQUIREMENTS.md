# Exomine V2 Hack-a-thon: Living Simulation Challenge

## 🎯 Overview
Welcome to the Exomine V2 Hack-a-thon! Over the holiday break, your team will transform your working Exomine application into a **living, dynamic simulation** where random events create both **challenges and opportunities** that make the mineral purchasing experience more engaging and strategic.

In the base Exomine project, you select a governor and purchase minerals from facilities. That core interaction stays the same. But now, **the world reacts to your actions and changes around you**. You might need to adapt your purchasing strategy based on what's happening. Maybe you wanted to buy from Facility A, but pirates just raided it—do you wait or buy from the more expensive Facility B? Maybe a mineral shortage makes titanium scarce—do you stock up now or wait for prices to drop?

The key is balancing two aspects:
- **Simulation**: Things happen automatically (events trigger on timers, randomly, etc.)
- **Interactivity**: The player can respond to events and make meaningful choices

## ⚠️ Prerequisites
Your team **must have completed the core Exomine requirements** before beginning this challenge:
- ✅ Working ERD implementation
- ✅ Governor selection and display
- ✅ Mining facility interaction
- ✅ Mineral purchasing system
- ✅ All fetch calls functional

## 🎲 Core Challenge: Random Events + Player Response

Your mission is to implement a **random events system** that dynamically affects the simulation AND give players ways to respond, prepare for, or take advantage of these events.

### What Makes a Good System?

A successful implementation should:
1. **Events happen automatically** based on simulation rules you define
2. **Events modify application state** in ways that matter to purchasing decisions
3. **Players can see and understand** what's happening through UI updates
4. **Players can respond** through their purchasing choices or new actions you create

### The Interactivity Challenge

Here's where you add game-like elements. Consider adding ONE or MORE of these interactive layers:

#### Option 1: **Resource Management**
Track what each colony has purchased over time:
- Colonies accumulate inventories from purchases
- Colonies have "needs" that must be met
- Players try to keep their colony well-supplied
- Events affect colony needs or deplete inventories

#### Option 2: **Budgets & Economics**
Give players limited resources to manage:
- Each governor starts with X credits
- Purchases cost credits
- Events can grant bonus credits or cause losses
- Players try to maximize what they can purchase with limited funds

#### Option 3: **Objectives & Challenges**
Create goals beyond just purchasing:
- "Purchase 100 tons of titanium before the storm hits"
- "Keep all 3 minerals in stock for your colony"
- "Survive 5 pirate raids without running out of supplies"
- Completing objectives earns points/achievements

#### Option 4: **Preparation & Mitigation**
Let players prepare for or respond to events:
- Spend credits to increase facility security (reduces pirate raids)
- Purchase insurance against certain event types
- Stockpile minerals before a predicted shortage
- Invest in facilities to improve their efficiency

#### Option 5: **Timing & Strategy**
Make when you purchase matter:
- Prices fluctuate based on events
- Facilities have limited stock that replenishes over time
- "Rush orders" cost more but guarantee delivery
- Players try to buy low and avoid buying during crises

### Event Categories (Choose Your Focus)

You don't need to implement all of these—pick 2-3 categories that interest your team and go deep:

#### 📦 **Resource Events**
Events that affect mineral availability, pricing, or inventory in the simulation
- Examples: mineral discoveries, supply shortages, cargo ship arrivals, extraction rate changes
- Could affect: inventory quantities, mineral types available, purchase costs, facility productivity
- **Interactivity idea**: Players rush to buy before shortages hit, or wait for prices to drop after a discovery

#### 🏴‍☠️ **Threat Events**
Events that pose risks to facilities or colonies in the simulation
- Examples: pirate raids, asteroid impacts, equipment failures, solar storms, system malfunctions
- Could affect: facility active/inactive status, available inventory, temporary closures
- **Interactivity idea**: Players can purchase "security upgrades" or "insurance" to mitigate threat impacts

#### 👥 **Population Events**
Events that change colony demographics or workforce in the simulation
- Examples: migration waves, workforce strikes, colonist needs, staff shortages
- Could affect: colony population, facility staffing levels, demand for certain minerals
- **Interactivity idea**: Players must meet their colony's changing needs based on population growth

#### 💰 **Economic Events**
Events that shift the financial landscape in the simulation
- Examples: market fluctuations, trade route changes, inflation/deflation, economic policies
- Could affect: transaction costs, mineral values, facility profitability, colony budgets
- **Interactivity idea**: Players track market trends and buy when prices are favorable

#### 🌟 **Environmental Events**
Events that affect the physical conditions of the solar system
- Examples: solar activity, orbital alignments, resource depletion, new discoveries, weather patterns
- Could affect: facility operations, travel costs, mineral quality, discovery of new resources
- **Interactivity idea**: Players adapt their purchasing routes based on environmental conditions

---

## 🎮 Balancing Simulation and Interactivity

The best implementations will have **both automatic simulation AND player agency**. Here's how to think about it:

### Simulation Layer (Things that happen automatically)
- Events trigger based on timers or probability
- Prices fluctuate
- Facilities go online/offline
- Stock levels change
- The world evolves whether the player acts or not

### Interactive Layer (Things players can do)
- Make purchasing decisions based on current conditions
- Take special actions to respond to events
- Plan ahead based on visible trends
- Compete for limited resources
- Build up their colony over time

### Example of Good Balance

**Simulation**: Every 60 seconds, a random facility has a 30% chance to experience a "supply disruption" that reduces its inventory by 50% for 45 seconds.

**Interactivity**: 
- Players see which facilities are currently disrupted (visual indicator)
- Players can choose to buy from non-disrupted facilities (even if more expensive)
- Players can "pre-order" minerals for delivery after the disruption ends (cheaper but requires waiting)
- Each colony tracks its mineral reserves—if you run out, you face consequences

This creates strategic decisions: Do I pay premium prices now, or do I risk my colony running low while waiting for the disruption to end?

## 📋 Minimum Requirements

Your system must include both **simulation** and **interactivity** elements:

### Part 1: Simulation Layer (Required)

#### 1. **Event Trigger Mechanism** (How events start automatically)
Implement at least ONE of these:
- **Time-based**: Events trigger after X seconds/minutes
- **Action-based**: Events trigger after X transactions or user actions
- **Probability-based**: Each action has X% chance to trigger an event
- **Hybrid**: Combine multiple trigger types

#### 2. **State Modification** (What events do)
Events must:
- Change at least **two different data properties** in your application
- Update your database or application state
- Be persistent (changes remain until another event or action modifies them)

#### 3. **Event Variety** (How many different things can happen)
Create at least:
- **4-6 unique event types** that can occur
- Each event should have distinct effects on the simulation

### Part 2: Interactive Layer (Required)

Choose and implement **at least ONE** of these interactive elements:

#### Option A: **Colony Resource Tracking**
- Track what minerals each colony has acquired
- Display colony inventory or needs
- Create some consequence or benefit based on what the colony has
- Example: Colony happiness increases when well-supplied

#### Option B: **Budget/Currency System**
- Each governor has a limited budget (credits/money)
- Purchases deduct from this budget
- Events can affect budget (bonuses or losses)
- Display current budget and spending history

#### Option C: **Goals/Objectives System**
- Define at least 3 objectives players can try to complete
- Track progress toward objectives
- Provide feedback when objectives are met
- Examples: "Purchase 10 units of iron", "Survive 3 threat events"

#### Option D: **Preventive Actions**
- Add at least 2 new actions beyond basic purchasing
- These actions help players prepare for or mitigate events
- Examples: "Buy insurance", "Increase security", "Stockpile reserves"
- Actions should cost something and provide clear benefits

#### Option E: **Strategic Timing**
- Make the timing of purchases strategically important
- Add visible indicators showing current conditions (price trends, availability)
- Let players make choices based on current vs. future conditions
- Example: Buy now at high prices or wait for the market to stabilize?

### Part 3: User Feedback (Required)

Implement at least ONE of these:
- **Event log/history**: Display recent events that have occurred
- **Notifications**: Pop-ups or banners announcing events as they happen
- **Visual indicators**: UI elements showing affected areas (badges, colors, icons)
- **Status dashboard**: A dedicated view showing current conditions and player stats

## 🎨 Creative Freedom Areas

These are places where every team should do something different:

### Your Event Rules
- How often do events happen?
- Can multiple events be active at once?
- Do events have duration or are they permanent?
- Can events be countered or mitigated?
- Are some events more rare/impactful than others?

### Your Data Model Extensions
You may need to modify your database structure:
- Add new tables for event tracking?
- Add new properties to existing tables (security ratings, populations, morale)?
- Create event history logs?
- Track event effects separately from base data?

### Your UI/UX Approach
- Where do event notifications appear?
- How do you visualize event impacts?
- Do you show probability/risk indicators?
- Can users see upcoming events or only past/current ones?

### Your Event Narratives
Make your events feel immersive:
- Write engaging event descriptions
- Give events creative names
- Add thematic flavor text
- Make the space economy feel alive

## 💡 Implementation Suggestions (Not Requirements)

### Consider Adding:
- **Event severity levels**: Minor, major, catastrophic
- **Chain reactions**: One event can trigger others
- **Player agency**: Let governors respond to or prepare for events
- **Risk/reward balance**: Dangerous events could offer opportunities
- **Recovery mechanics**: Ways to bounce back from negative events
- **Statistics tracking**: Count events survived, disasters averted, etc.

### Technical Approaches to Consider:
- Create an `EventManager` module to handle event logic
- Use `setInterval()` or `setTimeout()` for time-based triggers
- Store event templates and randomly select + customize them
- Create separate API endpoints for event-related state changes
- Consider using localStorage for event history persistence

## 📊 Evaluation Criteria

When you present your V2 hack-a-thon project, we'll be looking at:

1. **Simulation Quality**: Does the world feel alive? Do events happen automatically and affect the state meaningfully?
2. **Interactivity**: Can players respond to events? Are there meaningful choices to make?
3. **Technical Implementation**: Does your system work reliably? Is the code well-organized?
4. **Creativity**: How unique and interesting is your approach? What makes your version different?
5. **Polish**: Is the user experience smooth and intuitive? Do players understand what's happening?
6. **Balance**: Is your simulation fun to interact with, or is it frustrating/confusing?:

1. **Creativity**: How unique and interesting are your events?
2. **Technical Implementation**: Does your system work reliably?
3. **Impact**: Do events meaningfully affect gameplay?
4. **Polish**: Is the user experience smooth and intuitive?
5. **Complexity**: How sophisticated is your event system's logic?

## 🚀 Stretch Goals (If You're Feeling Ambitious)

- **Difficulty modes**: Easy/Normal/Hard with different event frequencies
- **Event prediction system**: Give hints about upcoming events
- **Insurance/protection**: Let governors buy protection against certain events
- **Seasonal events**: Holiday-themed events that only appear during certain times
- **Achievements**: Track and reward surviving certain event combinations
- **Multiplayer impact**: Events in one player's game affect another's
- **Custom event creator**: Let users define their own events

## 📅 Timeline

You have the holiday break to work on this. We'll reconvene after the break to:
- Demo your implementations
- Share what you learned
- Discuss the different approaches teams took
- Play each other's versions!

## 🤝 Collaboration Notes

- This is still a **team project**—divide responsibilities thoughtfully
- Each team member should contribute to event creation and implementation
- Document your event rules and system design for your teammates
- Test your system thoroughly—random events can create unexpected bugs!

## ❓ Questions to Guide Your Design

Before you start coding, discuss as a team:
1. What kind of experience do we want players to have?
2. Should our game be chaotic or strategic?
3. Which existing properties in our database could be affected by events?
4. How will we ensure events don't break the core gameplay?
5. What makes an event feel "fun" vs. "frustrating"?
6. How will we know if our event system is working well?

## 🎉 Most Importantly

**Have fun!** This is your chance to be creative, experiment, and add personality to your application. Every team's implementation should be unique—there's no "right" way to do this. Make something you're excited to demo!

---

*Remember: The goal isn't perfection—it's innovation. Make bold choices, try new things, and learn from what works (and what doesn't). See you after the break!* 🚀
