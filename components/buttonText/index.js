import React from "react";
import { Button } from "react-native-elements";

const ButtonText = ({ title, handlePress, disabled }) => {
  return (
    <Button
      linearGradientProps={
        !disabled
          ? {
              colors: ["#4AA7CF", "pink"],
              start: { x: 1, y: 0.5 },
              end: { x: 0.2, y: 0.5 },
            }
          : { colors: ["#4AA7CF", "pink"] }
      }
      disabled={disabled}
      onPress={handlePress}
      title={title}
    />
  );
};

export default ButtonText;
