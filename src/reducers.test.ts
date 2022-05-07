import { ordersSlice } from "./slice";

it("adds product type if not already available", () => {
  const mockState = { availableProducts: [] as string[] };
  ordersSlice.caseReducers.productAdded(
    mockState,
    ordersSlice.actions.productAdded("gadget")
  );

  expect(mockState.availableProducts.length).toEqual(1);
  expect(mockState.availableProducts.includes("gadget")).toBeTruthy();
});
