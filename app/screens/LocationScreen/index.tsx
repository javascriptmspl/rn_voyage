import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import {
  RegularText,
  SmallText,
  SmallText10,
  SmallText10B,
  SmallTextB,
} from "../../components/MyText";
import BusIcon from "../../../assets/icon/svg/BusLogo.svg";

const LocationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Location">
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <View style={styles.container}>
          <View style={styles.innerView}>
            <RegularText bold>BlaBla Bus</RegularText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <SmallText>NON/AC Sleeper (2+1)</SmallText>
              <BusIcon/>
            </View>
            <SmallTextB bold>
              22:45<SmallText10> - 5h 25m - </SmallText10> 04:10
              <SmallText10> + 1 day</SmallText10>
            </SmallTextB>

            <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
              <View style={styles.smallView}>
                <SmallText10B>6 Seats Left</SmallText10B>
              </View>
              <View style={styles.smallView}>
                <SmallText10B>1 Single Seats</SmallText10B>
              </View>
            </View>
          </View>

          <Image
            style={{
              borderRadius: 10,
              height: 150,
              width: "93%",
              marginTop: 40,
            }}
            source={require("../../../assets/images/mapImage.png")}
          />
        </View>
      </View>
    </MainLayout>
  );
};

export default LocationScreen;
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 10,
    alignItems: "center",
    height: 400,
    paddingHorizontal: 15,
    marginHorizontal: 2,
    marginTop: 25,
    paddingTop: 30,
  },
  innerView: {
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 10,
    padding: 10,
    borderRadius: 10,
    width: "93%",
    gap: 5,
    paddingBottom: 20,
  },
  smallView: {
    backgroundColor: "rgba(0,0,0,0.07)",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
