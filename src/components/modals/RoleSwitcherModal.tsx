import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';
import { UserRole } from '../../types';

interface RoleSwitcherModalProps {
  onClose: () => void;
}

const RoleSwitcherModal: React.FC<RoleSwitcherModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const roles = [
    {
      role: 'farmer' as UserRole,
      icon: '🚜',
      title: 'Farmer',
      description: 'Manage batches, track revenue, and upload harvest documentation',
      organization: 'GreenFields Farm',
      location: 'California, USA'
    },
    {
      role: 'inspector' as UserRole,
      icon: '🔍',
      title: 'Quality Inspector',
      description: 'Verify quality, issue certificates, and ensure compliance',
      organization: 'QualityCheck Inc.',
      location: 'California, USA'
    },
    {
      role: 'admin' as UserRole,
      icon: '📋',
      title: 'System Administrator',
      description: 'Monitor network health, manage users, and oversee operations',
      organization: 'AgriChain Network',
      location: 'Global Operations'
    },
    {
      role: 'consumer' as UserRole,
      icon: '👤',
      title: 'Consumer',
      description: 'Scan products, verify authenticity, and view supply chain history',
      organization: 'General Public',
      location: 'Worldwide'
    }
  ];

  const handleRoleSelect = (selectedRole: UserRole, organization: string, location: string) => {
    const mockUser = {
      id: Math.random().toString(),
      name: `Demo ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`,
      email: `demo-${selectedRole}@agrichain.com`,
      role: selectedRole,
      organization,
      location,
      walletAddress: `0x${Math.random().toString(16).substr(2, 40)}`,
      createdAt: new Date(),
    };

    dispatch(loginSuccess({ 
      user: mockUser, 
      token: 'mock-jwt-token' 
    }));

    onClose();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Role</h2>
        <p className="text-gray-600">
          Experience AgriChain from different stakeholder perspectives
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((roleData, index) => (
          <motion.div
            key={roleData.role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer group"
            onClick={() => handleRoleSelect(roleData.role, roleData.organization, roleData.location)}
          >
            <div className="text-center">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {roleData.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {roleData.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {roleData.description}
              </p>
              <div className="text-sm text-gray-500">
                <p className="font-medium">{roleData.organization}</p>
                <p>{roleData.location}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center text-primary-600 group-hover:text-primary-700">
                <span className="text-sm font-medium">Switch to this role</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onClose}
          className="btn btn-outline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RoleSwitcherModal;