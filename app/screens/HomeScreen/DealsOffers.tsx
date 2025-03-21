import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { RegularText } from "../../components/MyText";

const DealsOffers = () => {
  return (
    <View>
      <RegularText bold style={{ marginVertical:10 }}>
        Deals & Offers
      </RegularText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[1, 2, 3, 4]}
        renderItem={() => {
          return (
            <View>
              <Image
                style={{
                  height: 200,
                  width: 340,
                  marginRight: 10,
                  borderRadius: 20,
                }}
                source={require("../../../assets/images/DealOffer.png")}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default DealsOffers;
