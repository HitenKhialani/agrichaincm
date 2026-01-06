import React from 'react';
import { motion } from 'framer-motion';

const InspectorDashboard: React.FC = () => {
  const pendingInspections = [
    {
      id: 'AG2024-003',
      product: 'Carrots',
      farmer: 'GreenFields Farm',
      dueDate: 'Today',
      priority: 'high',
    },
    {
      id: 'AG2024-005',
      product: 'Apples',
      farmer: 'OrchardCorp',
      dueDate: 'Tomorrow',
      priority: 'medium',
    },
  ];

  const completedInspections = [
    {
      id: 'AG2024-001',
      product: 'Tomatoes',
      result: 'Passed',
      date: 'Jan 15',
    },
    {
      id: 'AG2024-002',
      product: 'Lettuce',
      result: 'Passed',
      date: 'Jan 14',
    },
    {
      id: 'AG2024-004',
      product: 'Peppers',
      result: 'Failed',
      date: 'Jan 13',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="card bg-gradient-secondary text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Pending Inspections</p>
              <p className="text-3xl font-bold">{pendingInspections.length}</p>
            </div>
            <span className="text-4xl">🔍</span>
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Completed This Week</p>
              <p className="text-3xl font-bold text-gray-900">5</p>
            </div>
            <span className="text-4xl">✅</span>
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Pass Rate</p>
              <p className="text-3xl font-bold text-gray-900">92%</p>
            </div>
            <span className="text-4xl">📊</span>
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Certificates Issued</p>
              <p className="text-3xl font-bold text-gray-900">47</p>
            </div>
            <span className="text-4xl">📜</span>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => alert('🔍 Start Inspection\n\nSelect a batch to inspect:\n• AG2024-003 - Carrots (Due: Today)\n• AG2024-005 - Apples (Due: Tomorrow)\n\nInspection includes:\n✅ Visual quality check\n✅ Pesticide residue test\n✅ Organic compliance\n✅ Documentation review')}
            className="btn btn-primary"
          >
            <span className="mr-2">🔍</span>
            Start Inspection
          </button>
          <button 
            onClick={() => alert('📋 Your Certificates\n\n📊 This Month: 12 issued\n✅ Pass Rate: 92%\n📄 Recent Certificates:\n• CERT-2024-001 - Tomatoes ✅\n• CERT-2024-002 - Lettuce ✅\n• CERT-2024-003 - Peppers ❌')}
            className="btn btn-outline"
          >
            <span className="mr-2">📋</span>
            View Certificates
          </button>
          <button 
            onClick={() => alert('📊 Inspection Reports\n\n📈 Monthly Summary:\n• Total Inspections: 47\n• Pass Rate: 92%\n• Average Score: 4.2/5\n• Top Issues: Packaging (15%)\n\n📋 Generate detailed reports for compliance tracking')}
            className="btn btn-outline"
          >
            <span className="mr-2">📊</span>
            Reports
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Inspections */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Pending Inspections ({pendingInspections.length})
          </h2>
          <div className="space-y-4">
            {pendingInspections.map((inspection) => (
              <div
                key={inspection.id}
                className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200 cursor-pointer hover:bg-orange-100 transition-colors"
                onClick={() => alert(`🔍 Inspection Details: ${inspection.id}\n\n🍅 Product: ${inspection.product}\n🚜 Farmer: ${inspection.farmer}\n📅 Due: ${inspection.dueDate}\n⚠️ Priority: ${inspection.priority}\n\n📋 Inspection Checklist:\n✅ Visual quality assessment\n✅ Pesticide residue testing\n✅ Organic compliance check\n✅ Documentation review\n\n🕒 Estimated time: 2-3 hours`)}
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {inspection.id} | {inspection.product}
                  </h3>
                  <p className="text-sm text-gray-600">{inspection.farmer}</p>
                  <p className="text-sm text-orange-600 font-medium">
                    Due: {inspection.dueDate}
                  </p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`🚀 Starting Inspection: ${inspection.id}\n\n📋 Pre-inspection Setup:\n• Review farmer documentation\n• Prepare testing equipment\n• Schedule site visit\n• Notify quality team\n\n⏱️ Estimated completion: 2-3 hours`);
                  }}
                  className="btn btn-sm btn-primary"
                >
                  Start
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Completed Inspections */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Recent Completions
          </h2>
          <div className="space-y-4">
            {completedInspections.map((inspection) => (
              <div
                key={inspection.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {inspection.id} | {inspection.product}
                  </h3>
                  <p className="text-sm text-gray-600">{inspection.date}</p>
                </div>
                <span
                  className={`badge ${
                    inspection.result === 'Passed'
                      ? 'badge-success'
                      : 'badge-error'
                  }`}
                >
                  {inspection.result}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InspectorDashboard;