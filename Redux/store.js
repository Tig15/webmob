import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import metaSaga from "./metaSaga";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddle) =>
    defaultMiddle({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(metaSaga);

export default store;
