import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  RegularText,
  SmallText,
  SmallText10B,
  SmallTextB,
} from "../../components/MyText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { COLORS } from "../../styles";
import { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "../../sheets/sheets";

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

const Details = () => {
  return (
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
        icon={() => <Feather name="calendar" size={24} color={COLORS.icon} />}
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

        <TouchableOpacity
          onPress={() => SheetManager.show(SHEETS.FlightBookingSheet)}
          style={styles.btn}
        >
          <SmallText style={{ color: "white" }}>Book Now</SmallText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
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
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
});
