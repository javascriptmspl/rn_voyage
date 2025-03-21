import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../styles";
import OptionIcon from "../../../assets/icon/svg/options.svg";
import { ExploreStackParams } from "../../navigation/types";
import MainLayout from "../../components/MainLayout";
import { RegularText, SmallText, SmallText10 } from "../../components/MyText";

const data = [
  {
    name: "Diamond Beach",
    location: "Nordegg, Canada",
    duration: "3 day",
    season: "Summer",
    price: "78.00",
    img: "https://images.forbesindia.com/media/images/2024/May/img_234027_halongbay-954121882_bg.jpg",
  },
  {
    name: "Rock Monument",
    location: "United States",
    duration: "3 day",
    season: "Summer",
    price: "35.00",
    img: "https://www.bonjourbecky.com/wp-content/uploads/FullSizeRender-6.jpg",
  },
  {
    name: "Parangtritis Beach",
    location: "Bali, Indonesia",
    duration: "3 day",
    season: "Summer",
    price: "40.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzITzbGZ0lQVKVp5OzFFetlHW07Q3Yr_xP-Q&s",
  },
  {
    name: "Sorake Beach",
    location: "Zandvoort, Netherland",
    duration: "3 day",
    season: "Summer",
    price: "69.00",
    img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_864,h_524/w_53,x_10,y_10,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/jxckwjrqtbcvwuvlusf7/ParangtritisBeachSunsetVWTourinYogyakarta.jpg",
  },
  {
    name: "Nihiwatu Beach",
    location: "United States",
    duration: "3 day",
    season: "Summer",
    price: "25.00",
    img: "https://live.staticflickr.com/4315/35812505661_2f9dc4e003_b.jpg",
  },
];

const ExploreScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ExploreStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Explore">
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <FlatList
          data={data}
          ListHeaderComponent={() => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  marginVertical: 20,
                }}
              >
                <View style={styles.input}>
                  <EvilIcons name="search" size={30} color="gray" />
                  <TextInput
                    placeholderTextColor={"gray"}
                    placeholder="Search your location"
                  />
                </View>
                <TouchableOpacity style={styles.filterBtn}>
                  <OptionIcon />
                </TouchableOpacity>
              </View>
            );
          }}
          renderItem={({ item }: any) => {
            return (
              <TouchableOpacity style={styles.container}>
                <View style={styles.imgView}>
                  <Image
                    style={{ height: "100%", width: "100%", borderRadius: 10 }}
                    source={{ uri: item.img }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  {/* {NAME} */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <RegularText bold>{item.name}</RegularText>
                    <RegularText bold style={{ color: COLORS.primary }}>
                      ${item.price}
                    </RegularText>
                  </View>
                  {/* {LOCATION} */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 3,
                    }}
                  >
                    <MaterialIcons
                      name="location-on"
                      size={20}
                      color={COLORS.primary}
                    />
                    <SmallText10>{item.location}</SmallText10>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", gap: 15, marginTop: 10 }}
                    >
                      <View style={styles.smallView}>
                        <SmallText10>{item.duration}</SmallText10>
                      </View>
                      <View style={styles.smallView}>
                        <SmallText10>{item.season}</SmallText10>
                      </View>
                    </View>

                    <TouchableOpacity style={styles.btn}>
                      <Feather name="arrow-up-right" size={24} color="white" />
                    </TouchableOpacity>
                  </View>

                  {/* {END} */}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default ExploreScreen;

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
    elevation: 5,
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
  container: {
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 4,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
    marginHorizontal: 2,
    borderRadius: 15,
  },
  imgView: {
    height: 85,
    width: 70,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  smallView: {
    backgroundColor: "rgba(0,0,0,0.07)",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
