import { View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import {
  RegularText,
  SmallText,
  SmallText10,
  SmallTextB,
} from "../../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";

const data = [
  {
    title: "Antelope Canyon",
    add: "Arizona, USA",
    price: "$ 12.00",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Lower_Antelope_Canyon_478.jpg/220px-Lower_Antelope_Canyon_478.jpg",
  },

  {
    title: "Torres del Paine",
    add: "Antarctica",
    price: "$ 30.00",
    img: "https://www.pygmy-elephant.com/medias/uploads/source/W-Trek/History%20of%20TDP/the-towers-w-trek-torres-del-paine.jpg",
  },
];

const BestNature = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View>
      <RegularText bold style={{ marginVertical: 10, }}>
        Best Nature
      </RegularText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={()=>navigation.navigate('BestNature')}
              style={{
                marginRight: 15,
                height: 280,
                backgroundColor: "red",
                borderRadius: 30,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 2,
                width: 270,
                marginBottom: 30,
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 30,
                }}
              />

              <View
                style={{
                  paddingHorizontal: 10,
                  position: "absolute",
                  width: "100%",
                  height: 70,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  bottom: 0,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
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
                  <RegularText bold style={{ color: "white" }}>
                    {item.title}
                  </RegularText>
                  <SmallText
                    bold
                    style={{
                      color: "white",
                    }}
                  >
                    {item.price} <SmallText10 style={{color:'white'}}>/person</SmallText10>
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
                  <SmallText10 style={{ color: "white" }}>
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

export default BestNature;
