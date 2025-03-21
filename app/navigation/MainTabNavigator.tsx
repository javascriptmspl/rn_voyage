import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import { COLORS } from "../styles";
import { TabNavigatorParams } from "./types";

import HomeOn from "../../assets/icon/tabIcons/HomeOn.svg";
import HomeOff from "../../assets/icon/tabIcons/HomeOff.svg";
import ExploreOn from "../../assets/icon/tabIcons/ExploreOn.svg";
import ExploreOff from "../../assets/icon/tabIcons/ExploreOff.svg";
import LocationOn from "../../assets/icon/tabIcons/LocationOn.svg";
import LocationOff from "../../assets/icon/tabIcons/LocationOff.svg";
import ProfileOn from "../../assets/icon/tabIcons/ProfileOn.svg";
import ProfileOff from "../../assets/icon/tabIcons/ProfileOff.svg";
import ExploreStack from "./ExploreStack";
import LocationStack from "./LocationStack";

// Type definition for HideTabContext
interface HideTabContextType {
  hideTab: boolean;
  setHideTab: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HideTabContext = React.createContext<
  HideTabContextType | undefined
>(undefined);

const Tab = createBottomTabNavigator<TabNavigatorParams>();

const MainTabNavigator = () => {
  const [hideTab, setHideTab] = React.useState(false);

  return (
    <HideTabContext.Provider value={{ hideTab, setHideTab }}>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            height: 70,
            borderWidth: 0,
            opacity: hideTab ? 0 : 1,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (focused ? <HomeOn /> : <HomeOff />),
          }}
        />
        <Tab.Screen
          name="ExploreTab"
          component={ExploreStack}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <ExploreOn /> : <ExploreOff />,
          }}
        />
        <Tab.Screen
          name="LocationTab"
          component={LocationStack}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <LocationOn /> : <LocationOff />,
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <ProfileOn /> : <ProfileOff />,
          }}
        />
      </Tab.Navigator>
    </HideTabContext.Provider>
  );
};

export default MainTabNavigator;
