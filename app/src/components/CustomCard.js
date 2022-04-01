import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import R from "../R";
import { deviceBasedDynamicDimension } from "../scale";
//local imports



 const CustomCard = (props) => {
  return (
    <View
    // style={props.customStyles ? props.customStyles : styles.cardContainer}
       style={[styles.cardContainer, props.customStyles]}
      // activeOpacity={0.5}
      // onPress={props.onPress}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    //  flexDirection: "row",
    marginVertical: deviceBasedDynamicDimension(10, true, 1),
    marginHorizontal: deviceBasedDynamicDimension(20, true, 1),
   
    // padding: deviceBasedDynamicDimension(20, true, 1),
    borderRadius: deviceBasedDynamicDimension(10, true, 1),
    // backgroundColor: R.colors.purpleDot,
    // backgroundColor: R.colors.white,
    elevation: 4,
    backgroundColor: R.colors.white,
    // backgroundColor: COLORS.white,
    shadowColor: R.colors.primaryShadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    
    // width: "100%",
  },
});

export default CustomCard;
