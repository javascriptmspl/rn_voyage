import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";
                                                       
import DatePicker from "react-native-date-picker";
import { COLORS } from "../../styles";
import Bus from "./Bus";
import Flight from "./Flight";
import Train from "./Train";
import Hotel from "./Hotel";

const FilterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const [view, setView] = useState(1);

  return (
    <MainLayout title="Filters" onBack={navigation.goBack}>
      <ScrollView style={{ padding: 15 }}>
        {/* {OPTIONS} */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => setView(1)}
            style={[
              styles.options,
              {
                backgroundColor: view === 1 ? COLORS.lightBg : "white",
                borderColor: view === 1 ? COLORS.primary : "gray",
              },
            ]}
          >
            <Text style={{ color: view === 1 ? COLORS.primary : "gray" }}>
              Bus
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setView(2)}
            style={[
              styles.options,
              {
                backgroundColor: view === 2 ? COLORS.lightBg : "white",
                borderColor: view === 2 ? COLORS.primary : "gray",
              },
            ]}
          >
            <Text style={{ color: view === 2 ? COLORS.primary : "gray" }}>
              Flight
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setView(3)}
            style={[
              styles.options,
              {
                backgroundColor: view === 3 ? COLORS.lightBg : "white",
                borderColor: view === 3 ? COLORS.primary : "gray",
              },
            ]}
          >
            <Text style={{ color: view === 3 ? COLORS.primary : "gray" }}>
              Train
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setView(4)}
            style={[
              styles.options,
              {
                backgroundColor: view === 4 ? COLORS.lightBg : "white",
                borderColor: view === 4 ? COLORS.primary : "gray",
              },
            ]}
          >
            <Text style={{ color: view === 4 ? COLORS.primary : "gray" }}>
              Hotel
            </Text>
          </TouchableOpacity>
        </View>

{view === 1 && <Bus/>}
{view === 2 && <Flight/>}
{view === 3 && <Train/>}
{view === 4 && <Hotel/>}
      </ScrollView>
    </MainLayout>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  options: {
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 25,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
  },
});
