import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import HeaderTop from "./components/_shared/header";
import ListTasks from "./components/tasksEpic/listTasks";
import Footer from "./components/_shared/footer";
import ViewDate from "./components/_shared/date";
const App = () => {
  const [nbTasks, setNbTasks] = useState(0);
  const [nbChecked, setNbChecked] = useState(0);

  return (
    <View style={styles.container}>
      <HeaderTop nbTasks={nbTasks} nbChecked={nbChecked} />
      <ViewDate />
      <ListTasks
        nbChecked={(nb) => setNbChecked(nb)}
        nbTasks={(nb) => setNbTasks(nb)}
      />
      <Footer />
      <StatusBar animated={true} barStyle="light-content" />
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
