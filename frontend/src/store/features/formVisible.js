import { createSlice } from '@reduxjs/toolkit';

const formVisibleSlice = createSlice({
  name: 'form',
  initialState: {
    isQuoteFormVisible: false,
    isServiceSelectionVisible: false,
    isOrderConfirmVisible: false,
    isThankYouVisible: false
  },
  reducers: {
    showQuoteForm(state) {
      state.isQuoteFormVisible = true;
      state.isServiceSelectionVisible = false;
    },
    showServiceSelection(state) {
      state.isQuoteFormVisible = false;
      state.isServiceSelectionVisible = true;
      state.isOrderConfirmVisible = false;

    },
    hideAllForms(state) {
      state.isQuoteFormVisible = false;
      state.isServiceSelectionVisible = false;
      state.isOrderConfirmVisible = false;
      state.isThankYouVisible = false;
    },
    showThankYou(state) {
      state.isThankYouVisible = true;
      state.isOrderConfirmVisible = false;
    },
    showOrderConfirm(state) {
      state.isServiceSelectionVisible = false;
      state.isOrderConfirmVisible = true;
    }
  }
});

export const { showQuoteForm, showServiceSelection, showThankYou, showOrderConfirm, hideAllForms } = formVisibleSlice.actions;
export default formVisibleSlice.reducer;
