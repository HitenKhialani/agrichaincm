import React from 'react';
import { motion } from 'framer-motion';
import { TimelineStage } from '../../types';
import StatusBadge from '../common/StatusBadge';

interface BatchTimelineProps {
  batchId: string;
  stages: TimelineStage[];
  onStageClick?: (stage: TimelineStage) => void;
}

const BatchTimeline: React.FC<BatchTimelineProps> = ({ 
  batchId, 
  stages, 
  onStageClick 
}) => {
  const getStageIcon = (stage: string) => {
    const icons = {
      'farm': '🚜',
      'inspection': '🔍',
      'processing': '🏭',
      'logistics': '🚛',
      'customs': '📋',
      'import': '🛳️',
      'retail': '🏪',
    };
    return icons[stage as keyof typeof icons] || '📦';
  };

  return (
    <div className="batch-timeline">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Batch {batchId}</h2>
          <p className="text-gray-600">
            {stages.filter(s => s.status === 'completed').length} of {stages.length} stages completed
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Progress</div>
          <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${(stages.filter(s => s.status === 'completed').length / stages.length) * 100}%` 
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="relative">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            className="timeline-stage flex items-start space-x-4 pb-8 last:pb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => onStageClick?.(stage)}
          >
            {/* Timeline Line */}
            {index < stages.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300"></div>
            )}

            {/* Stage Node */}
            <div className="relative z-10">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg
                ${stage.status === 'completed' ? 'bg-green-500' : 
                  stage.status === 'in-progress' ? 'bg-orange-500' : 
                  stage.status === 'failed' ? 'bg-red-500' : 'bg-gray-400'}
              `}>
                <span className="text-white text-lg">
                  {getStageIcon(stage.stage)}
                </span>
              </div>

              {/* Pulse animation for in-progress stages */}
              {stage.status === 'in-progress' && (
                <motion.div
                  className="absolute inset-0 w-12 h-12 rounded-full bg-orange-500 opacity-30"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              )}
            </div>

            {/* Stage Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    {stage.stage.replace('-', ' ')}
                  </h3>
                  <StatusBadge status={stage.status} />
                </div>

                <p className="text-gray-600 mb-2">{stage.stakeholderName}</p>

                {stage.timestamp && (
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(stage.timestamp).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {stage.documents.length} document{stage.documents.length !== 1 ? 's' : ''}
                  </div>
                  
                  {stage.transactionHash && (
                    <div className="text-xs text-gray-500 font-mono">
                      Hash: {stage.transactionHash.slice(0, 8)}...
                    </div>
                  )}
                </div>

                {stage.notes && (
                  <div className="mt-3 p-2 bg-gray-50 rounded text-sm text-gray-700">
                    {stage.notes}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BatchTimeline;