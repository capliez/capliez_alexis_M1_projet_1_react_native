import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import uuid from "uuid-random";
import Item from "./itemTask";
import AddTask from "./addTask";

const ListTasks = ({ nbTasks, nbChecked }) => {
  const [myTasks, setTask] = useState([]);

  //Count tasks checked
  const nbTasksChecked = (items) => {
    let count = 0;
    items.filter((item) => (item.checked ? (count += 1) : 0));
    nbChecked(count);
  };

  //Add task
  const addTask = (text) => {
    const item = {
      id: uuid(),
      title: text,
      checked: false,
    };

    setTask([...myTasks, item]);
    nbTasks(myTasks.length + 1);
  };

  //Delete Task
  const deleteTask = (id) => {
    const newTasks = myTasks.filter((item) => item.id !== id);
    setTask(newTasks);
    nbTasks(myTasks.length - 1);
    nbTasksChecked(newTasks);
  };

  //change status task
  const checkedTask = (id) => {
    const newTasks = myTasks.filter((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
        return item;
      } else {
        return item;
      }
    });
    setTask(newTasks);
    nbTasksChecked(newTasks);
  };

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        checkedTask={(id) => checkedTask(id)}
        deleteTask={(id) => deleteTask(id)}
      />
    );
  };

  return (
    <>
      <AddTask addItem={(text) => addTask(text)} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={myTasks}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => String(item.id)}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListTasks;
