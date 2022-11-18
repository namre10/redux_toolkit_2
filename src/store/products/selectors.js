import { createSelector } from "@reduxjs/toolkit";

export const selectProductState = (rootState) => rootState["products"];

export const selectProducrs = createSelector(
  selectProductState,
  (s) => s.products
);

export const selectProducrsLoading = createSelector(
  selectProductState,
  (s) => s.loading
);
