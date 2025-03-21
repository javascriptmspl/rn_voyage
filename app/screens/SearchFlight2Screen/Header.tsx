import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RegularText, SmallText10 } from "../../components/MyText";
import { COLORS } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={styles.container}>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="arrowleft"
        size={25}
        color={"black"}
      />
      <View style={{ flex: 1 }}>
        <RegularText bold>Indonesia to France</RegularText>
        <SmallText10>1 Sep | 1 Adult | Economy</SmallText10>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="edit" size={18} color={COLORS.primary} />
        <SmallText10 bold style={{ color: COLORS.primary }}>
          Edit
        </SmallText10>
      </TouchableOpacity>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    marginHorizontal: 15,
  },
});
