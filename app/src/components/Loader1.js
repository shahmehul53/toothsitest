import React from 'react';
import { View, Text, Modal, ActivityIndicator } from 'react-native';
import { deviceBasedDynamicDimension } from '../scale';
import R from '../R';



export default function Loader1(props) {

  return (
    <Modal visible={props.isVisible} animationType="fade" transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: R.colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: R.colors.white,
            padding: '4%',
            borderRadius: 8,
            width: '80%',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} />
          <Text
            style={{
              marginTop: '5%',
              fontSize: deviceBasedDynamicDimension(14, true, 1),
              // fontFamily: FONTS.NunitoRegular,
              textAlign: 'center',
              color: "rgba(3, 15, 45, 1)",
            }}>
            Loading...
          </Text>
        </View>
      </View>
    </Modal>
  )
}


