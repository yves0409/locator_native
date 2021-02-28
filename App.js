import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import Reduxthunk from "redux-thunk";
import placesReducer from "./store/places-reducer";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized db");
  })
  .catch((err) => {
    console.log("Initialisation failed");
    console.log(err);
  });

import PlacesNavigator from "./navigation/PlacesNavigator";

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(Reduxthunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
