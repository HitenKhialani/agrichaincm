import React from 'react';
import { BatchStatus } from '../../types';

interface StatusBadgeProps {
  status: BatchStatus | string;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getBadgeClasses = (status: string) => {
    const baseClasses = 'badge';
    const statusClasses = {
      'completed': 'badge-success',
      'in-progress': 'badge-warning',
      'pending': 'badge-pending',
      'failed': 'badge-error',
      'rejected': 'badge-error',
      'passed': 'badge-success',
      'active': 'badge-success',
      'inactive': 'badge-pending',
    };
    
    return `${baseClasses} ${statusClasses[status as keyof typeof statusClasses] || 'badge-pending'} ${className}`;
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      'completed': '✅',
      'in-progress': '🔄',
      'pending': '⏳',
      'failed': '❌',
      'rejected': '❌',
      'passed': '✅',
      'active': '🟢',
      'inactive': '⚪',
    };
    
    return icons[status as keyof typeof icons] || '⏳';
  };

  return (
    <span className={getBadgeClasses(status)}>
      <span className="mr-1">{getStatusIcon(status)}</span>
      {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
    </span>
  );
};

export default StatusBadge;