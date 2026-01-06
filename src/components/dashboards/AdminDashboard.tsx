import React from 'react';
import { motion } from 'framer-motion';
import NetworkVisualization from '../blockchain/NetworkVisualization';

const AdminDashboard: React.FC = () => {
  const networkStats = {
    activeStakeholders: 47,
    activeBatches: 23,
    transactionsToday: 156,
    networkHealth: 'Good',
  };

  const recentActivity = [
    {
      type: 'user',
      message: 'New farmer registered: SunnyAcres Farm',
      time: '10 minutes ago',
      icon: '👤',
    },
    {
      type: 'batch',
      message: 'Batch AG2024-006 completed full cycle',
      time: '1 hour ago',
      icon: '📦',
    },
    {
      type: 'alert',
      message: 'Quality alert: High rejection rate at ProcessCorp',
      time: '2 hours ago',
      icon: '⚠️',
    },
    {
      type: 'transaction',
      message: 'Smart contract executed for batch AG2024-005',
      time: '3 hours ago',
      icon: '⛓️',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Network Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="card bg-gradient-to-br from-purple-500 to-purple-600 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Active Stakeholders</p>
              <p className="text-3xl font-bold">{networkStats.activeStakeholders}</p>
            </div>
            <span className="text-4xl">👥</span>
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
              <p className="text-gray-600">Active Batches</p>
              <p className="text-3xl font-bold text-gray-900">{networkStats.activeBatches}</p>
            </div>
            <span className="text-4xl">📦</span>
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
              <p className="text-gray-600">Transactions Today</p>
              <p className="text-3xl font-bold text-gray-900">{networkStats.transactionsToday}</p>
            </div>
            <span className="text-4xl">⛓️</span>
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
              <p className="text-gray-600">Network Health</p>
              <p className="text-3xl font-bold text-green-600">{networkStats.networkHealth}</p>
            </div>
            <span className="text-4xl">✅</span>
          </div>
        </motion.div>
      </div>

      {/* System Actions */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">System Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => alert('👥 User Management\n\n📊 Current Users: 47\n• Farmers: 23\n• Inspectors: 12\n• Processors: 8\n• Logistics: 4\n\n🔧 Actions Available:\n• Add new users\n• Manage permissions\n• View activity logs\n• Suspend accounts')}
            className="btn btn-primary"
          >
            <span className="mr-2">👥</span>
            Manage Users
          </button>
          <button 
            onClick={() => alert('🔍 Audit Trail\n\n📋 Recent Activity:\n• 156 transactions today\n• 23 new batches created\n• 12 inspections completed\n• 8 quality certificates issued\n\n🔗 All activities recorded on blockchain with immutable timestamps')}
            className="btn btn-outline"
          >
            <span className="mr-2">🔍</span>
            Audit Trail
          </button>
          <button 
            onClick={() => alert('⚙️ System Settings\n\n🔧 Configuration Options:\n• Blockchain network settings\n• User role permissions\n• Quality standards\n• Notification preferences\n• API rate limits\n• Security policies')}
            className="btn btn-outline"
          >
            <span className="mr-2">⚙️</span>
            System Settings
          </button>
          <button 
            onClick={() => alert('📊 Network Analytics\n\n📈 Performance Metrics:\n• Network uptime: 99.9%\n• Transaction throughput: 150 TPS\n• Average response time: 142ms\n• Storage usage: 67% (2.1GB)\n• Active connections: 47\n• Error rate: 0.01%')}
            className="btn btn-outline"
          >
            <span className="mr-2">📊</span>
            Network Analytics
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Network Activity */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Network Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="text-gray-900">{activity.message}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Health */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">System Health</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Blockchain Sync</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Synced</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">API Response Time</span>
              <span className="text-sm text-gray-900">142ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Database Status</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Healthy</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Storage Usage</span>
              <span className="text-sm text-gray-900">67% (2.1GB)</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Network Visualization */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Network Visualization</h2>
        <div className="bg-gradient-hero rounded-xl p-6">
          <NetworkVisualization />
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;