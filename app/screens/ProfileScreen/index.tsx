import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_KEYS } from "../../utils/helper";
import MainLayout from "../../components/MainLayout";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RegularText, TitleText } from "../../components/MyText";
import Options from "./Options";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "../../sheets/sheets";

const { width } = Dimensions.get("screen");

const IMAGE_URI =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

const AccountScreen = () => {
  const [profilePhotoUri, setProfilePhotoUri] = React.useState(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  console.log({ profilePhotoUri }, "Photo");

  const openGallery = async () => {
    await launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response: any) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("Image picker error: ", response.error);
        } else {
          console.log({ response }, "selected image");
          setProfilePhotoUri(response.assets[0].uri);
        }
      }
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };
  const openCamera = async () => {
    await launchCamera(
      {
        mediaType: "photo",
      },
      (response: any) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("Image picker error: ", response.error);
        } else {
          console.log({ response }, "sdfsdfds");
          setProfilePhotoUri(response.assets[0].uri);
        }
      }
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };
  const closeSheet = async () => {
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const deletePhoto = async () => {
    setProfilePhotoUri(null);
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  return (
    <MainLayout onBack={navigation.goBack} title="Account">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.imgView}>
            {profilePhotoUri ? (
              <Image style={styles.img} source={{ uri: profilePhotoUri }} />
            ) : (
              <Image style={styles.img} source={{ uri: IMAGE_URI }} />
            )}

            <View style={styles.cameraBtn}>
              <TouchableOpacity
                onPress={() =>
                  SheetManager.show(SHEETS.CameraAndGalleryOption, {
                    //@ts-ignore
                    payload: {
                      openCamera,
                      openGallery,
                      closeSheet,
                      deletePhoto,
                    },
                  })
                }
              >
                <AntDesign name="camera" size={15} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <RegularText bold style={{ textAlign: "center", marginTop: 10 }}>
          John Doe
        </RegularText>

        {/* {} */}
        <Options />

        {/* {END} */}
      </ScrollView>
    </MainLayout>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  imgView: {
    height: 122,
    width: 122,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 30,
    borderWidth: 3,
    borderColor: COLORS.primary,
    alignItems: "center",
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 135,
    right: 1,
    left: 0,
  },
  cameraBtn: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
