import { TouchableOpacity, Text, StyleSheet } from "react-native";


import React from "react";
import { deviceBasedDynamicDimension } from "../scale";
import R from "../R";


export default function CustomButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.customStyles ? props.customStyles : styles.button_nextButton}
    >
      <Text style={styles.TEXTCOLORSTYLEText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button_nextButton: {
    width: "100%",
    height: deviceBasedDynamicDimension(56, false, 1),
     marginTop: deviceBasedDynamicDimension(19, false, 1),
    opacity: 1,
    backgroundColor:'#007AFF',
     borderRadius: deviceBasedDynamicDimension(6, true, 1),
    justifyContent: "center",
  },
  TEXTCOLORSTYLEText: {
    opacity: 1,
    backgroundColor: "transparent",
    includeFontPadding: false,
    padding: deviceBasedDynamicDimension(0, true, 1),
    color: '#FFFFFF',
    textAlign: "center",
    textAlignVertical: "top",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: deviceBasedDynamicDimension(15, true, 1),
    fontFamily: R.fonts.RobotoBold
    // fontWeight: '700'
  },
});
