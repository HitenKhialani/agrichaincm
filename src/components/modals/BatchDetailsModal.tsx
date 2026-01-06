import React from 'react';
import { Batch } from '../../types';
import StatusBadge from '../common/StatusBadge';
import BatchTimeline from '../supply-chain/BatchTimeline';

interface BatchDetailsModalProps {
  batch: Batch;
  onClose: () => void;
}

const BatchDetailsModal: React.FC<BatchDetailsModalProps> = ({ batch, onClose }) => {
  const mockTimelineStages = [
    {
      id: '1',
      batchId: batch.id,
      stage: 'farm' as const,
      status: 'completed' as const,
      stakeholderId: '1',
      stakeholderName: 'GreenFields Farm',
      timestamp: batch.harvestDate,
      documents: [
        { id: '1', name: 'Harvest Certificate', type: 'certificate' as const, url: '', hash: '0x123', uploadedBy: '1', uploadedAt: new Date(), verified: true },
        { id: '2', name: 'Organic Certificate', type: 'certificate' as const, url: '', hash: '0x456', uploadedBy: '1', uploadedAt: new Date(), verified: true }
      ],
      transactionHash: batch.blockchainHash,
      notes: 'Harvest completed successfully with organic certification'
    },
    {
      id: '2',
      batchId: batch.id,
      stage: 'inspection' as const,
      status: batch.currentStage === 'inspection' ? 'in-progress' as const : 'completed' as const,
      stakeholderId: '2',
      stakeholderName: 'QualityCheck Inc.',
      timestamp: batch.currentStage === 'inspection' ? undefined : new Date(batch.harvestDate.getTime() + 2 * 24 * 60 * 60 * 1000),
      documents: [
        { id: '3', name: 'Quality Test Results', type: 'test-result' as const, url: '', hash: '0x789', uploadedBy: '2', uploadedAt: new Date(), verified: true }
      ],
      transactionHash: '0x' + Math.random().toString(16).substr(2, 40),
      notes: 'Quality inspection passed all organic standards'
    },
    {
      id: '3',
      batchId: batch.id,
      stage: 'processing' as const,
      status: batch.currentStage === 'processing' ? 'in-progress' as const : 
             ['logistics', 'customs', 'import', 'retail'].includes(batch.currentStage) ? 'completed' as const : 'pending' as const,
      stakeholderId: '3',
      stakeholderName: 'FreshProcess Ltd.',
      timestamp: batch.currentStage === 'processing' ? undefined : 
                ['logistics', 'customs', 'import', 'retail'].includes(batch.currentStage) ? 
                new Date(batch.harvestDate.getTime() + 5 * 24 * 60 * 60 * 1000) : undefined,
      documents: [],
      transactionHash: '0x' + Math.random().toString(16).substr(2, 40)
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{batch.id}</h2>
          <p className="text-gray-600">{batch.variety} • {batch.quantity} {batch.unit}</p>
        </div>
        <StatusBadge status={batch.status} />
      </div>

      {/* Batch Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">📦 Product Details</h3>
          <div className="space-y-1 text-sm">
            <p><span className="font-medium">Type:</span> {batch.productType}</p>
            <p><span className="font-medium">Variety:</span> {batch.variety}</p>
            <p><span className="font-medium">Quantity:</span> {batch.quantity} {batch.unit}</p>
            <p><span className="font-medium">Organic:</span> {batch.isOrganic ? '✅ Yes' : '❌ No'}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">📅 Timeline</h3>
          <div className="space-y-1 text-sm">
            <p><span className="font-medium">Harvest:</span> {batch.harvestDate.toLocaleDateString()}</p>
            <p><span className="font-medium">Created:</span> {batch.createdAt.toLocaleDateString()}</p>
            <p><span className="font-medium">Updated:</span> {batch.updatedAt.toLocaleDateString()}</p>
            <p><span className="font-medium">Current Stage:</span> <span className="capitalize">{batch.currentStage}</span></p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-2">🔗 Blockchain</h3>
          <div className="space-y-1 text-sm">
            <p><span className="font-medium">Hash:</span></p>
            <code className="text-xs bg-white px-2 py-1 rounded border break-all">
              {batch.blockchainHash}
            </code>
            <p><span className="font-medium">QR Code:</span> {batch.qrCode}</p>
            <p className="text-green-600 font-medium">✅ Verified on Chain</p>
          </div>
        </div>
      </div>

      {/* Supply Chain Timeline */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <BatchTimeline 
          batchId={batch.id}
          stages={mockTimelineStages}
          onStageClick={(stage) => {
            // Could open stage details modal
            console.log('Stage clicked:', stage);
          }}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-3">
          <button className="btn btn-outline">
            <span className="mr-2">📄</span>
            Download QR Code
          </button>
          <button className="btn btn-outline">
            <span className="mr-2">📋</span>
            Export Report
          </button>
          <button className="btn btn-outline">
            <span className="mr-2">🔗</span>
            View on Blockchain
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

export default BatchDetailsModal;