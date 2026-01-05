# Exomine V2 Hack-a-thon: Team Planning Worksheet

Use this worksheet to plan your random events system before diving into code. Discussing these questions as a team will help you build something cohesive and avoid conflicting implementations.

## 📋 Team Information

**Team Name**: ________________________

**Team Members**: 
- ________________________
- ________________________
- ________________________
- ________________________

**Date Started**: ________________________

---

## 🎯 Vision & Goals

### What's Your Game's "Vibe"?
Choose the experience you want to create (circle one or write your own):

- **Chaotic & Unpredictable**: Events happen frequently, anything can happen anytime
- **Strategic & Calculated**: Events are predictable, players can plan around them  
- **Story-Driven**: Events create a narrative about your universe
- **Challenge Mode**: Events make the game harder and require adaptation
- **Other**: _________________________________________________

### Core Design Goals
What are your top 3 goals for this system?

1. _________________________________________________________________
2. _________________________________________________________________
3. _________________________________________________________________

### Simulation vs. Interactivity Balance
How will you balance automatic events with player choice? (Circle your approach)

**Heavy Simulation** ←→ ←→ **Balanced** ←→ ←→ **Heavy Interactivity**

(Things mostly happen automatically) | (Mix of both) | (Players have lots of control/choices)

---

## 🎲 Event System Design (Simulation Layer)

### Trigger Mechanism
How will events start? (Check all that apply)

- [ ] ⏰ Time-based (every X seconds)
- [ ] 🔢 Action-based (after X transactions)  
- [ ] 🎰 Probability-based (X% chance per action)
- [ ] 🔄 Hybrid approach
- [ ] 💡 Other: _________________________________________________

**Specific timing/frequency**: _________________________________________________

### Event Categories
Which categories will you focus on? (Pick 2-3)

- [ ] 📦 Resource Events (inventory, supply, minerals)
- [ ] 🏴‍☠️ Threat Events (raids, disasters, failures)
- [ ] 👥 Population Events (migration, workforce, demographics)
- [ ] 💰 Economic Events (prices, markets, trade)
- [ ] 🌟 Environmental Events (conditions, discoveries, natural phenomena)

**Why these categories?** _________________________________________________

---

## 🎮 Interactive Layer Design

### Which Interactive Element Will You Implement?
Choose at least ONE (check your choice):

- [ ] **Option A: Colony Resource Tracking**
     - Track mineral inventories per colony
     - Display what each colony needs/has
     - Create consequences for under/over-supplying

- [ ] **Option B: Budget/Currency System**
     - Give each governor a credit balance
     - Track spending and earnings
     - Create ways to gain/lose credits

- [ ] **Option C: Goals/Objectives System**
     - Define objectives players try to complete
     - Track progress toward goals
     - Reward completion

- [ ] **Option D: Preventive Actions**
     - Add new action buttons beyond purchasing
     - Let players prepare for or mitigate events
     - Examples: Buy insurance, increase security

- [ ] **Option E: Strategic Timing**
     - Make timing of purchases matter
     - Show price trends, forecasts, or warnings
     - Reward smart timing decisions

### How Will Your Interactive Element Work?

**Describe your chosen interactive element in detail:**

_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

**What new UI elements will you need?**

_________________________________________________________________
_________________________________________________________________

**What new data will you need to track?**

_________________________________________________________________
_________________________________________________________________

**How does this make the experience more engaging?**

_________________________________________________________________
_________________________________________________________________

---

## 📊 Your Event Roster

Plan at least 4-6 unique events. Use this template for each:

### Event #1: "_________________________"

**Category**: _________________________  
**Trigger**: _________________________  
**Frequency**: ⭐ Common | ⭐⭐ Uncommon | ⭐⭐⭐ Rare

**Effects** (what changes in your app?):
1. _________________________________________________________________
2. _________________________________________________________________

**Duration**: ⚡ Instant | ⏱️ Temporary (_____ seconds) | ♾️ Permanent

**Narrative/Description**: 
_________________________________________________________________
_________________________________________________________________

---

### Event #2: "_________________________"

**Category**: _________________________  
**Trigger**: _________________________  
**Frequency**: ⭐ Common | ⭐⭐ Uncommon | ⭐⭐⭐ Rare

**Effects**:
1. _________________________________________________________________
2. _________________________________________________________________

**Duration**: ⚡ Instant | ⏱️ Temporary (_____ seconds) | ♾️ Permanent

**Narrative/Description**: 
_________________________________________________________________
_________________________________________________________________

---

### Event #3: "_________________________"

**Category**: _________________________  
**Trigger**: _________________________  
**Frequency**: ⭐ Common | ⭐⭐ Uncommon | ⭐⭐⭐ Rare

**Effects**:
1. _________________________________________________________________
2. _________________________________________________________________

**Duration**: ⚡ Instant | ⏱️ Temporary (_____ seconds) | ♾️ Permanent

**Narrative/Description**: 
_________________________________________________________________
_________________________________________________________________

---

### Event #4: "_________________________"

**Category**: _________________________  
**Trigger**: _________________________  
**Frequency**: ⭐ Common | ⭐⭐ Uncommon | ⭐⭐⭐ Rare

**Effects**:
1. _________________________________________________________________
2. _________________________________________________________________

**Duration**: ⚡ Instant | ⏱️ Temporary (_____ seconds) | ♾️ Permanent

**Narrative/Description**: 
_________________________________________________________________
_________________________________________________________________

---

*(Copy this template for Events #5, #6, etc.)*

---

## 🗄️ Data Model Changes

### New Properties Needed?
What new properties do you need to add to existing tables?

**Governors table**:
- _________________________________________________________________

**Colonies table**:
- _________________________________________________________________

**Facilities table**:
- _________________________________________________________________

**Minerals table**:
- _________________________________________________________________

### New Tables Needed?
Do you need to create new tables for event tracking?

**Table name**: _________________________
**Purpose**: _________________________________________________________________
**Key fields**: _________________________________________________________________

**Table name**: _________________________
**Purpose**: _________________________________________________________________
**Key fields**: _________________________________________________________________

---

## 🎨 User Interface Plan

### Event Notifications
How will users know when events happen? (Check all that apply)

- [ ] Alert/modal popup
- [ ] Toast/banner notification
- [ ] Event log/feed display
- [ ] Visual indicators on affected elements
- [ ] Sound effects
- [ ] Other: _________________________________________________

**Where on the page?** _________________________________________________

### Event Information Display
What information will you show users?

- [ ] Event description/narrative
- [ ] Affected colonies/facilities
- [ ] Current active effects
- [ ] Event history/timeline
- [ ] Statistics/counters
- [ ] Other: _________________________________________________

### Visual Design Elements
How will you make events visually interesting?

- Color coding: _________________________________________________
- Icons/symbols: _________________________________________________
- Animations: _________________________________________________
- Other visual effects: _________________________________________________

---

## 👥 Team Task Division

### Who's doing what?

**Event Logic & Triggers**: _________________________  
**Database/State Management**: _________________________  
**UI/Notifications**: _________________________  
**Event Descriptions/Narrative**: _________________________  
**Testing & Debugging**: _________________________

### Key Milestones

- [ ] Event system architecture designed (Date: ________)
- [ ] Database modifications complete (Date: ________)
- [ ] First event working end-to-end (Date: ________)
- [ ] All events implemented (Date: ________)
- [ ] UI/notifications polished (Date: ________)
- [ ] Testing complete (Date: ________)
- [ ] Ready to demo (Date: ________)

---

## 🧪 Testing Checklist

Before you demo, make sure:

- [ ] Events trigger reliably
- [ ] State changes persist correctly
- [ ] UI updates reflect events accurately
- [ ] Multiple events don't conflict
- [ ] Events don't break core functionality
- [ ] Event descriptions display properly
- [ ] All team members understand the system
- [ ] The game is actually fun to play!

---

## 💭 Questions & Concerns

What are you unsure about? What might be challenging?

1. _________________________________________________________________
2. _________________________________________________________________
3. _________________________________________________________________

---

## 🚀 Stretch Goals

If time permits, what else would you like to add?

1. _________________________________________________________________
2. _________________________________________________________________
3. _________________________________________________________________

---

## 📝 Notes & Ideas

Use this space for sketches, diagrams, or additional notes:

_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

## ✅ Final Team Agreement

We have discussed this plan and agree on the approach:

- _________________________ (Name & Date)
- _________________________ (Name & Date)
- _________________________ (Name & Date)
- _________________________ (Name & Date)

**Next meeting scheduled**: _________________________

---

*Remember: This plan can evolve! It's okay to adjust as you learn and experiment. The goal is to start aligned, not to be perfectly rigid.* 🎯
