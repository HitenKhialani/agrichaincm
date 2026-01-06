import React from 'react';
import { motion } from 'framer-motion';

interface ProductVerificationModalProps {
  batchId: string;
  onClose: () => void;
}

const ProductVerificationModal: React.FC<ProductVerificationModalProps> = ({ batchId, onClose }) => {
  const mockProductData = {
    'AG2024-001': {
      product: 'Organic Tomato Sauce',
      brand: 'FreshFields',
      farmer: 'GreenFields Farm, California',
      trustScore: 5,
      organic: true,
      certificates: 3,
      journey: [
        {
          stage: 'Farm',
          icon: '🚜',
          date: 'Jan 10, 2024',
          location: 'GreenFields Farm, California',
          status: 'Harvested with organic certification',
          verified: true
        },
        {
          stage: 'Quality Check',
          icon: '🔍',
          date: 'Jan 12, 2024',
          location: 'QualityCheck Inc.',
          status: 'Grade A - No pesticides detected',
          verified: true
        },
        {
          stage: 'Processing',
          icon: '🏭',
          date: 'Jan 15, 2024',
          location: 'FreshProcess Ltd.',
          status: 'Made into tomato sauce - No additives',
          verified: true
        },
        {
          stage: 'Shipping',
          icon: '🚛',
          date: 'Jan 18, 2024',
          location: 'FastTrack Logistics',
          status: 'Cold chain maintained throughout',
          verified: true
        },
        {
          stage: 'Store',
          icon: '🏪',
          date: 'Jan 25, 2024',
          location: 'FreshMart Supermarket',
          status: 'Final quality check completed',
          verified: true
        }
      ]
    },
    'AG2024-002': {
      product: 'Baby Spinach',
      brand: 'GreenLeaf',
      farmer: 'SunnyAcres Farm, Oregon',
      trustScore: 4,
      organic: true,
      certificates: 2,
      journey: [
        {
          stage: 'Farm',
          icon: '🚜',
          date: 'Jan 12, 2024',
          location: 'SunnyAcres Farm, Oregon',
          status: 'Harvested fresh baby spinach',
          verified: true
        },
        {
          stage: 'Quality Check',
          icon: '🔍',
          date: 'Jan 13, 2024',
          location: 'QualityCheck Inc.',
          status: 'Grade A - Organic standards met',
          verified: true
        },
        {
          stage: 'Packaging',
          icon: '📦',
          date: 'Jan 14, 2024',
          location: 'FreshPack Co.',
          status: 'Packaged in biodegradable containers',
          verified: true
        },
        {
          stage: 'Store',
          icon: '🏪',
          date: 'Jan 16, 2024',
          location: 'Local Grocery Chain',
          status: 'Ready for purchase',
          verified: true
        }
      ]
    }
  };

  const productData = mockProductData[batchId as keyof typeof mockProductData];

  if (!productData) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">❌</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Not Found</h3>
        <p className="text-gray-600 mb-6">
          Batch ID "{batchId}" was not found in our blockchain records.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-blue-900 mb-2">💡 Try These Sample IDs:</h4>
          <div className="space-y-1 text-sm text-blue-800">
            <p>• AG2024-001 - Organic Tomato Sauce</p>
            <p>• AG2024-002 - Baby Spinach</p>
          </div>
        </div>
        <button onClick={onClose} className="btn btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  const renderStars = (score: number) => {
    return '⭐'.repeat(score) + '☆'.repeat(5 - score);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Product Header */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{productData.product}</h2>
        <p className="text-gray-600">Batch ID: {batchId}</p>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <div className="text-2xl">{renderStars(productData.trustScore)}</div>
          <span className="text-lg font-semibold">Trust Score: {productData.trustScore}/5</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🌱</div>
          <h3 className="font-semibold text-green-900">Organic Certified</h3>
          <p className="text-sm text-green-700">{productData.certificates} certificates</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🚜</div>
          <h3 className="font-semibold text-blue-900">Farm Origin</h3>
          <p className="text-sm text-blue-700">{productData.farmer}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">⛓️</div>
          <h3 className="font-semibold text-purple-900">Blockchain Verified</h3>
          <p className="text-sm text-purple-700">All records immutable</p>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">🛤️ Product Journey</h3>
        <div className="space-y-4">
          {productData.journey.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-green-200">
                  <span className="text-xl">{step.icon}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-900">{step.stage}</h4>
                  {step.verified && <span className="text-green-600 text-sm">✅ Verified</span>}
                </div>
                <p className="text-sm text-gray-600 mb-1">{step.location}</p>
                <p className="text-sm text-gray-800">{step.status}</p>
                <p className="text-xs text-gray-500 mt-1">{step.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <button className="btn btn-outline btn-sm">
            <span className="mr-2">📄</span>
            View Certificates
          </button>
          <button className="btn btn-outline btn-sm">
            <span className="mr-2">🔗</span>
            Blockchain Details
          </button>
          <button className="btn btn-outline btn-sm">
            <span className="mr-2">📱</span>
            Share Verification
          </button>
        </div>
        
        <button
          onClick={onClose}
          className="btn btn-primary"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductVerificationModal;