import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import PlacesListScreen from "../screens/PlacesListScreen";
import PlacesDetailScreen from "../screens/PlacesListScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlacesDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.Primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "White" : Colors.Primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
