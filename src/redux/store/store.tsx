import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicReduce from "../store/actions/index";
// const rootReduce = combineReducers({
//   favourite: () => [],
//   music: () => [],
// });
export const store = configureStore({
  reducer: {
    music: musicReduce,
  },
});

export type RootState = ReturnType<typeof musicReduce>;
export type AppDispatch = typeof store.dispatch;
