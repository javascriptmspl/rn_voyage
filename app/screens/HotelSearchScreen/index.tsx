import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams, ProfileStackParams } from "../../navigation/types";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RegularText, SmallText10, SmallTextB } from "../../components/MyText";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";

const interests = [
  { id: 1, name: "Work" },
  { id: 2, name: "Holiday" },
  { id: 3, name: "Others" },
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
          fontSize: 12,
          color: isSelected ? COLORS.primary : "black",
          padding: 5,
          paddingHorizontal: 13,
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: isSelected ? COLORS.lightBg : "white",
          borderColor: isSelected ? COLORS.primary : "lightgray",

          marginRight: 10,
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};

const HotelSearchScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const [location, setLocation] = useState("Canada");
  const [selectedId, setSelectedId] = React.useState(1);

  return (
    <MainLayout onBack={navigation.goBack} title="Hotel & Homestays">
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        {/* {LOCATION} */}

        <View style={styles.container}>
          <View style={styles.iconView}>
            <AntDesign name="search1" size={12} color="gray" />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={{ flex: 1, marginLeft: -5, fontWeight: "bold" }}
              placeholder="Enter Location"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>

        {/* {DEPARTURE AND ADD RETURN} */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <View style={styles.container}>
              <View style={styles.iconView}>
                <Feather name="calendar" size={14} color="gray" />
              </View>
              <View>
                <SmallText10 style={{ marginBottom: -5 }}>
                  Departure
                </SmallText10>

                <TextInput
                  style={{ flex: 1, marginLeft: -5, fontWeight: "bold" }}
                  placeholder="Mar 07, 10:00AM"
                />
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
            <SmallText10>Guests</SmallText10>
            <SmallTextB bold>1 Room, 2 Adults & 0 Children</SmallTextB>
          </View>
        </View>

        <SmallTextB bold style={{ marginBottom: 10 }}>
          Purpose of Stay
        </SmallTextB>
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
          onPress={() => navigation.navigate("SearchFlight2")}
          containerStyle={{ marginBottom: 30 }}
          text="Search Hotels"
        />
      </View>
    </MainLayout>
  );
};

export default HotelSearchScreen;

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
