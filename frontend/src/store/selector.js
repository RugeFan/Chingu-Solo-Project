import { createSelector } from 'reselect';

export const selectOrderInfo = createSelector(
  (state) => state.order.orderInfo,
  (orderInfo) => ({ ...orderInfo })
);
