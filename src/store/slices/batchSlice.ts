import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Batch, TimelineStage, BatchStatus } from '../../types';

interface BatchState {
  items: Batch[];
  currentBatch: Batch | null;
  timeline: TimelineStage[];
  loading: boolean;
  error: string | null;
  filters: {
    status?: BatchStatus;
    stage?: string;
    dateRange?: { start: Date; end: Date };
  };
}

const initialState: BatchState = {
  items: [],
  currentBatch: null,
  timeline: [],
  loading: false,
  error: null,
  filters: {},
};

const batchSlice = createSlice({
  name: 'batches',
  initialState,
  reducers: {
    fetchBatchesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBatchesSuccess: (state, action: PayloadAction<Batch[]>) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    },
    fetchBatchesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentBatch: (state, action: PayloadAction<Batch>) => {
      state.currentBatch = action.payload;
    },
    updateBatchStatus: (state, action: PayloadAction<{ id: string; status: BatchStatus }>) => {
      const batch = state.items.find(b => b.id === action.payload.id);
      if (batch) {
        batch.status = action.payload.status;
        batch.updatedAt = new Date();
      }
      if (state.currentBatch?.id === action.payload.id) {
        state.currentBatch.status = action.payload.status;
        state.currentBatch.updatedAt = new Date();
      }
    },
    addBatch: (state, action: PayloadAction<Batch>) => {
      state.items.unshift(action.payload);
    },
    setTimeline: (state, action: PayloadAction<TimelineStage[]>) => {
      state.timeline = action.payload;
    },
    updateTimelineStage: (state, action: PayloadAction<TimelineStage>) => {
      const index = state.timeline.findIndex(stage => stage.id === action.payload.id);
      if (index !== -1) {
        state.timeline[index] = action.payload;
      } else {
        state.timeline.push(action.payload);
      }
    },
    setFilters: (state, action: PayloadAction<typeof initialState.filters>) => {
      state.filters = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  fetchBatchesStart,
  fetchBatchesSuccess,
  fetchBatchesFailure,
  setCurrentBatch,
  updateBatchStatus,
  addBatch,
  setTimeline,
  updateTimelineStage,
  setFilters,
  clearError,
} = batchSlice.actions;

export default batchSlice.reducer;