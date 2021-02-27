import React from "react";
import { View, StyleSheet, Text } from "react-native";

const NewPlaceScreen = () => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "New Place",
    //   headerRight: () => (
    //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //       <Item
    //         title="AddPlace"
    //         iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
    //         onPress={() => {
    //           navData.navigation.navigate("NewPlace");
    //         }}
    //       />
    //     </HeaderButtons>
    //   ),
  };
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;
