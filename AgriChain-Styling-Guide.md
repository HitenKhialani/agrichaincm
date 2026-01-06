# AgriChain - Styling & Design System Guide

## Design Tokens

### Color Palette
```css
:root {
  /* Primary Colors */
  --color-primary-green: #2E7D32;
  --color-primary-green-light: #4CAF50;
  --color-primary-green-dark: #1B5E20;
  
  /* Secondary Colors */
  --color-secondary-blue: #1976D2;
  --color-secondary-blue-light: #42A5F5;
  --color-secondary-blue-dark: #0D47A1;
  
  /* Status Colors */
  --color-success: #4CAF50;
  --color-warning: #FF9800;
  --color-error: #F44336;
  --color-info: #2196F3;
  
  /* Neutral Colors */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #EEEEEE;
  --color-gray-300: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;
  
  /* Blockchain Specific */
  --color-blockchain-node: #6C63FF;
  --color-blockchain-connection: #00BCD4;
  --color-blockchain-verified: #4CAF50;
  --color-blockchain-pending: #FF9800;
}
```

### Typography Scale
```css
:root {
  /* Font Families */
  --font-primary: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Roboto Mono', 'Courier New', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  
  /* Font Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```
### Spacing System
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Border Radius
```css
:root {
  --radius-sm: 0.125rem;  /* 2px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-full: 9999px;  /* Full circle */
}
```

### Shadows
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

## Component Styles

### Button Components
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  font-size: var(--text-base);
  line-height: var(--leading-tight);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--color-primary-green);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-green-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: var(--color-secondary-blue);
  color: white;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--color-primary-green);
  color: var(--color-primary-green);
}

.btn-outline:hover {
  background-color: var(--color-primary-green);
  color: white;
}

.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}
```

### Card Components
```css
.card {
  background-color: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  padding: var(--space-6);
  border: 1px solid var(--color-gray-200);
  transition: all 0.2s ease-in-out;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-header {
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-gray-200);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-gray-900);
  margin: 0;
}

.card-subtitle {
  font-size: var(--text-sm);
  color: var(--color-gray-600);
  margin-top: var(--space-1);
}
```

### Status Badge Components
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-success {
  background-color: rgba(76, 175, 80, 0.1);
  color: var(--color-success);
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.badge-warning {
  background-color: rgba(255, 152, 0, 0.1);
  color: var(--color-warning);
  border: 1px solid rgba(255, 152, 0, 0.2);
}

.badge-error {
  background-color: rgba(244, 67, 54, 0.1);
  color: var(--color-error);
  border: 1px solid rgba(244, 67, 54, 0.2);
}

.badge-pending {
  background-color: rgba(158, 158, 158, 0.1);
  color: var(--color-gray-600);
  border: 1px solid rgba(158, 158, 158, 0.2);
}
```

## Blockchain-Specific Styles

### Network Visualization
```css
.network-container {
  position: relative;
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--radius-2xl);
  overflow: hidden;
}

.network-svg {
  width: 100%;
  height: 100%;
}

.stakeholder-node {
  cursor: pointer;
  transition: all 0.3s ease;
}

.stakeholder-node:hover {
  filter: brightness(1.2);
  transform: scale(1.1);
}

.stakeholder-node circle {
  fill: var(--color-blockchain-node);
  stroke: white;
  stroke-width: 3;
}

.transaction-line {
  stroke: var(--color-blockchain-connection);
  stroke-width: 2;
  opacity: 0.7;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.transaction-flow {
  stroke-dasharray: 5, 5;
  animation: flow 3s linear infinite;
}

@keyframes flow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 20; }
}
```

### Timeline Styles
```css
.batch-timeline {
  position: relative;
  padding: var(--space-6);
}

.timeline-container {
  position: relative;
  padding-left: var(--space-8);
}

.timeline-stage {
  position: relative;
  margin-bottom: var(--space-8);
  cursor: pointer;
  transition: all 0.2s ease;
}

.timeline-stage:hover {
  transform: translateX(var(--space-2));
}

.stage-connector {
  position: absolute;
  left: -var(--space-8);
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-gray-300);
}

.connector-line.completed {
  background-color: var(--color-success);
}

.stage-node {
  position: absolute;
  left: -var(--space-10);
  top: var(--space-2);
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  box-shadow: var(--shadow-md);
}

.stage-content {
  background-color: white;
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-gray-200);
}

.stage-name {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-gray-900);
  margin-bottom: var(--space-1);
}

.stage-stakeholder {
  font-size: var(--text-sm);
  color: var(--color-gray-600);
  margin-bottom: var(--space-2);
}

.progress-pulse {
  position: absolute;
  left: -var(--space-10);
  top: var(--space-2);
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background-color: var(--color-warning);
  opacity: 0.3;
}
```

### Dashboard Layouts
```css
.dashboard-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
  background-color: var(--color-gray-50);
}

.dashboard-sidebar {
  background-color: white;
  border-right: 1px solid var(--color-gray-200);
  padding: var(--space-6);
}

.dashboard-main {
  padding: var(--space-6);
  overflow-y: auto;
}

.dashboard-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-gray-200);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.quick-actions {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.stats-card {
  background: linear-gradient(135deg, var(--color-primary-green), var(--color-primary-green-light));
  color: white;
  padding: var(--space-6);
  border-radius: var(--radius-xl);
}

.stats-number {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-2);
}

.stats-label {
  font-size: var(--text-sm);
  opacity: 0.9;
}
```

## Responsive Design

### Breakpoints
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Mobile-First Media Queries
```css
/* Mobile First Approach */
.dashboard-container {
  grid-template-columns: 1fr;
}

.dashboard-sidebar {
  display: none;
}

@media (min-width: 768px) {
  .dashboard-container {
    grid-template-columns: 250px 1fr;
  }
  
  .dashboard-sidebar {
    display: block;
  }
}

.timeline-container {
  padding-left: var(--space-4);
}

@media (min-width: 640px) {
  .timeline-container {
    padding-left: var(--space-8);
  }
}

.dashboard-grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Animation & Transitions

### Loading States
```css
@keyframes skeleton-loading {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: skeleton-loading 1.5s infinite;
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
```

### Interactive Feedback
```css
.interactive-element {
  transition: all 0.2s ease-in-out;
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.interactive-element:active {
  transform: translateY(0);
  box-shadow: var(--shadow-md);
}

.ripple-effect {
  position: relative;
  overflow: hidden;
}

.ripple-effect::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.ripple-effect:active::after {
  width: 300px;
  height: 300px;
}
```

This comprehensive styling guide provides the visual foundation for AgriChain's interface, ensuring consistent design patterns, responsive behavior, and engaging user interactions across all components and stakeholder roles.