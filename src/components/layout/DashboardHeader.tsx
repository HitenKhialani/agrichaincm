import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Modal from '../common/Modal';
import RoleSwitcherModal from '../modals/RoleSwitcherModal';

const DashboardHeader: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600">
            {user?.organization} • {user?.location}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">🔔</span>
            </button>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>

          <button
            onClick={() => setShowRoleSwitcher(true)}
            className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full hover:bg-primary-200 transition-colors"
          >
            Switch Role
          </button>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Wallet:</span>
            <code 
              className="bg-gray-100 px-2 py-1 rounded text-xs cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => alert(`🔗 Blockchain Wallet\n\nAddress: ${user?.walletAddress}\n\n💰 Balance: 2.45 ETH\n📊 Transactions: 156\n🔒 Security: Multi-signature enabled\n\n⛓️ Connected to AgriChain Network`)}
            >
              {user?.walletAddress.slice(0, 6)}...{user?.walletAddress.slice(-4)}
            </code>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={showRoleSwitcher}
        onClose={() => setShowRoleSwitcher(false)}
        title=""
        size="xl"
      >
        <RoleSwitcherModal onClose={() => setShowRoleSwitcher(false)} />
      </Modal>

      <Modal
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
        title="Notifications"
        size="md"
      >
        <NotificationPanel />
      </Modal>
    </header>
  );
};

// Notification Panel Component
const NotificationPanel: React.FC = () => (
  <div className="space-y-4">
    {[
      {
        icon: '💰',
        title: 'Payment Received',
        message: 'Payment of $2,450 received for batch AG2024-001',
        time: '2 hours ago',
        type: 'success'
      },
      {
        icon: '✅',
        title: 'Inspection Completed',
        message: 'Quality inspection passed for batch AG2024-003',
        time: '5 hours ago',
        type: 'success'
      },
      {
        icon: '📋',
        title: 'Certificate Available',
        message: 'New organic certificate ready for download',
        time: '1 day ago',
        type: 'info'
      },
      {
        icon: '🔄',
        title: 'Batch Status Update',
        message: 'AG2024-002 moved to logistics stage',
        time: '2 days ago',
        type: 'info'
      }
    ].map((notification, index) => (
      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <span className="text-xl">{notification.icon}</span>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900">{notification.title}</h4>
          <p className="text-sm text-gray-600">{notification.message}</p>
          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
        </div>
      </div>
    ))}
    
    <div className="text-center pt-4 border-t border-gray-200">
      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
        View All Notifications
      </button>
    </div>
  </div>
);

export default DashboardHeader;