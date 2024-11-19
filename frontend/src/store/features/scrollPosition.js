import { createSlice } from '@reduxjs/toolkit';

const scrollPositionSlice = createSlice({
  name: 'scrollPosition',
  initialState: {
    pricePosition: 0,
    servicePosition: 0,
  },
  reducers: {
    setPricePosition(state, { payload }) {
      state.pricePosition = payload
    },
    setServicePosition(state, { payload }) {
      state.servicePosition = payload
    }
  }
});

export const { setPricePosition, setServicePosition } = scrollPositionSlice.actions;
export default scrollPositionSlice.reducer;
