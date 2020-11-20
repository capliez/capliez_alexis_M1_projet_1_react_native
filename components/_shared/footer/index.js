import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={[styles.footer]}>
      <Text style={[styles.text]}>© 2020 - Alexis Capliez </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#4AA7CF",
  },
  text: {color: 'white', fontSize: 18}
});

export default Footer;
