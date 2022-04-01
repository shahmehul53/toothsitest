import React from "react";
import { View, SafeAreaView, Platform, StyleSheet } from "react-native";
import R from "../R";
//local imports



const RootView = (props) => {
  return Platform.OS == "android" ? (
    <View style={[styles.rootView, props.customStyles]}>{props.children}</View>
  ) : (
    <SafeAreaView style={[styles.rootView, props.customStyles]}>{props.children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootView: {
     flex: 1,
    //  backgroundColor: COLORS.backgroundColor,
  backgroundColor: R.colors.background,
  },
});

export default RootView;
