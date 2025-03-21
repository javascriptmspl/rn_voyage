import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {HomeStackParams} from './types';
import LocationScreen from '../screens/LocationScreen';
import FilterScreen from '../screens/FilterScreen';
import BestNatureScreen from '../screens/BestNatureScreen';
import TrendingDestinationScreen from '../screens/TrendingDestinationScreen';
import SearchFlightScreen from '../screens/SearchFilghtScreen';
import HotelSearchScreen from '../screens/HotelSearchScreen';
import TrainSearchScreen from '../screens/TrainSearchScreen';
import BusSearchScreen from '../screens/BusSearchScreen';
import SearchFlight2Screen from '../screens/SearchFlight2Screen';

// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<HomeStackParams>();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="BestNature" component={BestNatureScreen} />
      <Stack.Screen name="SearchFlight" component={SearchFlightScreen} />
      <Stack.Screen name="SearchFlight2" component={SearchFlight2Screen} />
      <Stack.Screen name="HotelSearch" component={HotelSearchScreen} />
      <Stack.Screen name="TrainSearch" component={TrainSearchScreen} />
      <Stack.Screen name="BusSearch" component={BusSearchScreen} />
      <Stack.Screen name="TrendingDestination" component={TrendingDestinationScreen} />
      
    </Stack.Navigator>
  );
};

export default HomeStack;
