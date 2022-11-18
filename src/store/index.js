import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice/CartSlice";
import productsReducer from "./products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: CartReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsReducer.middleware),
});

// store.dispatch(AllTotal);
