import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import ButtonAdd from "../components/buttonText";
const addTask = ({ addItem }) => {
  const [valueItem, setValueItem] = useState("");

  const handleChange = (text) => {
    if (text !== " ") setValueItem(text);
  };

  const handleSubmit = () => {
    //Callback
    addItem(valueItem);
    setValueItem("");
  };

  return (
    <View style={{ padding: 10 }}>
      <Input
        value={valueItem}
        onChangeText={(text) => handleChange(text)}
        placeholder="Libellé"
      />
      <ButtonAdd
        disabled={valueItem ? false : true}
        handlePress={() => handleSubmit()}
        title="Ajouter"
      />
    </View>
  );
};

export default addTask;
