import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../styles";
import LogoutPopup from "../../components/popups/LogoutPopup";
import PrimaryBtn from "../../components/PrimaryBtn";

type RowProps = {
  text: string;
  icon: () => React.ReactNode;
  onPress?: () => void;
};

const Row = ({ text, icon, onPress }: RowProps) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 5,
          borderRadius: 10,
          paddingVertical: 10,
          paddingLeft: 10,
          borderWidth: 1,
          borderColor: "lightgray",
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation: 2,
          backgroundColor: "white",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            width: 35,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "lightgray",
            height: 35,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          {icon && icon()}
        </View>
        <Text style={{ flex: 1, color: "black", fontWeight: "600" }}>
          {text}
        </Text>
        <Entypo name="chevron-small-right" color="lightgray" size={30} />
      </TouchableOpacity>
  );
};

const Options = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>

      <Row
        onPress={() => navigation.navigate("Chat")}
        icon={() => (
          <SimpleLineIcons name="volume-2" size={20} color="lightgray" />
        )}
        text="Messages"
      />

      <Row
        onPress={() => navigation.navigate("Notification")}
        icon={() => <Feather name="bell" size={20} color="lightgray" />}
        text="Notification"
      />
      
      <Row
        onPress={() => navigation.navigate("Todo")}
        icon={() => <Feather name="bell" size={20} color="lightgray" />}
        text="My Bookings"
      />

      <Row
        onPress={() => navigation.navigate('HelpSupport')}
        icon={() => <Feather name="headphones" size={20} color="lightgray" />}
        text="Support"
      />

      <Row
        onPress={() => navigation.navigate("Setting")}
        icon={() => <Feather name="settings" size={20} color="lightgray" />}
        text="Settings "
      />



      <LogoutPopup
        visible={logoutPopupVisible}
        onCancel={() => setLogoutPopupVisible(false)}
      />

      <PrimaryBtn 
      onPress={() => { 
        setLogoutPopupVisible(true);
      }}
      containerStyle={{width:'90%', marginVertical:20}} text="Log Out"/>
  
    </View>
  );
};

export default Options;
const styles = StyleSheet.create({
  onlineStatus: {
    backgroundColor: COLORS.primary,
    marginTop: 20,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: 35,
    marginBottom: 5,
    paddingHorizontal: 25,
    gap: 10,
  },
  img: {
    resizeMode: "contain",
    height: 135,
    width: 135,
    borderRadius: 135,
    right: 1,
  },
});
