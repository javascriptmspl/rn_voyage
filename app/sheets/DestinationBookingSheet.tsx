import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "./sheets";
import {
  MediumText,
  RegularText,
  SmallText10,
  SmallText10B,
} from "../components/MyText";
import PrimaryBtn from "../components/PrimaryBtn";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../styles";

const MaleImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFV4G6AGsZ2oRNFHjHNqaZiQNpMK3CeCKyQ&s";
const FemaleImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNizi_RLNYlHhWv-4Gn-hybl_C8TJ6hi9Xw&s";
const DestinationBookingSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.DestinationBookingSheet);
  };

  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);

  return (
    <ActionSheet
      containerStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      id={props.sheetId}
      gestureEnabled
    >
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 15 }}
            source={require("../../assets/images/Canyon.png")}
          />
          <View>
            <MediumText bold>Antelope Canyon</MediumText>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <MaterialIcons name="location-on" size={20} color="red" />
              <SmallText10>Arizona, USA</SmallText10>
            </View>
            <RegularText>
              $1200<SmallText10B>/person</SmallText10B>
            </RegularText>
          </View>
        </View>

        <RegularText bold style={{ marginTop: 25, marginBottom: 10 }}>
          Select Gender
        </RegularText>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Pressable
            onPress={() => {
              setMale(true), setFemale(false);
            }}
            style={styles.option}
          >
            <View
              style={{
                alignItems: "flex-end",
                width: "100%",
                marginBottom: -10,
              }}
            >
              <TouchableOpacity style={styles.checkBtn}>
                {male && (
                  <AntDesign name="checkcircle" size={20} color="#FF5858" />
                )}
              </TouchableOpacity>
            </View>
            <Image source={{ uri: MaleImage }} style={styles.img} />
            <RegularText bold>Male</RegularText>
          </Pressable>

          <Pressable
            onPress={() => {
              setFemale(true), setMale(false);
            }}
            style={styles.option}
          >
            <View
              style={{
                alignItems: "flex-end",
                width: "100%",
                marginBottom: -10,
              }}
            >
              <TouchableOpacity style={styles.checkBtn}>
                {female && (
                  <AntDesign name="checkcircle" size={20} color="#FF5858" />
                )}
              </TouchableOpacity>
            </View>
            <Image source={{ uri: FemaleImage }} style={styles.img} />
            <RegularText bold>Female</RegularText>
          </Pressable>
        </View>

        <View style={styles.container}>
          <MaterialCommunityIcons
            name="checkbox-marked"
            size={24}
            color={COLORS.primary}
          />
          <TextInput style={{flex:1}} placeholder="John Doe"/>
          <Octicons name="pencil" size={20} color={COLORS.primary} />
        </View>

        <PrimaryBtn onPress={close} text="Continue" />
      </View>
    </ActionSheet>
  );
};

export default DestinationBookingSheet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "lightgray",
    height: 60,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
    marginTop: 30,
  },
  option: {
    width: 125,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 15,
  },
  img: {
    height: 65,
    width: 65,
    borderRadius: 80,
  },
  checkBtn: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
