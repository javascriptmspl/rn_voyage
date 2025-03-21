import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  RegularText,
  SmallText,
  SmallText10,
  SmallTextB,
} from "../../components/MyText";
import AirAsia from "../../../assets/images/svg/AirAsia.svg";
import AirLingua from "../../../assets/images/svg/AirLingus.svg";
import AirAstana from "../../../assets/images/svg/AirAstana.svg";
import { COLORS } from "../../styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const data = [
  { id: 1, title: "Air Lingus", icon: <AirLingua /> },
  { id: 2, title: "Air Astana", icon: <AirAstana /> },
];

const Tickets = () => {
  return (
    <View style={{marginTop:15}}>
   
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                style={{ height: 340, width: "102%", alignSelf: "center" }}
                source={require("../../../assets/images/Ticket.png")}
              />
              <View
                style={{
                  position: "absolute",
                  margin: 25,
                  marginHorizontal: 40,
                }}
              >
                {/* {LOGO TITLE} */}
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                  {item.icon}
                  <SmallTextB bold>{item.title}</SmallTextB>
                </View>

                {/* {LOCATION} */}
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
                    <RegularText bold style={{ color: COLORS.primary }}>
                      CGK
                    </RegularText>
                    <SmallText>Indonesia</SmallText>
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
                    <RegularText bold style={{ color: COLORS.primary }}>
                      CGK
                    </RegularText>
                    <SmallText>Indonesia</SmallText>
                  </View>
                </View>

                {/* {LINE} */}
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "lightgray",
                    borderStyle: "dashed",
                    marginTop: 35,
                  }}
                ></View>

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
                    <SmallText>Depart</SmallText>
                    <RegularText bold>10:30</RegularText>
                  </View>

                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      marginHorizontal: 20,
                    }}
                  >
                    <View style={styles.line}></View>
                    <FontAwesome5
                      name="plane"
                      size={20}
                      color={COLORS.primary}
                    />
                    <View style={styles.line}></View>
                  </View>

                  <View>
                    <SmallText>Flight No.</SmallText>
                    <RegularText bold>SR303</RegularText>
                  </View>
                </View>

                {/* {LOCATION} */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: 15,
                  }}
                >
                  <View>
                    <RegularText bold style={{ color: COLORS.primary }}>
                      $899
                    </RegularText>
                    <SmallText>Ticket Price</SmallText>
                  </View>

                  <TouchableOpacity>
                    <SmallText bold style={{ color: COLORS.primary }}>
                      View Details
                    </SmallText>
                  </TouchableOpacity>
                </View>

                {/* {END} */}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Tickets;
const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: COLORS.lightBg,
    width: 60,
  },
});
