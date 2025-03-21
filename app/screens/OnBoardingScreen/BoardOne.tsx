import { View, Dimensions, StyleSheet } from "react-native";
import React from "react";
import {
  BigText,
  MediumText,
  RegularText,
  Text25,
  TitleText,
} from "../../components/MyText";
import ImageOne from "../../../assets/images/svg/OnBoardingOne.svg";

const { width } = Dimensions.get("window");

type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};

const BoardOne = ({ handleSkip, handleNext }: Props) => {
  return (
    <View
      style={{
        width: width,
        flex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "50%",
          marginTop: 40,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <ImageOne />
      </View>
      <Text25
        bold
        style={{ textAlign: "center", marginBottom: 10, marginTop: 30 }}
      >
        Explore something now
      </Text25>

      <RegularText style={styles.text}>
        We overcome new difficulties and problems.
      </RegularText>
      <RegularText style={styles.text}>
        In such a manner we get out of our
      </RegularText>
      <RegularText style={styles.text}>comfort zone.</RegularText>
    </View>
  );
};

export default BoardOne;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "grey",
    fontSize: 15,
  },
});
