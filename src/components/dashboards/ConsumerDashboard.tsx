import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../common/Modal';
import ProductVerificationModal from '../modals/ProductVerificationModal';

const ConsumerDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scanMode, setScanMode] = useState<'camera' | 'manual'>('manual');
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const recentScans = [
    {
      id: 'AG2024-001',
      product: 'Organic Tomato Sauce',
      brand: 'FreshFields',
      scanDate: '2024-01-20',
      trustScore: 5,
      origin: 'California, USA',
    },
    {
      id: 'AG2024-007',
      product: 'Baby Spinach',
      brand: 'GreenLeaf',
      scanDate: '2024-01-18',
      trustScore: 4,
      origin: 'Oregon, USA',
    },
    {
      id: 'AG2024-012',
      product: 'Organic Apples',
      brand: 'OrchardFresh',
      scanDate: '2024-01-15',
      trustScore: 5,
      origin: 'Washington, USA',
    },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const validBatches = ['AG2024-001', 'AG2024-002'];
      
      if (validBatches.includes(searchQuery.trim())) {
        setVerificationResult(searchQuery.trim());
      } else {
        setVerificationResult('NOT_FOUND');
      }
    }
  };

  const renderStars = (score: number) => {
    return '⭐'.repeat(score) + '☆'.repeat(5 - score);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        className="card bg-gradient-to-br from-green-500 to-green-600 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Verify Your Food's Journey</h1>
          <p className="text-green-100 mb-6">
            Scan QR codes or enter batch IDs to see complete product transparency
          </p>
          
          {/* QR Scanner/Search Interface */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex justify-center mb-4">
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setScanMode('camera')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    scanMode === 'camera'
                      ? 'bg-white text-green-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  📱 Camera Scan
                </button>
                <button
                  onClick={() => setScanMode('manual')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    scanMode === 'manual'
                      ? 'bg-white text-green-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  ⌨️ Manual Entry
                </button>
              </div>
            </div>

            {scanMode === 'camera' ? (
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <span className="text-6xl">📱</span>
                    <p className="text-white mt-2">Camera Scanner</p>
                    <p className="text-green-100 text-sm">Point at QR code</p>
                  </div>
                </div>
                <button 
                  onClick={() => alert('📱 Camera Scanner\n\n🔍 Point your camera at the QR code on the product package\n\n📦 Supported products:\n• Fresh produce\n• Packaged foods\n• Organic products\n• Processed goods\n\n💡 Tip: Make sure the QR code is clearly visible and well-lit!')}
                  className="btn bg-white text-green-600 hover:bg-gray-100"
                >
                  Enable Camera
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Batch ID (e.g., AG2024-001)"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  onClick={handleSearch}
                  className="btn bg-white text-green-600 hover:bg-gray-100"
                >
                  Search
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Recent Scans */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Verifications</h2>
          <span className="text-sm text-gray-600">{recentScans.length} products scanned</span>
        </div>

        <div className="space-y-4">
          {recentScans.map((scan, index) => (
            <motion.div
              key={scan.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => setVerificationResult(scan.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-semibold">
                    {scan.product.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{scan.product}</h3>
                  <p className="text-sm text-gray-600">
                    {scan.brand} • {scan.origin}
                  </p>
                  <p className="text-xs text-gray-500">
                    Scanned on {new Date(scan.scanDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">Trust Score</span>
                </div>
                <div className="text-lg">{renderStars(scan.trustScore)}</div>
                <p className="text-xs text-gray-600">{scan.id}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How It Works */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">How Product Verification Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">1. Scan or Search</h3>
            <p className="text-sm text-gray-600">
              Use your camera to scan the QR code on product packaging or manually enter the batch ID
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⛓️</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">2. Blockchain Lookup</h3>
            <p className="text-sm text-gray-600">
              Our system queries the blockchain to retrieve the complete, immutable history of your product
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">3. View Journey</h3>
            <p className="text-sm text-gray-600">
              See every step from farm to table, including quality certifications and verification badges
            </p>
          </div>
        </div>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">What to Look For</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Trust Indicators</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-700">Verified organic certification</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-700">Complete supply chain documentation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-700">Third-party quality inspections</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <span className="text-sm text-gray-700">Blockchain-verified timestamps</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Warning Signs</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-red-500">❌</span>
                <span className="text-sm text-gray-700">Missing documentation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">❌</span>
                <span className="text-sm text-gray-700">Failed quality inspections</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500">⚠️</span>
                <span className="text-sm text-gray-700">Pending verifications</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500">⚠️</span>
                <span className="text-sm text-gray-700">Incomplete supply chain data</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Verification Modal */}
      <Modal
        isOpen={!!verificationResult}
        onClose={() => setVerificationResult(null)}
        title=""
        size="xl"
      >
        {verificationResult && (
          <ProductVerificationModal 
            batchId={verificationResult}
            onClose={() => setVerificationResult(null)} 
          />
        )}
      </Modal>
    </div>
  );
};

export default ConsumerDashboard;