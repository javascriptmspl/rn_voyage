import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SmallText, SmallTextB, TitleText } from "../../components/MyText";
import { COLORS } from "../../styles";
import RangeSlider from "../../components/RangeSlider";
import { Rating, AirbnbRating } from "react-native-ratings";
import CheckBox from "react-native-check-box";

const Hotel = () => {
  const [priceMin, setPriceMin] = React.useState(500);
  const [priceMax, setPriceMax] = React.useState(7000);
  const [rooms, setRooms] = React.useState<Boolean>(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [dob, setDob] = useState<any>("");
  const [rating, setRating] = useState(0);

  return (
    <View>
      {/* {PRICE} */}
      <TitleText style={{ marginTop: 20 }} bold>
        Price Range
      </TitleText>
      <View style={styles.container}>
        <View style={styles.row}>
          <SmallText style={{ fontSize: 12, color: COLORS.grey }}>
            ${priceMin} - ${priceMax}
          </SmallText>
        </View>

        <RangeSlider
          values={[priceMin, priceMax]}
          onChange={[setPriceMin, setPriceMax]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <SmallText style={{ fontSize: 12, color: COLORS.grey }}>
            $100
          </SmallText>
          <SmallText style={{ fontSize: 12, color: COLORS.grey }}>
            $10,000
          </SmallText>
        </View>
      </View>

      <SmallTextB style={{ marginTop: 20 }}>Location</SmallTextB>
      <View style={styles.input}>
        <TextInput placeholder="Place" />
      </View>

      <SmallTextB style={{ marginTop: 20 }}>Rooms</SmallTextB>
      <View style={styles.input}>
        <TextInput
          keyboardType="numeric"
          placeholder="No. of room"
        />
      </View>
      {/* 
       <CheckBox
        style={{ flex: 1, padding: 10 }}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
        //@ts-ignore
        isChecked={isChecked} 
        leftText={"CheckBox"} 
      /> */}
      <AirbnbRating
        count={5} // Total number of stars
        defaultRating={4} // Default rating
        size={30} // Size of the stars
        onFinishRating={(rating) => setRating(rating)} // Function to update state when rating changes
      />
    </View>
  );
};

export default Hotel;
const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    height: 50,
    paddingHorizontal: 11,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 6,
    marginHorizontal: 2,
    marginTop: 5,
  },
});
