// Core Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization: string;
  location: string;
  walletAddress: string;
  createdAt: Date;
}

export type UserRole = 
  | 'farmer' 
  | 'inspector' 
  | 'processor' 
  | 'logistics' 
  | 'bank' 
  | 'importer' 
  | 'admin' 
  | 'consumer';

export interface Batch {
  id: string;
  productType: string;
  variety: string;
  quantity: number;
  unit: string;
  harvestDate: Date;
  isOrganic: boolean;
  farmerId: string;
  currentStage: BatchStage;
  status: BatchStatus;
  qrCode: string;
  blockchainHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BatchStage = 
  | 'farm' 
  | 'inspection' 
  | 'processing' 
  | 'logistics' 
  | 'customs' 
  | 'import' 
  | 'retail';

export type BatchStatus = 
  | 'pending' 
  | 'in-progress' 
  | 'completed' 
  | 'failed' 
  | 'rejected';

export interface TimelineStage {
  id: string;
  batchId: string;
  stage: BatchStage;
  status: BatchStatus;
  stakeholderId: string;
  stakeholderName: string;
  timestamp?: Date;
  documents: Document[];
  transactionHash?: string;
  notes?: string;
}

export interface Document {
  id: string;
  name: string;
  type: DocumentType;
  url: string;
  hash: string;
  uploadedBy: string;
  uploadedAt: Date;
  verified: boolean;
}

export type DocumentType = 
  | 'certificate' 
  | 'test-result' 
  | 'photo' 
  | 'contract' 
  | 'receipt' 
  | 'permit';

export interface Transaction {
  id: string;
  from: string;
  to: string;
  batchId: string;
  type: TransactionType;
  timestamp: Date;
  hash: string;
  status: 'pending' | 'confirmed' | 'failed';
  gasUsed?: number;
}

export type TransactionType = 
  | 'batch-creation' 
  | 'stage-update' 
  | 'document-upload' 
  | 'quality-verification' 
  | 'custody-transfer';

export interface StakeholderNode {
  id: string;
  type: UserRole;
  name: string;
  position: { x: number; y: number };
  status: 'active' | 'inactive' | 'pending';
  connections: string[];
}

export interface NetworkState {
  nodes: StakeholderNode[];
  transactions: Transaction[];
  demoMode: boolean;
  selectedNode?: string;
}

export interface Permission {
  action: 'create' | 'read' | 'update' | 'delete';
  resource: string;
  allowed: boolean;
}

export interface RoleConfig {
  name: string;
  icon: string;
  permissions: Permission[];
  dashboardComponents: string[];
  quickActions: string[];
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Form Types
export interface CreateBatchForm {
  productType: string;
  variety: string;
  quantity: number;
  unit: string;
  harvestDate: string;
  isOrganic: boolean;
  location: string;
  growingMethod: string;
  documents: File[];
}

export interface ProfileForm {
  name: string;
  email: string;
  organization: string;
  location: string;
  role: UserRole;
  licenseNumber?: string;
}

// UI State Types
export interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  loading: boolean;
  error: string | null;
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}