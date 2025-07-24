import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import cartSlice from "./cart/cartStore";
import orderSlice  from "./order/orderStore";
import userStore from "./user/userStore";


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    order:orderSlice,
    user:userStore,
    
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;