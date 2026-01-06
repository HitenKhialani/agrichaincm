import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleSidebar } from '../../store/slices/uiSlice';
import { logout } from '../../store/slices/authSlice';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const sidebarOpen = useSelector((state: RootState) => (state.ui as any).sidebarOpen ?? true);

  const handleLogout = () => {
    dispatch(logout());
  };

  const getMenuDescription = (label: string) => {
    const descriptions = {
      'Batches': '• All your product batches\n• Track progress and status\n• View blockchain records\n• Download QR codes',
      'Inspections': '• Quality inspection history\n• Certification documents\n• Inspector feedback\n• Compliance reports',
      'Documents': '• Upload certificates\n• Manage harvest photos\n• Store quality reports\n• Blockchain verification',
      'Blockchain': '• Transaction history\n• Network visualization\n• Hash verification\n• Smart contract status',
      'Analytics': '• Revenue tracking\n• Quality metrics\n• Performance insights\n• Market trends'
    };
    return descriptions[label as keyof typeof descriptions] || '• Feature coming soon\n• Enhanced functionality\n• Real-time updates';
  };

  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '📦', label: 'Batches', active: false },
    { icon: '🔍', label: 'Inspections', active: false },
    { icon: '📋', label: 'Documents', active: false },
    { icon: '⛓️', label: 'Blockchain', active: false },
    { icon: '📈', label: 'Analytics', active: false },
  ];

  return (
    <motion.div
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg z-30 transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-16'
      }`}
      initial={false}
      animate={{ width: sidebarOpen ? 256 : 64 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {sidebarOpen && (
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <h1 className="text-xl font-bold text-gradient">AgriChain</h1>
          </motion.div>
        )}
        
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-gray-600">
            {sidebarOpen ? '←' : '→'}
          </span>
        </button>
      </div>

      {/* User Profile */}
      {user && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600 capitalize">{user.role}</p>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  if (item.label === 'Dashboard') return; // Already on dashboard
                  alert(`🔄 Navigating to ${item.label}\n\nThis would show:\n${getMenuDescription(item.label)}`);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-primary-50 text-primary-600 border border-primary-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {sidebarOpen && (
                  <motion.span
                    className="font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <span className="text-lg">🚪</span>
          {sidebarOpen && (
            <motion.span
              className="font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Logout
            </motion.span>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;