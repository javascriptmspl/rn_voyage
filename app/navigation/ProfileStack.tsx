import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParams} from './types';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import HelpOptionsScreen from '../screens/HelpOptionsScreen';
import FaqsScreen from '../screens/FaqsScreen';
import RateUsScreen from '../screens/RateUsScreen';
import HelpSupportScreen from '../screens/HelpSupportScreen';
import LanguageScreen from '../screens/LanguageScreen';
import SettingScreen from '../screens/SettingScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/ChatScreen/MessageScreen';
import CountryRegionScreen from '../screens/CountryRegionScreen';


// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<ProfileStackParams>();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="HelpOptions" component={HelpOptionsScreen} />
      <Stack.Screen name="Faq" component={FaqsScreen} />
      <Stack.Screen name="RateUs" component={RateUsScreen} />
      <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="CountryRegion" component={CountryRegionScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
