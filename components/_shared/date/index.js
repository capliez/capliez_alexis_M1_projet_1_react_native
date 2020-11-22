import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";

const ViewDate = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>{moment().format("LL")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default ViewDate;
