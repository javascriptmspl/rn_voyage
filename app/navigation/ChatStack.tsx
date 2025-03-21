import React from 'react';
import { ChatStackParams} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/ChatScreen/MessageScreen';
const Stack = createNativeStackNavigator<ChatStackParams>();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default ChatStack;
