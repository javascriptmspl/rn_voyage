import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams, ProfileStackParams } from "../../navigation/types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SmallText10, SmallTextB } from "../../components/MyText";
import { COLORS } from "../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PrimaryBtn from "../../components/PrimaryBtn";

const interests = [
  { id: 1, name: "Trending" },
  { id: 2, name: "Bank Offers" },
  { id: 3, name: "Flights" },
  { id: 4, name: "Buses" },
  { id: 5, name: "Trains" },
  { id: 6, name: "Hotels" },
];
const ItemRow = ({
  name,
  onSelect,
  isSelected,
}: {
  name: string;
  onSelect: () => void;
  isSelected: boolean;
}) => {
  return (
    <Pressable style={{ height: 50 }} onPress={onSelect}>
      <Text
        style={{
          fontSize: 15,
          color: isSelected ? COLORS.primary : "black",
          padding: 7,
          paddingHorizontal: 15,
          borderRadius: isSelected ? 10 : 0,
          borderWidth: isSelected ? 2 : 0,
          backgroundColor: isSelected ? COLORS.lightBg : "white",
          borderColor: isSelected ? COLORS.primary : "black",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 3,
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};

const SearchFlightScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const [fromLocation, setFromLocation] = useState("Jakarta, Indonesia");
  const [toLocation, setToLocation] = useState("Paris, France");
  const [selectedId, setSelectedId] = React.useState(1);

  const swapLocations = () => {
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  return (
    <MainLayout onBack={navigation.goBack} title="Search Filghts">
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        {/* {FROM} */}
        <View style={styles.container}>
          <View style={styles.iconView}>
            <FontAwesome5 name="plane-departure" size={12} color="gray" />
          </View>
          <View style={{ flex: 1 }}>
            <SmallText10 style={{ marginBottom:-5}}>From</SmallText10>
            <TextInput
              style={{ flex: 1, marginLeft: -5, fontWeight: "bold" }}
              placeholder="Jakarta, Indonesia"
              value={fromLocation}
              onChangeText={setFromLocation}
            />
          </View>
        </View>

        {/* {SWITCH BTN} */}
        <TouchableOpacity onPress={swapLocations} style={styles.switchView}>
          <MaterialCommunityIcons
            name="swap-vertical"
            size={25}
            color="white"
          />
        </TouchableOpacity>

        {/* {TO} */}
        <View style={styles.container}>
          <View style={styles.iconView}>
            <FontAwesome5 name="plane-arrival" size={12} color="gray" />
          </View>
          <View style={{ flex: 1 }}>
            <SmallText10 style={{ marginBottom:-5}}>To</SmallText10>
            <TextInput
              style={{ flex: 1, marginLeft: -5, fontWeight: "bold" }}
              placeholder="Paris, France"
              value={toLocation}
              onChangeText={setToLocation}
            />
          </View>
        </View>

        {/* {DEPARTURE AND ADD RETURN} */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <View style={styles.container}>
              <View style={styles.iconView}>
                {/* <FontAwesome5 name="plane-departure" size={12} color="gray" /> */}
                <Feather name="calendar" size={14} color="gray" />
              </View>
              <View>
                <SmallText10 style={{ marginBottom:-5}}>Departure</SmallText10>
                {/* <TouchableOpacity onPress={() => setIsDatePickerOpen(true)}>
                <SmallTextB bold>{dob ? dob?.toISOString() : "Mar 07, 10:00AM"}</SmallTextB>
                </TouchableOpacity> */}
                <TextInput
                  style={{ flex: 1, marginLeft: -5, fontWeight: "bold" , }}
                  placeholder="Mar 07, 10:00AM"
                />
                {/* <SmallTextB bold>Mar 07, 10:00AM</SmallTextB> */}
              </View>
            </View>
          </View>
          {/* {} */}
          <View style={{ width: "48%" }}>
            <View style={styles.container}>
              <AntDesign name="plus" size={24} color="black" />
              <View>
                <SmallText10>From</SmallText10>
                <SmallTextB bold>Jakarta, Indonesia</SmallTextB>
              </View>
            </View>
          </View>
        </View>

        {/* {SEATS} */}
        <View style={styles.container}>
          <View style={styles.iconView}>
            <Feather name="users" size={14} color="gray" />
          </View>
          <View>
            <SmallText10>Travellar & Class</SmallText10>
            <SmallTextB bold>
              1, <SmallText10>Economy Class</SmallText10>
            </SmallTextB>
          </View>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={interests}
          renderItem={({ item }) => {
            return (
              <ItemRow
                onSelect={() => setSelectedId(item.id)}
                name={item.name}
                isSelected={item.id === selectedId}
              />
            );
          }}
        />

        {/* {PRIMARY BTN } */}
        <PrimaryBtn
        onPress={()=>navigation.navigate('SearchFlight2')}
        containerStyle={{marginBottom:30}} text="Search Filghts"/>
      </View>
    </MainLayout>
  );
};

export default SearchFlightScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    gap: 10,
    alignItems: "center",
    height: 70,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: "white",
  },
  iconView: {
    height: 25,
    width: 25,
    borderRadius: 30,
    borderColor: "lightgray",
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
  },
  switchView: {
    height: 40,
    width: 40,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    marginTop: -30,
    marginBottom: -10,
    left: 250,
  },
});
