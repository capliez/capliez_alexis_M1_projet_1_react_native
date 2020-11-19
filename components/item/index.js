import React from "react";
import { LayoutAnimation, Platform, UIManager } from "react-native";
import { CheckBox, ListItem } from "react-native-elements";
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Item = ({ item, deleteTask, checkedTask }) => {
  return (
    <ListItem>
      <CheckBox
        onIconPress={() => {
          //callback
          checkedTask(item.id);
        }}
        iconType="font-awesome"
        checkedColor="#4AA7CF"
        checkedIcon="check-circle-o"
        uncheckedIcon="circle-o"
        checked={item.checked}
      />

      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <CheckBox
        onIconPress={() => {
          //Callback
          deleteTask(item.id);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        }}
        iconType="font-awesome"
        checkedIcon="trash"
        uncheckedIcon="trash"
      />
    </ListItem>
  );
};

export default Item;
