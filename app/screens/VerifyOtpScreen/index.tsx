import {
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/types";
import {
  TitleText,
} from "../../components/MyText";
import OtpInputs from "react-native-otp-inputs";
import PrimaryBtn from "../../components/PrimaryBtn";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/feature/auth/authSlice";
import { COLORS } from "../../styles";
                                                             
const VerifyOtpScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [otp, setOtp] = useState("");
  const params = useRoute<any>().params;
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleVerifyOtp = async () => {
    dispatch(
      setAuth({
        name: "GHOST",
        token: "GHOST_TOKEN",
      })
    );
  };

  return (
    <MainLayout onBack={navigation.goBack} title="Verify Email">
      <>
        <ScrollView>
          <TitleText
            style={{
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Please enter the verification code we sent
          </TitleText>
          <TitleText
            style={{
              textAlign: "center",
              marginBottom: 40,
            }}
          >                     
            to your email ex*****@gmail.com
          </TitleText>
          <OtpInputs
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
            autofillFromClipboard={false}
            inputStyles={{
              borderColor: "lightgray",
              borderWidth: 2,
              width: 52,
              margin: 8,
              fontSize: 18,
              textAlign: "center",
              marginTop: 50,
              borderRadius: 5,color:COLORS.primary
            }}
            handleChange={(code) => setOtp(code)}
            numberOfInputs={5}
          />
        <View style={{ marginTop: 50 }}>
          <PrimaryBtn
            onPress={handleVerifyOtp}
            // onPress={() => navigation.navigate('MainTab')}
            text={"Verify"}
            loading={loading}
            containerStyle={{ marginHorizontal: 20, marginBottom: 30 }}
          />
        </View>
        </ScrollView>

      </>
    </MainLayout>
  );
};

export default VerifyOtpScreen;
