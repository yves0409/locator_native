import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import Colors from "../constants/Colors";

const NewPlaceScreen = () => {
  const [titleValue, setTitleValue] = useState("");

  //getting the userinput
  const titleChangeHandler = (text) => {
    //add validation later
    setTitleValue(text);
  };

  //save the userinput
  const savePlaceHandler = () => {};

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>NewPlaceScreen</Text>
        <TextInput
          style={styles.textInput}
          value={titleValue}
          onChangeText={titleChangeHandler}
        />
        <Button
          title="Save Location"
          color={Colors.primary}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
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

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
