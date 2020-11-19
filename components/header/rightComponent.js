import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const RightComponent = ({ nbChecked }) => {
  return (
    <View>
      <Text style={[styles.text]}>
        <Icon
          size={20}
          type="font-awesome"
          color="white"
          name="check-circle-o"
        />{" "}
        {nbChecked}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default RightComponent;
