import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Calender from "./Calender";
import Header from "./Header";
import Details from "./Details";
import Tickets from "./Tickets";
import AirAsia from "../../../assets/images/svg/AirAsia.svg";
import {
  RegularText,
  SmallText,
  SmallText10,
  SmallTextB,
} from "../../components/MyText";
import { COLORS } from "../../styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchFlight2Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 20 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1]}
        renderItem={() => {
          return (
            <>
              <Header />
              <Calender />

              <View style={{ marginTop: 15 }}>
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
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <AirAsia />
                    <SmallTextB bold>Air Asia</SmallTextB>
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

              <Details />
              <Tickets />
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SearchFlight2Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.lightBg,
    width: 60,
  },
});
