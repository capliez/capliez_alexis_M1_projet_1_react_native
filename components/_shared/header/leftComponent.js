import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const LeftComponent = ({ nbTasks }) => {
  return (
    <View>
      <Text style={[styles.text]}>
        <Icon type="font-awesome" size={20} color="white" name="tasks" />{" "}
        {nbTasks}
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

export default LeftComponent;
