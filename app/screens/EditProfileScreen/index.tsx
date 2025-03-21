import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../navigation/types';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_KEYS} from '../../utils/helper';
import MainLayout from '../../components/MainLayout';
import DatePicker from 'react-native-date-picker';
import {
  MediumText,
  RegularText,
  RegularTextGray,
  SmallText,
  TitleText,
} from '../../components/MyText';
import Input from '../../components/Input';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import PrimaryBtn from '../../components/PrimaryBtn';

const checkRememberMe = async () => {
  try {
    const res = await AsyncStorage.getItem(LOCAL_KEYS.REMEMBER_ME);
    if (res) {
      return JSON.parse(res);
    } else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
  }
};

const IMAGE_URI =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEGRRM_Ch7UY-Wi9QYHWH99vKSTMXIpfKZg&s';

const EditProfileScreen = () => {
  const [profilePhotoUri, setProfilePhotoUri] = React.useState(null);

  const dispatch = useDispatch();
  const token = useSelector((s: any) => s.auth.accessToken);
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [dob, setDob] = useState<any>('');
  const [defaultVal, setDefaultVal] = useState(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
    
  const openCamera = async () => {
    await launchCamera(
      {
        mediaType: 'photo',
      },
      (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          console.log({response}, 'sdfsdfds');
          setProfilePhotoUri(response.assets[0].uri);
        }
      },
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const openGallery = async () => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          console.log({response}, 'sdfsdfds');
          setProfilePhotoUri(response.assets[0].uri);
        }
      },
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const closeSheet = async () => {
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  console.log({profilePhotoUri}, 'Photo');

  React.useEffect(() => {
    const init = async () => {
      try {
        const res = await checkRememberMe();
        if (!res) return;
        setDefaultVal(res);
      } catch (error) {
        console.log(error);
      }
    };
    const init2 = async () => {
      await AsyncStorage.setItem(
        LOCAL_KEYS.IS_FIRST_TIME_OPEN,
        JSON.stringify(false),
      );
      console.log('IS FIRST TIME SET TO FALSE');
    };
    init();
    init2();
  }, []);

  return (
    <MainLayout onBack={navigation.goBack} title="Account">
      <ScrollView
        style={{flex: 1, marginHorizontal: 15}}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.imgView}>
            {profilePhotoUri ? (
              <Image style={styles.img} source={{uri: profilePhotoUri}} />
            ) : (
              <Image style={styles.img} source={{uri: IMAGE_URI}} />
            )}
          </View>
          <View style={styles.cameraBtn}>
            <MaterialIcons
              onPress={() => {
                SheetManager.show(SHEETS.CameraAndGalleryOption, {
                  //@ts-ignore
                  payload: {openCamera, openGallery, closeSheet},
                });
              }}
              name="add"
              size={22}
              color={COLORS.white}
            />
          </View>
        </View>
        <TitleText style={{textAlign: 'center'}}>Simon Sais</TitleText>
        <SmallText style={{textAlign: 'center'}}>
          585 Corona Lane 07086
        </SmallText>
        <SmallText style={{textAlign: 'center'}}>
          Member Since <Text style={{color: COLORS.primary}}>2014</Text>
        </SmallText>

        {/* {END} */}
        <View style={{marginBottom: 15}}>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Company" />
          <Input placeholder="Phone Number" />

          <TouchableOpacity
            onPress={() => setIsDatePickerOpen(true)}
            style={styles.container}>
            <DatePicker
              modal
              mode="date"
              open={isDatePickerOpen}
              date={dob || new Date()}
              onConfirm={dob => {
                setIsDatePickerOpen(false);
                setDob(dob);
              }}
              onCancel={() => {
                setIsDatePickerOpen(false);
              }}
            />
            <RegularTextGray>
              {dob ? dob?.toISOString().slice(0, 10) : 'Date of birth'}
            </RegularTextGray>
            <AntDesign name="calendar" size={20} color={'gray'} />
          </TouchableOpacity>

          <Input placeholder="City" />
          <Input placeholder="State" />
          <Input placeholder="Address" />
          <Input placeholder="Post Code" />
          <Input placeholder="Country" />

          <PrimaryBtn
            containerStyle={{marginVertical: 20}}
            onPress={() => navigation.goBack()}
            text="Save"
          />
        </View>

      </ScrollView>
    </MainLayout>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  imgView: {
    height: 120,
    width: 120,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 135,
    right: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderWidth: 2,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5,
  },
  cameraBtn: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    alignSelf: 'center',
    bottom: 35,
    left: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
