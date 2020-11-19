import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HeaderTop from "./components/header";
import ListTasks from "./containers/listTasks";
import Footer from "./containers/footer";

const App = () => {
  const [nbTasks, setNbTasks] = useState(0);
  const [nbChecked, setNbChecked] = useState(0);

  return (
    <View style={styles.container}>
      <HeaderTop nbTasks={nbTasks} nbChecked={nbChecked} />
      <ListTasks
        nbChecked={(nb) => setNbChecked(nb)}
        nbTasks={(nb) => setNbTasks(nb)}
      />
      <Footer />
      <StatusBar
        animated={true}
        barStyle="light-content"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
