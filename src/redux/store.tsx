import { configureStore } from "@reduxjs/toolkit";
import MovesSlice from "./MovesSlice";

const store = configureStore({
  reducer: { data: MovesSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;