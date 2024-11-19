import { configureStore } from "@reduxjs/toolkit"
import orderReducer from "./features/order"
import formVisibleReducer from './features/formVisible'
import scrollPositionReducer from './features/scrollPosition'

const store = configureStore({
  reducer: {
    order: orderReducer,
    formVisible: formVisibleReducer,
    scrollPosition: scrollPositionReducer
  }
})

export default store