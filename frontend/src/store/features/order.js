import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderInfo: {
      name: "",
      email: "",
      contactNumber: "",
      address: {
        street: "",
        suburb: "",
        postalCode: ""
      },
      services: {
        type: "",
        bedRoom: "",
        bathRoom: "",
        extra: [],
        price: 0
      }
    }
  },
  reducers: {
    updateOrderInfo(state, { payload }) {
      state.orderInfo = { ...state.orderInfo, ...payload };
    },
    updateServices(state, { payload }) {
      state.orderInfo.services = { ...state.orderInfo.services, ...payload };
      state.orderInfo.services.bedRoom = payload.bedRoom
      state.orderInfo.services.bathRoom = payload.bathRoom
    },
  }
});

export const { updateOrderInfo, updateServices } = orderSlice.actions;
export default orderSlice.reducer;
