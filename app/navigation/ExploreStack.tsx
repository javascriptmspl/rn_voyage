import React from 'react';
import { ChatStackParams, ExploreStackParams} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/ChatScreen/MessageScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Stack = createNativeStackNavigator<ExploreStackParams>();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
