import { createSlice } from "@reduxjs/toolkit";

export type OrdersState = {
  availableProducts: string[];
};

export const initialOrdersState: Readonly<OrdersState> = {
  availableProducts: ["widget"],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initialOrdersState,
  reducers: {
    productAdded: (state, action) => {
      const addedProduct = action.payload;
      if (!state.availableProducts.includes(addedProduct)) {
        state.availableProducts.push(addedProduct);
      }
    },
  },
});
