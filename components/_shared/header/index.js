import React from "react";
import { Header } from "react-native-elements";
import LeftComponent from "./leftComponent";
import RightComponent from "./rightComponent";

const HeaderTop = ({ nbTasks, nbChecked }) => {
  return (
    <Header
      linearGradientProps={{
        colors: ["#4AA7CF", "pink"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      leftComponent={<LeftComponent nbTasks={nbTasks} />}
      centerComponent={{
        text: "Ma liste des tâches",
        style: { color: "#fff", fontSize: 20 },
      }}
      rightComponent={<RightComponent nbChecked={nbChecked} />}
    />
  );
};

export default HeaderTop;
