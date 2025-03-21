import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import {
  MediumText,
  RegularText,
  RegularTextGray,
  SmallText,
} from "../../components/MyText";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../styles";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import Zocial from "react-native-vector-icons/Zocial";
import AntDesign from "react-native-vector-icons/AntDesign";

const faq = [
  {
    ques: "I missed the delivery of my order today. What should I do??",
    answer:
      "The courier service delivering your order usually tries to deliver on the next business day in case you miss a delivery. You can check your SMS for more details on when the courier service will try to deliver again",
  },
  {
    ques: "How do I know my order has been confirmed?",
    answer:
      "To confirm your order on the FAR app, check your email for a confirmation message, look for a push notification, or view your order status in the app under Order History.",
  },
  {
    ques: "How quickly can I get my order delivered??",
    answer:
      "Delivery times vary based on your location and the seller's processing time. Check the FAR app or website for estimated delivery times specific to your order.",
  },
  {
    ques: "Why can’t track my order even though it has been shipped?",
    answer:
      "If you can’t track your order even though it has been shipped, it might be due to a delay in updating the tracking information. Check again after a few hours or contact FAR customer support for assistance.",
  },
  {
    ques: "What should I do if I don’t get the invoice for my shipped?",
    answer:
      "If you don’t receive the invoice for your shipment, check your email spam folder first. If it’s not there, contact FAR customer support through the app or website to request a copy of the invoice.",
  },
];

const HelpSupportScreen = () => {
  const navigation = useNavigation();
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const toggleAnswer = (index: any) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <MainLayout onBack={navigation.goBack} title="Support">
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 5,
          }}
        >
          <TouchableOpacity style={styles.container}>
            <View style={styles.view}>
              <Zocial name="call" size={18} color={COLORS.primary} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <SmallText>Talk to us</SmallText>
              <RegularText>022228910856</RegularText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container}>
            <View style={styles.view}>
              <MaterialIcons name="email" size={15} color={COLORS.primary} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <SmallText>Write us at</SmallText>
              <RegularText>vaccance@gmail.com</RegularText>
            </View>
          </TouchableOpacity>
        </View>

        <SmallText>Frequently Asked Questions</SmallText>
        <View style={{ marginTop: 15 }}>
          {faq.map((item, index) => (
            <TouchableOpacity
              style={{
                padding: 5,
                marginBottom: 20,
                justifyContent: "space-between",
                paddingBottom: 10,
                flexDirection: "row",

                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 10,
                backgroundColor: "white",marginHorizontal:5,paddingHorizontal:10
              }}
              key={index}
              onPress={() => toggleAnswer(index)}
            >
              <View style={{ width: "90%" }}>
                <RegularText style={{ fontSize: 17 }}>{item.ques}</RegularText>
                {expandedIndex === index && (
                  <Text style={{ marginTop: 5 }}>{item.answer}</Text>
                )}
              </View>
              <AntDesign
                name={expandedIndex === index ? "up" : "down"}
                size={15}
                color="black"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default HelpSupportScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    marginBottom: 15,
  },
  view: {
    height: 30,
    width: 30,
    backgroundColor: "#FFEFDA",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
