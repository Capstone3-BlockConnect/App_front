import { css } from "@emotion/native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const AnimatedNumber = ({ targetValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const nextValue = Math.floor(progress * targetValue);

      setCurrentValue(nextValue);

      if (elapsedTime >= duration) {
        clearInterval(interval);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [targetValue, duration]);

  return (
    <View
      style={css`
        align-items: center;
        justify-content: center;
      `}
    >
      <Text
        style={css`
          font-size: 32px;
          font-weight: 900;
        `}
      >
        {currentValue}명
      </Text>
    </View>
  );
};
export default AnimatedNumber;
