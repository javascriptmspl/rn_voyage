import { View, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import {
  RegularText,
  RegularTextGray,
  SmallText,
} from "../../components/MyText";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";

const data = [
  {
    text: "Flights",
    icon: <Fontisto name="plane" size={24} color="gray" />,
    navigate: "SearchFlight",
  },
  {
    text: "Hotel",
    icon: <FontAwesome5 name="hotel" size={24} color="gray" />,
    navigate: "HotelSearch",
  },
  {
    text: "Bus",
    icon: <FontAwesome5 name="bus" size={24} color="gray" />,
    navigate: "BusSearch",
  },
  {
    text: "Train",
    icon: <MaterialIcons name="train" size={30} color="gray" />,
    navigate: "TrainSearch",
  },
];

const Categories = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></View>
      <FlatList
        data={data}
        numColumns={4}
        renderItem={({ item }: any) => {
          return (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.navigate)}
              style={{
                flex: 1 / 4,
                height: 90,
                margin: 10,
                backgroundColor: "white",
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.17,
                shadowRadius: 2.54,
                elevation: 2,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              {item.icon}
              <RegularTextGray>{item.text}</RegularTextGray>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
