# AgriChain - Detailed Component Specifications

## Core UI Components

### 1. NetworkVisualization Component
```jsx
// Interactive blockchain network display
<NetworkVisualization>
  <StakeholderNode 
    type="farmer" 
    position={coordinates}
    onHover={showRoleDescription}
    onClick={navigateToProfile}
  />
  <TransactionLine 
    from="farmer" 
    to="inspector"
    animated={true}
    status="active"
  />
  <DemoMode 
    onStart={animateSampleBatch}
    speed="normal"
  />
</NetworkVisualization>
```

**Props & States:**
- `nodes`: Array of stakeholder objects
- `connections`: Array of transaction relationships  
- `demoMode`: Boolean for animation state
- `selectedNode`: Currently highlighted stakeholder
- `animationSpeed`: Control for demo playback

**Visual Behaviors:**
- Nodes pulse gently when active
- Transaction lines flow with animated dots
- Hover states expand nodes with role tooltips
- Demo mode highlights path progression

### 2. BatchTimeline Component
```jsx
// Supply chain progress visualization
<BatchTimeline batchId="AG2024-001">
  <TimelineStage 
    stage="farm"
    status="completed"
    timestamp="2024-01-10"
    documents={farmDocuments}
  />
  <TimelineStage 
    stage="inspection" 
    status="completed"
    timestamp="2024-01-12"
    documents={inspectionCerts}
  />
  <TimelineStage 
    stage="processing"
    status="in-progress"
    timestamp="2024-01-15"
    documents={processingDocs}
  />
</BatchTimeline>
```

**Status Types:**
- `pending`: Gray circle, dashed connector
- `in-progress`: Orange circle, animated pulse
- `completed`: Green circle, solid connector
- `failed`: Red circle, warning icon

### 3. LedgerEntry Component
```jsx
// Individual blockchain record display
<LedgerEntry>
  <EntryHeader 
    type="quality-certificate"
    timestamp="2024-01-16 14:22:33"
    initiator="QualityCheck Inc."
  />
  <EntryContent>
    <HashDisplay 
      current="0x9f8e7d6c..."
      previous="0x1a2b3c4d..."
      verified={true}
    />
    <DocumentLinks documents={attachedDocs} />
  </EntryContent>
  <EntryActions>
    <VerifyButton onClick={verifyHash} />
    <ViewButton onClick={openDocument} />
  </EntryActions>
</LedgerEntry>
```

**Security Features:**
- Hash verification with visual confirmation
- Immutable timestamp display
- Digital signature validation
- Audit trail linkage

### 4. RoleDashboard Component
```jsx
// Stakeholder-specific interface
<RoleDashboard role="farmer">
  <DashboardHeader 
    organizationName="GreenFields Farm"
    roleIcon="🚜"
    notifications={pendingAlerts}
  />
  <QuickActions role="farmer">
    <CreateBatchButton />
    <ViewPaymentsButton />
    <AnalyticsButton />
  </QuickActions>
  <ActiveBatches 
    batches={userBatches}
    permissions={rolePermissions}
  />
  <RecentActivity 
    activities={recentEvents}
    maxItems={5}
  />
</RoleDashboard>
```

**Role-Specific Customization:**
- Dynamic action buttons based on permissions
- Filtered data views per stakeholder type
- Contextual notifications and alerts
- Personalized workflow shortcuts

### 5. QRScanner Component
```jsx
// Consumer product verification
<QRScanner>
  <CameraView 
    onScan={handleQRScan}
    onError={showScanError}
  />
  <ManualEntry>
    <BatchIdInput 
      placeholder="Enter Batch ID"
      onSubmit={lookupBatch}
    />
  </ManualEntry>
  <ScanInstructions>
    <InstructionStep 
      number={1}
      text="Point camera at QR code"
    />
    <InstructionStep 
      number={2} 
      text="Wait for automatic scan"
    />
  </ScanInstructions>
</QRScanner>
```

**Accessibility Features:**
- Voice guidance for scanning
- High contrast mode for visibility
- Manual input alternative
- Clear error messaging

## Advanced Interaction Patterns

### 1. Batch Creation Wizard
```
Step 1: Product Information
┌─────────────────────────────────────┐
│ Product Type: [Dropdown: Tomatoes] │
│ Variety: [Text: Roma Tomatoes]     │
│ Quantity: [Number: 500] [Unit: kg] │
│ Harvest Date: [Date Picker]       │
│ Organic Certified: [Checkbox: ✓]  │
└─────────────────────────────────────┘

Step 2: Location & Conditions  
┌─────────────────────────────────────┐
│ Farm Location: [Map Selector]      │
│ Growing Method: [Radio: Greenhouse]│
│ Weather Conditions: [Text Area]    │
│ Soil Test Results: [File Upload]  │
└─────────────────────────────────────┘

Step 3: Documentation
┌─────────────────────────────────────┐
│ Organic Certificate: [Upload: ✓]   │
│ Harvest Photos: [Upload: 3 files] │
│ Quality Notes: [Text Area]         │
│ Initial QR Code: [Generate Button] │
└─────────────────────────────────────┘
```

### 2. Document Verification Flow
```
Upload → Hash Generation → Blockchain Storage → Verification
   ↓           ↓              ↓               ↓
[📄] → [🔐 0x4f2a...] → [⛓️ Block #247] → [✅ Verified]
```

**Visual Feedback:**
- Progress indicators for each step
- Real-time hash generation display
- Blockchain confirmation animation
- Success/failure state messaging

### 3. Multi-Stakeholder Handoff
```
Current Holder: Farmer
Next Recipient: Inspector

┌─────────────────────────────────────┐
│ Transfer Batch AG2024-001           │
│                                     │
│ From: 🚜 GreenFields Farm          │
│ To: 🔍 QualityCheck Inc.           │
│                                     │
│ Required Documents:                 │
│ ✅ Harvest Certificate              │
│ ✅ Organic Certification            │
│ ⏳ Transport Receipt (Pending)      │
│                                     │
│ [INITIATE TRANSFER] [CANCEL]        │
└─────────────────────────────────────┘
```

## Visual Metaphors & Educational Elements

### 1. Blockchain as Web Network
- **Nodes**: Stakeholders as interconnected points
- **Edges**: Transactions as flowing connections
- **Clusters**: Related activities grouped visually
- **Animation**: Data flowing through the network

### 2. Trust Visualization
```
Trust Score Calculation:
┌─────────────────────────────────────┐
│ Document Verification: ✅ +20 pts   │
│ Stakeholder Reputation: ⭐ +15 pts  │
│ Blockchain Immutability: 🔒 +25 pts │
│ Third-party Audits: 🔍 +10 pts     │
│                                     │
│ Total Trust Score: 70/100 ⭐⭐⭐⭐   │
└─────────────────────────────────────┘
```

### 3. Transparency Indicators
- **Green Badges**: Verified information
- **Yellow Warnings**: Pending verification  
- **Red Alerts**: Failed verification or missing data
- **Blue Info**: Additional context available

## Responsive Design Specifications

### Mobile-First Timeline
```
Mobile View (320px):
┌─────────────────┐
│ 🚜 Farm         │
│ ✅ Completed    │
│ Jan 10, 2024    │
├─────────────────┤
│ 🔍 Inspection   │
│ ✅ Completed    │
│ Jan 12, 2024    │
├─────────────────┤
│ 🏭 Processing   │
│ 🔄 In Progress  │
│ Jan 15, 2024    │
└─────────────────┘
```

### Tablet Dashboard Layout
```
Tablet View (768px):
┌─────────────────────────────────────┐
│ Header & Navigation                 │
├─────────────────┬───────────────────┤
│ Quick Actions   │ Active Batches    │
│                 │                   │
│ [+ New Batch]   │ AG2024-001 ✅     │
│ [📋 Payments]   │ AG2024-002 🔄     │
│ [📊 Analytics]  │ AG2024-003 ⏳     │
├─────────────────┴───────────────────┤
│ Recent Activity (Full Width)        │
└─────────────────────────────────────┘
```

## Accessibility & Usability

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for interactive elements
- Alt text for all images and icons
- Keyboard navigation support

### Color Accessibility
- WCAG 2.1 AA contrast ratios
- Color-blind friendly palette
- Pattern/texture alternatives to color coding
- High contrast mode option

### Touch Interactions
- Minimum 44px touch targets
- Swipe gestures for timeline navigation
- Pull-to-refresh for data updates
- Haptic feedback for confirmations

## Performance Considerations

### Data Loading Strategies
- Lazy loading for timeline stages
- Progressive image loading
- Cached blockchain data with refresh
- Optimistic UI updates

### Animation Performance
- CSS transforms for smooth animations
- RequestAnimationFrame for complex sequences
- Reduced motion preferences respected
- GPU acceleration for network visualization

This detailed component specification provides the technical foundation for implementing AgriChain's user interface while maintaining the educational focus on blockchain transparency and agricultural supply chain trust.