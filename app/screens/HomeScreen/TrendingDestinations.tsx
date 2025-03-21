import { View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import {
  RegularText,
  SmallText,
  SmallText10,
} from "../../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";

const data = [
  {
    title: "Diamond Beach",
    add: "Nordegg, Canada",
    price: "$78",
    img: "https://www.hospitalitynet.org/picture/xxl_153162036.jpg?t=1698134896",
  },
  {
    title: "Rock Monuments",
    add: "97 Berkshire Street",
    price: "$60",
    img: "https://images.forbesindia.com/media/images/2024/May/img_234027_halongbay-954121882_bg.jpg",
  },
  {
    title: "Diamond Beach",
    add: "97 Berkshire Street",
    price: "$60",
    img: "https://www.bonjourbecky.com/wp-content/uploads/FullSizeRender-6.jpg",
  },
  {
    title: "Diamond Beach",
    add: "97 Berkshire Street",
    price: "$60",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzITzbGZ0lQVKVp5OzFFetlHW07Q3Yr_xP-Q&s",
  },
  {
    title: "Diamond Beach",
    add: "97 Berkshire Street",
    price: "$60",
    img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_864,h_524/w_53,x_10,y_10,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/jxckwjrqtbcvwuvlusf7/ParangtritisBeachSunsetVWTourinYogyakarta.jpg",
  },
];

const TrendingDestinations = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 5,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RegularText bold style={{ marginBottom: 5 }}>
          Trending Destinations
        </RegularText>
        <TouchableOpacity
          // onPress={()=>navigation.navigate('TrendingDestination')}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <SmallText style={{ color: COLORS.primary }}>View All</SmallText>

          <AntDesign name="right" size={13} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
            onPress={()=>navigation.navigate('TrendingDestination')}
              style={{
                marginRight: 15,
                height: 280,
                backgroundColor: "white",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 2,
                width: 230,marginBottom:20
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 210,
                  backgroundColor: "lightgray",
                  borderRadius:15
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: "100%",
                    height: "100%",
                   borderRadius:15
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                }}
              >
               <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <RegularText bold >
                    {item.title}
                  </RegularText>
                  <SmallText
                    bold
                    style={{color:COLORS.primary
                    }}
                  >
                    {item.price} <SmallText10>/night</SmallText10>
                  </SmallText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Entypo
                    style={{ marginRight: 3 }}
                    name="location-pin"
                    size={14}
                    color={COLORS.primary}
                  />
                  <SmallText10 style={{ color: "grey" }}>
                    {item.add}
                  </SmallText10>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TrendingDestinations;
