import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import Reduxthunk from "redux-thunk";
import placesReducer from "./store/places-reducer";

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
