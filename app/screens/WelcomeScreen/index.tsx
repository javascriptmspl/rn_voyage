import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BigText, RegularText } from "../../components/MyText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/types";
import PrimaryBtn from "../../components/PrimaryBtn";

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "40%" }}></View>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={require("../../../assets/images/AppLogo.png")} />
      </View>
      <BigText
        bold
        style={{ textAlign: "center", marginTop: 10, fontSize: 28 }}
      >
        Welcome to our
      </BigText>
      <BigText
        bold
        style={{ textAlign: "center", marginBottom: 10, fontSize: 28 }}
      >
        Vacance Travel Mobile App
      </BigText>
      <Text
        style={{
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        Travel around the world with just tap, and enjoy
      </Text>
      <Text
        style={{
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        your holiday
      </Text>
      <View style={{ gap: 15, marginTop: 25, marginHorizontal: 15 }}>
        <PrimaryBtn
          onPress={() => navigation.navigate("OnBoarding")}
          text="Get Started"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "grey",
    fontSize: 15,
  },
});
