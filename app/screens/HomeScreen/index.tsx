import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";
import useKeyboardTabHide from "../../hooks/useKeyboardTabHide";
import Header from "./Header";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Categories from "./Categories";
import { COLORS } from "../../styles";
import OptionIcon from "../../../assets/icon/svg/options.svg";
import DealsOffers from "./DealsOffers";
import TrendingDestinations from "./TrendingDestinations";
import BestNature from "./BestNature";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  useKeyboardTabHide();
  return (
    <SafeAreaView style={{ flex: 1 ,}}>
     <FlatList
     data={[1]}
     renderItem={()=>{
      return(
        <View
        style={{
          flex: 1,
          paddingTop: 10,
          paddingHorizontal: 15,
          backgroundColor: "white",
        }}
      >
        <Header />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <View style={styles.input}>
            <EvilIcons name="search" size={30} color="gray" />
            <TextInput
              style={{ flex: 1 }}
              placeholderTextColor={"lightgray"}
              placeholder="Search for your location"
            />
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Filter')}
          style={styles.filterBtn}>
            <OptionIcon />
          </TouchableOpacity>
        </View>

        <Categories />
        <DealsOffers />
        <TrendingDestinations />
        <BestNature />
      </View>
      )
     }}
     />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 2,
    alignItems: "center",
    height: 50,
    paddingHorizontal: 15,
    marginHorizontal: 2,
    flex: 1,
  },
  filterBtn: {
    height: 55,
    width: 55,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
