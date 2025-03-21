import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { SmallText10, SmallTextB, TitleText } from "../../components/MyText";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation/types";

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          justifyContent: "space-between",
          paddingBottom: 5
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              backgroundColor: "pink",
            }}
          >
             <Image
            style={{height: 40,
              width: 40,
              borderRadius: 40,}}
            source={{
              uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid",
            }}
          />
          </View>
          <View>
            <TitleText bold>Hello Clifton</TitleText>
            <SmallTextB>Welcome back!</SmallTextB>
          </View>
        </View>

        <Fontisto
          style={{ marginTop: 5 }}
          name="bell"
          size={25}
          color={"black"}
        />
      </View>

   
    </View>
  );
};

export default Header;
