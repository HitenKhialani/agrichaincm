# AgriChain - Blockchain-Powered Agricultural Supply Chain

AgriChain is a comprehensive web application that demonstrates how blockchain technology can bring transparency, trust, and traceability to agricultural supply chains. Built with React, TypeScript, and modern web technologies, it provides an educational and interactive experience for understanding distributed ledger systems in agriculture.

## 🌟 Features

### Interactive Blockchain Education
- **Network Visualization**: Interactive web-like display showing stakeholders as nodes and transactions as flowing connections
- **Demo Mode**: Animated walkthrough of how a product batch moves through the entire supply chain
- **Educational Tooltips**: Hover over stakeholders to learn about their roles and responsibilities

### Role-Based Dashboards
- **Farmer Portal**: Create batches, track products, view payments, and manage quality data
- **Inspector Dashboard**: Manage inspections, upload certificates, and verify quality compliance
- **Admin Overview**: Monitor network health, manage users, and view system-wide analytics
- **Consumer Interface**: Scan QR codes and verify product authenticity with complete journey history

### Supply Chain Transparency
- **Batch Timeline**: Visual pipeline showing product journey from farm to table
- **Document Management**: Upload, verify, and track certificates, test results, and compliance documents
- **Quality Verification**: Independent inspector validation at each supply chain stage
- **Immutable Records**: Blockchain-backed transaction history with cryptographic verification

### Modern User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live notifications and status changes across the network
- **Accessibility**: WCAG 2.1 compliant with screen reader support and keyboard navigation
- **Performance**: Optimized loading with lazy components and efficient state management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser with ES2020 support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/agrichain.git
   cd agrichain
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see AgriChain in action

### Build for Production
```bash
npm run build
npm run preview
```

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React 18, TypeScript, Vite
- **State Management**: Redux Toolkit with RTK Query
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion for smooth interactions
- **Visualization**: D3.js for network diagrams and data visualization

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── blockchain/      # Network visualization and blockchain UI
│   ├── dashboards/      # Role-specific dashboard components
│   ├── layout/          # Navigation, headers, and layout components
│   ├── supply-chain/    # Timeline, batch tracking, and logistics UI
│   └── common/          # Shared components (buttons, badges, etc.)
├── store/              # Redux store and state management
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
└── utils/              # Helper functions and utilities
```

## 🎯 User Roles & Permissions

### Farmer
- Create and manage product batches
- Upload harvest documentation and quality data
- Track batch progress through supply chain
- View payment status and revenue analytics

### Inspector
- Review assigned batches for quality verification
- Upload inspection certificates and test results
- Approve or reject batches based on compliance standards
- Generate quality reports and compliance documentation

### Processor/Manufacturer
- Receive verified raw materials from farmers
- Document processing and manufacturing steps
- Upload finished product specifications
- Transfer processed goods to logistics providers

### Logistics Provider
- Manage custody transfers and transportation
- Track cold chain maintenance and delivery conditions
- Upload delivery receipts and shipping documentation
- Coordinate with customs and import/export agencies

### Bank/Financial Institution
- Process payments based on smart contract triggers
- Verify transaction completion and documentation
- Manage escrow and payment release conditions
- Provide financial analytics and reporting

### Consumer
- Scan QR codes to verify product authenticity
- View complete product journey from farm to table
- Access quality certificates and inspection reports
- Share verification results on social media

### System Administrator
- Monitor network health and performance
- Manage user accounts and permissions
- View system-wide analytics and audit trails
- Configure blockchain parameters and smart contracts

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_BLOCKCHAIN_NETWORK=testnet
VITE_ENABLE_DEMO_MODE=true
```

### Customization
- **Design System**: Modify `tailwind.config.js` for custom colors and spacing
- **Role Permissions**: Update role configurations in `src/types/index.ts`
- **Network Nodes**: Customize stakeholder types and connections in blockchain components

## 📱 Mobile Experience

AgriChain is fully responsive with mobile-optimized features:
- **Touch-First Timeline**: Swipe navigation between supply chain stages
- **QR Scanner**: Native camera integration for product verification
- **Offline Support**: Cache critical data for offline batch viewing
- **Progressive Web App**: Install as native app on mobile devices

## 🔒 Security & Privacy

### Data Protection
- **Role-Based Access**: Stakeholders only see relevant information
- **Encrypted Storage**: Sensitive data encrypted at rest and in transit
- **Audit Trails**: Complete logging of all system interactions
- **Privacy Controls**: GDPR-compliant data handling and user consent

### Blockchain Security
- **Immutable Records**: Cryptographically secured transaction history
- **Hash Verification**: Document integrity validation
- **Digital Signatures**: Authenticated stakeholder actions
- **Consensus Mechanisms**: Distributed validation of supply chain events

## 🌍 Sustainability Impact

AgriChain promotes sustainable agriculture through:
- **Organic Certification Tracking**: Verified organic compliance throughout supply chain
- **Carbon Footprint Monitoring**: Track transportation and processing emissions
- **Waste Reduction**: Optimize supply chain efficiency and reduce food waste
- **Fair Trade Support**: Transparent pricing and farmer compensation tracking

## 🤝 Contributing

We welcome contributions to AgriChain! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:
- Code style and standards
- Pull request process
- Issue reporting guidelines
- Development workflow

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Agricultural Partners**: Thanks to farmers and cooperatives who provided real-world insights
- **Blockchain Community**: Built on open-source blockchain technologies and standards
- **Design Inspiration**: UI/UX patterns inspired by leading supply chain and fintech applications
- **Educational Resources**: Incorporates best practices from blockchain education platforms

## 📞 Support

- **Documentation**: [docs.agrichain.com](https://docs.agrichain.com)
- **Community Forum**: [community.agrichain.com](https://community.agrichain.com)
- **Email Support**: support@agrichain.com
- **GitHub Issues**: [Report bugs and feature requests](https://github.com/your-org/agrichain/issues)

---

**AgriChain** - Building trust through transparency, one batch at a time. 🌱⛓️