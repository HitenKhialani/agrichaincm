import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { motion } from 'framer-motion';
import { Batch } from '../../types';
import Sidebar from '../layout/Sidebar';
import DashboardHeader from '../layout/DashboardHeader';

// Inline FarmerDashboard component
const FarmerDashboard: React.FC = () => {
  const batches = useSelector((state: RootState) => (state.batches as any).items || []);

  const getStatusBadge = (status: string) => {
    const badges: Record<string, string> = {
      'completed': 'badge-success',
      'in-progress': 'badge-warning',
      'pending': 'badge-pending',
      'failed': 'badge-error',
    };
    return badges[status] || 'badge-pending';
  };

  const getStageIcon = (stage: string) => {
    const icons: Record<string, string> = {
      'farm': '🚜',
      'inspection': '🔍',
      'processing': '🏭',
      'logistics': '🚛',
      'customs': '📋',
      'import': '🛳️',
      'retail': '🏪',
    };
    return icons[stage] || '📦';
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="card bg-gradient-primary text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Active Batches</p>
              <p className="text-3xl font-bold">{batches.length}</p>
            </div>
            <span className="text-4xl">📦</span>
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">$4,650</p>
            </div>
            <span className="text-4xl">💰</span>
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Organic Certified</p>
              <p className="text-3xl font-bold text-gray-900">
                {batches.filter((b: Batch) => b.isOrganic).length}
              </p>
            </div>
            <span className="text-4xl">🌱</span>
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Quality Score</p>
              <p className="text-3xl font-bold text-gray-900">4.8/5</p>
            </div>
            <span className="text-4xl">⭐</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => alert('Create batch modal')}
            className="btn btn-primary"
          >
            <span className="mr-2">➕</span>
            Create New Batch
          </button>
          <button 
            onClick={() => alert('Payment dashboard coming soon!')}
            className="btn btn-outline"
          >
            <span className="mr-2">📋</span>
            View Payments
          </button>
          <button 
            onClick={() => alert('Analytics dashboard coming soon!')}
            className="btn btn-outline"
          >
            <span className="mr-2">📊</span>
            Analytics
          </button>
        </div>
      </motion.div>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Active Batches</h2>
        </div>

        <div className="space-y-4">
          {batches.map((batch: Batch, index: number) => (
            <motion.div
              key={batch.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => console.log(batch)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{getStageIcon(batch.currentStage)}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {batch.id} | {batch.variety}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {batch.quantity} {batch.unit} • {batch.currentStage}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className={`badge ${getStatusBadge(batch.status)}`}>
                  {batch.status}
                </span>
                {batch.isOrganic && (
                  <span className="badge badge-success">Organic</span>
                )}
                <button className="text-gray-400 hover:text-gray-600">
                  →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Inline InspectorDashboard component
const InspectorDashboard: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">Inspector Dashboard</h2>
    <p className="text-gray-600">Inspection features coming soon</p>
  </div>
);

// Inline AdminDashboard component
const AdminDashboard: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
    <p className="text-gray-600">Admin features coming soon</p>
  </div>
);

// Inline ConsumerDashboard component
const ConsumerDashboard: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">Consumer Dashboard</h2>
    <p className="text-gray-600">Consumer features coming soon</p>
  </div>
);

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const sidebarOpen = useSelector((state: RootState) => (state.ui as any).sidebarOpen ?? true);

  const renderDashboard = () => {
    if (!user) return null;

    switch (user.role) {
      case 'farmer':
        return <FarmerDashboard />;
      case 'inspector':
        return <InspectorDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'consumer':
        return <ConsumerDashboard />;
      default:
        return <FarmerDashboard />; // Default fallback
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarOpen ? 'ml-64' : 'ml-16'
      }`}>
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;