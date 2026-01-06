import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NetworkState, StakeholderNode, Transaction } from '../../types';

const initialState: NetworkState = {
  nodes: [],
  transactions: [],
  demoMode: false,
  selectedNode: undefined,
};

const blockchainSlice = createSlice({
  name: 'blockchain',
  initialState,
  reducers: {
    setNodes: (state, action: PayloadAction<StakeholderNode[]>) => {
      state.nodes = action.payload;
    },
    updateNodeStatus: (state, action: PayloadAction<{ id: string; status: 'active' | 'inactive' | 'pending' }>) => {
      const node = state.nodes.find(n => n.id === action.payload.id);
      if (node) {
        node.status = action.payload.status;
      }
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.unshift(action.payload);
    },
    updateTransactionStatus: (state, action: PayloadAction<{ id: string; status: 'pending' | 'confirmed' | 'failed' }>) => {
      const transaction = state.transactions.find(t => t.id === action.payload.id);
      if (transaction) {
        transaction.status = action.payload.status;
      }
    },
    setDemoMode: (state, action: PayloadAction<boolean>) => {
      state.demoMode = action.payload;
    },
    setSelectedNode: (state, action: PayloadAction<string | undefined>) => {
      state.selectedNode = action.payload;
    },
    clearTransactions: (state) => {
      state.transactions = [];
    },
  },
});

export const {
  setNodes,
  updateNodeStatus,
  addTransaction,
  updateTransactionStatus,
  setDemoMode,
  setSelectedNode,
  clearTransactions,
} = blockchainSlice.actions;

export default blockchainSlice.reducer;