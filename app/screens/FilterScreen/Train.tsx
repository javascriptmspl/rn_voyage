import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SmallText, SmallTextB, TitleText } from "../../components/MyText";
import { COLORS } from "../../styles";
import RangeSlider from "../../components/RangeSlider";

const Train = () => {
  const [priceMin, setPriceMin] = React.useState(1000);
  const [priceMax, setPriceMax] = React.useState(4600);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [dob, setDob] = useState<any>("");
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
            marginTop: 5,
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

      <SmallTextB style={{ marginTop: 20 }}>From</SmallTextB>
      <View style={styles.input}>
        <TextInput placeholder="Station" />
      </View>

      <SmallTextB style={{ marginTop: 20 }}>To</SmallTextB>
      <View style={styles.input}>
        <TextInput placeholder="Station" />
      </View>
    </View>
  );
};

export default Train;

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
