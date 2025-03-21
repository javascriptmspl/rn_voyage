import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { format, addDays } from "date-fns";
  import { COLORS } from "../../styles";
  
  const Calender = () => {
    const today = new Date();
    const formattedToday = format(today, "EEE, MMM d");

    const [selectedDate, setSelectedDate] = useState(formattedToday);
  
    //@ts-ignore
    const generateDates = (startDate, daysCount) => {
      const dates = [];
      for (let i = 0; i < daysCount; i++) {
        const newDate = addDays(startDate, i);
        const formattedDate = format(newDate, "EEE, MMM d"); // Example format: "Fri, Sep 1"
        dates.push({ id: i.toString(), date: formattedDate, fullDate: newDate });
      }
      return dates;
    };
  
    const dates = generateDates(today, 30);
  
    //@ts-ignore

    const handleSelectDate = (date) => {
      setSelectedDate(date);
    };
    return (
      <View>
        <FlatList contentContainerStyle={{paddingLeft:10, marginTop:10}}
          data={dates}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dateBox,
                {
                  backgroundColor:
                    item.date === selectedDate ? COLORS.primary : "white",
                },
              ]}
              onPress={() => handleSelectDate(item.date)}
            >
              <Text style={[styles.dateText,{color: item.date === selectedDate ? "white" : "black"}]}>{item.date}</Text>
              <Text style={[styles.priceText,{color: item.date === selectedDate ? "white" : "black"}]}>$250</Text>
              
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  
  export default Calender;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
    },
    dateBox: {
      backgroundColor: "white",
      borderRadius: 8,
      marginHorizontal: 5,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      width: 120, 
      height: 45, 
      borderWidth: 1,
      borderColor: "lightgray",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
      marginVertical:10
    },
    dateText: {
      fontSize: 13,
      textAlign: "center",
    },
    priceText: {
      fontSize: 11,
      textAlign: "center",
    },
  });
  