import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/types";
import { BigText, RegularTextGray } from "../../components/MyText";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import Input from "../../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_KEYS } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { setIsFirstTime } from "../../redux/feature/app/appSlice";

const LoginScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack}>
      <ScrollView style={{ flex: 1, marginHorizontal: 15, paddingTop: 40 }}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../../assets/images/AppLogo.png")} />
          </View>
          <BigText bold style={{ marginTop: 40 }}>
            Sign in
          </BigText>
          <BigText bold style={{ marginBottom: 15 }}>
            your account
          </BigText>
          <RegularTextGray>
            Experience the world at your fingertips with
          </RegularTextGray>
          <RegularTextGray style={{ marginBottom: 30 }}>
            our travel mobile app!
          </RegularTextGray>

          <Input title="Name" placeholder="John Doe" />
          <Input title="Email" placeholder="example@gmail.com" />
          <Input title="Phone Number" placeholder="+1 564 898 56" />
        </View>

        <PrimaryBtn
          containerStyle={{ marginTop: 30 }}
          onPress={() => {
            dispatch(setIsFirstTime(false))
            AsyncStorage.setItem('IS_FIRST_TIME', 'false')
            navigation.navigate("VerifyOtp");
          }}
          text="Get OTP"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default LoginScreen;
