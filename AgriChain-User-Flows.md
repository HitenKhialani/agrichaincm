# AgriChain - User Flows & Interaction Patterns

## Primary User Journeys

### 1. New User Onboarding Flow

#### Landing Page Discovery
```
User arrives → Interactive network demo → Role understanding → Sign up motivation
     ↓              ↓                      ↓                    ↓
"What is this?" → Hover nodes → "I'm a farmer" → "Create Account"
```

**Step-by-Step Experience:**
1. **Hero Animation**: Network visualization auto-plays showing batch flow
2. **Interactive Exploration**: User hovers over stakeholder nodes
3. **Demo Trigger**: "Start Demo" button shows complete supply chain journey
4. **Role Recognition**: User identifies their stakeholder type
5. **Call-to-Action**: Clear path to account creation

#### Profile Creation Journey
```
Role Selection → Identity Setup → Permissions Review → Wallet Generation → Dashboard Access
      ↓              ↓               ↓                  ↓                ↓
   Choose icon → Enter details → Understand access → Get blockchain ID → Start using
```

**Interaction Details:**
- **Role Cards**: Large, visual cards with icons and descriptions
- **Progressive Disclosure**: Show relevant fields based on selected role
- **Permission Preview**: Clear explanation of what user can/cannot do
- **Blockchain Abstraction**: Present wallet as "Digital Identity" not technical terms

### 2. Farmer Batch Creation Flow

#### Complete Batch Lifecycle
```
Harvest Planning → Batch Creation → Documentation → Quality Upload → Handoff Initiation
       ↓               ↓              ↓              ↓                ↓
   Set expectations → Enter details → Upload docs → Add quality data → Transfer to inspector
```

**Detailed Steps:**

**Step 1: Batch Initialization**
```
Dashboard → [+ Create New Batch] → Product Selection
    ↓
Product Type: [Dropdown: Tomatoes, Lettuce, Carrots...]
Variety: [Text Input: Roma Tomatoes]
Quantity: [Number Input: 500] [Unit: kg]
Expected Harvest: [Date Picker]
Organic Certified: [Toggle: Yes/No]
```

**Step 2: Location & Growing Conditions**
```
Farm Location: [Interactive Map Selector]
Growing Method: [Radio: Greenhouse/Field/Hydroponic]
Irrigation Type: [Dropdown: Drip/Sprinkler/Manual]
Fertilizer Used: [Multi-select: Organic compost, etc.]
Weather Conditions: [Text Area: Describe recent weather]
```

**Step 3: Documentation Upload**
```
Required Documents:
✅ Organic Certificate [Upload: certificate.pdf]
✅ Soil Test Results [Upload: soil-test.pdf]
⏳ Harvest Photos [Upload: 0/3 photos]
⏳ Quality Assessment [Pending harvest]

Optional Documents:
➕ Add Custom Document
```

**Step 4: Blockchain Registration**
```
Review Batch Information:
Batch ID: AG2024-001 (Auto-generated)
QR Code: [Generated QR image]
Blockchain Hash: 0x4f2a8b9c... (Generated)

[✓] I confirm all information is accurate
[✓] I understand this creates an immutable record

[CREATE BATCH] [Save as Draft]
```

### 3. Inspector Quality Verification Flow

#### Inspection Assignment to Completion
```
Notification → Batch Review → Physical Inspection → Results Upload → Certificate Generation
     ↓             ↓              ↓                  ↓                 ↓
  New request → Study history → Conduct tests → Enter findings → Issue certificate
```

**Detailed Inspector Journey:**

**Step 1: Inspection Request**
```
Dashboard Alert: "New inspection request for Batch AG2024-001"
↓
Batch Details:
- Product: Roma Tomatoes (500kg)
- Farmer: GreenFields Farm
- Harvest Date: Jan 10, 2024
- Organic Claim: Yes
- Documents: 3 uploaded

[ACCEPT INSPECTION] [REQUEST MORE INFO] [DECLINE]
```

**Step 2: Pre-Inspection Review**
```
Document Verification:
✅ Organic Certificate (Valid until Dec 2024)
✅ Soil Test Results (Compliant)
⚠️ Harvest Photos (Quality unclear - request new)

Previous Inspections:
- Dec 2023: Passed (Same farmer)
- Oct 2023: Passed (Same farm)

Risk Assessment: Low Risk
Estimated Time: 2 hours

[SCHEDULE INSPECTION] [REQUEST ADDITIONAL DOCS]
```

**Step 3: Field Inspection Interface**
```
On-Site Inspection Checklist:

Visual Quality:
□ Color consistency
□ Size uniformity  
□ No visible defects
□ Proper ripeness

Sample Testing:
□ Pesticide residue test
□ Sugar content (Brix)
□ pH levels
□ Moisture content

Documentation:
📷 Take inspection photos (0/5)
📝 Notes: [Text area for observations]
📊 Test results: [Upload lab results]

[SAVE PROGRESS] [COMPLETE INSPECTION]
```

**Step 4: Results & Certification**
```
Inspection Results:

Overall Grade: A (Excellent)
Compliance Status: ✅ Fully Compliant

Test Results:
- Pesticide Residue: Not Detected ✅
- Sugar Content: 4.2 Brix ✅
- pH Level: 4.1 ✅
- Organic Standards: Compliant ✅

Certificate Generation:
Certificate ID: CERT-2024-001
Valid Until: Jan 10, 2025
Digital Signature: [Generated]

[ISSUE CERTIFICATE] [REQUEST RETEST] [REJECT BATCH]
```

### 4. Consumer Product Verification Flow

#### QR Scan to Trust Verification
```
Product Purchase → QR Code Scan → Batch Lookup → Journey Timeline → Trust Confirmation
       ↓               ↓              ↓              ↓                 ↓
   See QR code → Open camera → Find batch → View history → Feel confident
```

**Consumer Experience Steps:**

**Step 1: QR Code Discovery**
```
Product Package Display:
┌─────────────────────────┐
│  ORGANIC TOMATO SAUCE   │
│                         │
│  [QR CODE IMAGE]        │
│                         │
│  "Scan to verify        │
│   product authenticity" │
│                         │
│  Batch: AG2024-001      │
└─────────────────────────┘
```

**Step 2: Scanning Interface**
```
AgriChain Verification App:

[Camera viewfinder with QR overlay]

Instructions:
1. Point camera at QR code
2. Hold steady for automatic scan
3. View your product's journey

Alternative: Enter batch ID manually
[Text input: AG2024-001] [Search]
```

**Step 3: Product Journey Display**
```
🍅 Organic Tomato Sauce
Batch AG2024-001

Your Product's Journey:

🚜 Jan 10 | GreenFields Farm, CA
   Harvested with organic certification
   ✅ USDA Organic Inspector verified

🔍 Jan 12 | Quality Inspection
   Grade A - Excellent quality
   ✅ No pesticides detected

🏭 Jan 15 | Processing Facility
   Made into tomato sauce
   ✅ No additives or preservatives

🚛 Jan 18 | Cold Chain Transport
   Temperature controlled shipping
   ✅ Optimal conditions maintained

🛳️ Jan 20 | Port Clearance
   International export approved
   ✅ All documentation verified

🏪 Jan 25 | Your Local Store
   Ready for purchase
   ✅ Final quality check passed

Trust Score: ⭐⭐⭐⭐⭐ (5/5)
All records verified on blockchain

[View Certificates] [Share Verification] [Learn More]
```

## Advanced Interaction Patterns

### 1. Multi-Stakeholder Handoff Process

#### Custody Transfer Workflow
```
Current Holder → Transfer Initiation → Recipient Notification → Document Exchange → Confirmation
      ↓                ↓                     ↓                    ↓                ↓
  Ready to ship → Select recipient → Notify next party → Share documents → Complete transfer
```

**Transfer Interface:**
```
Transfer Batch AG2024-001

From: 🚜 GreenFields Farm
To: 🚛 FastTrack Logistics

Required for Transfer:
✅ Quality Certificate (Uploaded)
✅ Packaging Documentation (Uploaded)
⏳ Transport Agreement (Pending signature)

Recipient Confirmation Required:
□ Logistics company accepts custody
□ Transport conditions agreed
□ Delivery timeline confirmed

Blockchain Transaction:
Gas Fee: $0.02 (Estimated)
Confirmation Time: ~30 seconds

[INITIATE TRANSFER] [SAVE DRAFT] [CANCEL]
```

### 2. Real-Time Collaboration Features

#### Document Review & Approval
```
Document Upload → Stakeholder Notification → Review Process → Approval/Rejection → Blockchain Update
       ↓                    ↓                    ↓                ↓                    ↓
   Farmer uploads → Inspector notified → Review document → Make decision → Record immutably
```

**Collaborative Review Interface:**
```
Document Review: Organic Certificate

Uploaded by: 🚜 GreenFields Farm
Review requested: 🔍 QualityCheck Inc.
Document: organic-cert-2024.pdf

Review Checklist:
□ Certificate is current (expires after harvest)
□ Issuing authority is recognized
□ Farm details match batch information
□ No discrepancies in organic claims

Comments:
[Text area for reviewer notes]

Decision:
○ Approve - Certificate is valid
○ Request Changes - Specify issues
○ Reject - Certificate invalid

[SUBMIT REVIEW] [REQUEST MORE TIME]
```

### 3. Error Handling & Recovery Flows

#### Failed Transaction Recovery
```
Transaction Failure → Error Diagnosis → Recovery Options → Retry Process → Success Confirmation
        ↓                 ↓                ↓               ↓                ↓
   Network error → Show clear message → Offer solutions → Try again → Confirm success
```

**Error Recovery Interface:**
```
⚠️ Transaction Failed

What happened:
Network congestion caused the transaction to timeout.
Your batch data is safe and no fees were charged.

Your options:
1. [RETRY NOW] - Try the same transaction again
2. [RETRY LATER] - Save progress and try later  
3. [CONTACT SUPPORT] - Get help from our team

Batch Status: Draft (Not yet on blockchain)
Data Saved: ✅ All information preserved
Estimated Retry Success: High

[RETRY TRANSACTION] [SAVE FOR LATER]
```

### 4. Mobile-Optimized Workflows

#### Touch-First Batch Timeline
```
Mobile Timeline Navigation:
- Swipe left/right between stages
- Tap stage for details
- Pull down to refresh
- Long press for actions menu
```

**Mobile Stage Detail:**
```
┌─────────────────────────┐
│ 🏭 Processing Stage     │
│                         │
│ Status: ✅ Completed    │
│ Date: Jan 15, 2024      │
│                         │
│ Documents (3):          │
│ • Recipe specification  │
│ • Quality test results  │
│ • Packaging details     │
│                         │
│ [View Documents]        │
│ [Contact Processor]     │
│                         │
│ ← Swipe for next stage  │
└─────────────────────────┘
```

## Accessibility Considerations

### Screen Reader Navigation
```
Batch Timeline Accessibility:
- Semantic HTML structure
- ARIA labels for status indicators  
- Keyboard navigation support
- Audio descriptions for visual elements
```

### Voice Commands (Future Enhancement)
```
Voice Interface Examples:
"Show me batch AG2024-001"
"What's the status of my tomatoes?"
"Upload quality certificate"
"Transfer batch to inspector"
```

### High Contrast Mode
```
Accessibility Features:
- High contrast color scheme
- Larger touch targets (minimum 44px)
- Clear focus indicators
- Reduced motion options
- Text scaling support
```

This comprehensive user flow documentation ensures AgriChain provides intuitive, accessible experiences for all stakeholders while maintaining the educational focus on blockchain transparency and agricultural supply chain trust.