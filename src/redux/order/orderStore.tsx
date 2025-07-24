import { OrderProduct } from "@/types/cartTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Product {
  products: OrderProduct[];
}

const initialState: Product = {
  products: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderProducts: (state, action: PayloadAction<OrderProduct[]>) => {
      state.products = action.payload;
    },
    addOrderProduct: (state, action: PayloadAction<OrderProduct>) => {  
      const existingItemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      
      if(existingItemIndex >= 0){
        console.log("remove");
        
        const nextorderProduct = (state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        ));
        state.products = nextorderProduct;
      }
      else{
        state.products.push({ ...action.payload });
      }
      
    },
    removeProduct: (state, action) => {
      const nextorderProduct = (state.products = state.products.filter(
        (item) => item.id !== action.payload
      ));
      state.products = nextorderProduct;

      // state.products = state.products.filter(item => item.id !== action.payload.id);
    },
    resetProduct: (state) => {
      state.products = [];
    },
  },
});

export const { addOrderProduct, removeProduct, setOrderProducts, resetProduct } =
  orderSlice.actions;

export default orderSlice.reducer;
