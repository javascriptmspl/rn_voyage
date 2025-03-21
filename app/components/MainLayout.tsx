import React from 'react';
import {COLORS} from '../styles';
import {View, SafeAreaView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

type Props = {
  children: React.ReactNode;
  title?: string;
  skipBtn?: string;
  onBack?: () => void;
  onPress?: () => void;
  onBackTitle?: string;
};

const MainLayout = ({children, title, skipBtn, onBack, onPress}: Props) => {
  const extraStyle = {
    marginVertical: 15,
    marginHorizontal: 15,
    marginTop: 0,
  };
  const navigation = useNavigation();
  return (
  
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          },
          onBack ? extraStyle : {},
        ]}>
        {onBack && (
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color={COLORS.black} />
          </TouchableOpacity>
        )}
        <Text style={{color: COLORS.black, fontSize: 16, fontWeight:'500'}}>
          {title}
        </Text>

        <AntDesign name="arrowleft" size={25} color={COLORS.white} />
        {/* <TouchableOpacity onPress={onPress}>
          <RegularText
            style={{color: COLORS.grey, fontSize: 17, fontWeight: '500'}}>
            {skipBtn}
          </RegularText>
        </TouchableOpacity> */}
      </View>
      {/* {title && (
        <View
          style={{
            borderWidth: 0.4,
            borderColor: 'rgba(0,0,0,0.2)',
          }}
        />
      )} */}
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;
