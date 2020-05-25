import React from "react";
import { render } from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import Application from "./display/application";
import { Provider } from "react-redux";
import { getStorage } from "./state/store";

const persistConfig = {
  key: "daily-harvest-web-persist-store",
  storage,
  whitelist: []
};
const { persistor, store } = getStorage(persistConfig);
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Application />
    </PersistGate>
  </Provider>,
  rootElement
);
