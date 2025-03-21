import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "./sheets";
import Entypo from "react-native-vector-icons/Entypo";
import {
  RegularText,
  SmallText,
  SmallText10,
  SmallText10B,
  SmallTextB,
  TitleText,
} from "../components/MyText";
import Icon from "../../assets/images/svg/Spicejet.svg";
import { COLORS } from "../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

type RowProps = {
  title: string;
  icon?: () => React.ReactNode;
  description?: string;
};

const Row = ({ title, description, icon }: RowProps) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginRight: 15,
          width: 130,
        }}
      >
        {icon && icon()}
        <SmallTextB>{title}</SmallTextB>
      </View>

      <SmallTextB style={{ width: 150 }} bold>
        {description}
      </SmallTextB>
    </View>
  );
};

const FlightBookingSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.FlightBookingSheet);
  };

  return (
    <ActionSheet
      containerStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      id={props.sheetId}
      gestureEnabled
    >
      <View>
        <ScrollView>
          <View style={{ padding: 20 }}>
            {/* {HEADER} */}
            <View style={styles.row}>
              <Entypo name="cross" size={24} color="white" />
              <RegularText bold>Flight Details</RegularText>
              <Entypo onPress={close} name="cross" size={24} color="black" />
            </View>

            {/* {CONTAINER} */}
            <View style={styles.btn}>
              <TitleText style={{color:'white'}}>IND ----> FRC</TitleText>
              <SmallText style={{ color: "white" }}>
                Non stop | 55 min | Economy
              </SmallText>
            </View>

            {/* {ICON} */}
            <View style={styles.row2}>
              <Icon />
              <View>
                <SmallTextB bold>Spice Jet</SmallTextB>
                <SmallText10B bold>Flight No. 6E 2112</SmallText10B>
              </View>
            </View>

            {/* {TIMINGS} */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 25,
              }}
            >
              <View>
                <RegularText bold>10:30</RegularText>
                <SmallText>Sun, 3 Sep 23</SmallText>
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.lightBg,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <SmallText10 style={{ color: COLORS.primary }}>
                  12h 40min
                </SmallText10>
              </View>

              <View>
                <RegularText bold>11:30</RegularText>
                <SmallText>Sun, 3 Sep 23</SmallText>
              </View>
            </View>

            {/* {DETAILS} */}
            <View style={{ gap: 5, marginTop: 15 }}>
              <View style={styles.row}>
                <SmallTextB bold>Indonesia</SmallTextB>
                <SmallTextB bold>Indonesia</SmallTextB>
              </View>
              <View style={styles.row}>
                <SmallText>Indonesia</SmallText>
                <SmallText>Indonesia</SmallText>
              </View>
              <View style={styles.row}>
                <SmallText>International Airport</SmallText>
                <SmallText>France Airport</SmallText>
              </View>
              <View style={styles.row}>
                <SmallText>Terminal 2</SmallText>
                <SmallText>Terminal 2</SmallText>
              </View>
            </View>

            {/* {TITLE SERVICES} */}
            <TitleText bold style={{ marginVertical: 10 }}>
              Select Services
            </TitleText>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <View>
                  <SmallTextB bold>Saver</SmallTextB>
                  <SmallText10B>Fare offered by airline</SmallText10B>
                </View>
                <RegularText bold>$899</RegularText>
              </View>

              <Row
                title="Cabin Bag"
                icon={() => (
                  <MaterialCommunityIcons
                    name="bag-checked"
                    size={24}
                    color={COLORS.icon}
                  />
                )}
                description="7Kgs"
              />

              <Row
                title="Check In"
                icon={() => (
                  <MaterialCommunityIcons
                    name="bag-suitcase-outline"
                    size={24}
                    color={COLORS.icon}
                  />
                )}
                description="15Kgs"
              />

              <Row
                title="Cancellation"
                icon={() => (
                  <MaterialCommunityIcons
                    name="currency-usd"
                    size={24}
                    color={COLORS.icon}
                  />
                )}
                description="Not allowed"
              />

              <Row
                title="Date"
                icon={() => (
                  <Feather name="calendar" size={24} color={COLORS.icon} />
                )}
                description="Not Allowed"
              />
              <Row
                title="Seat"
                icon={() => (
                  <MaterialIcons
                    name="airline-seat-recline-extra"
                    size={24}
                    color={COLORS.icon}
                  />
                )}
                description="Middle Deat Free, Window/Aisle Chargale"
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity>
                  <SmallText bold style={{ color: COLORS.primary }}>
                    Show More
                  </SmallText>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* {FOOTER} */}
          <View style={styles.footer}>
            <View>
                <TitleText bold style={{color:'white'}}>$899</TitleText>
                <SmallText style={{color:'white'}}>For 1Adult</SmallText>
            </View>
            <TouchableOpacity style={styles.constinueBtn}>
                <RegularText bold style={{color:'white'}}>Continue</RegularText>
            </TouchableOpacity>
          </View>

          {/* {END} */}
        </ScrollView>
      </View>
    </ActionSheet>
  );
};

export default FlightBookingSheet;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  btn: {
    height: 65,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginTop: 20,
  },
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 5,
  },
  constinueBtn:{
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    width:150
  },footer:{
    backgroundColor: "black", height: 75 , flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20
  }
});
