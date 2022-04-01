import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {styles} from '../Styles';
import {CustomButton, Loader1} from '../components';
import R from '../R';

const Profile = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <>
      <Image source={{uri: data.image}} style={styles.imgProfileView} />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}} />

        <View style={styles.bottomView}>
          <View style={{}}>
            <Text style={styles.profileNameText}>
              {data?.first_name} {data?.last_name}
            </Text>
            <View style={styles.projectCompletedViewProfile}>
              <Text style={styles.emailTextProfile}>{data?.email}</Text>
            </View>
            <Text style={styles.projectCompletedTextProfile}>
              projects_completed :
              <Text style={styles.projectCompletedValueProfile}>
                {' '}
                {data?.projects_completed}
              </Text>
            </Text>
          </View>

          <View style={{ height: 100}}>
            <ScrollView persistentScrollbar={true} style={{flex: 1}}>
              <Text style={styles.aboutText}>{data?.about}</Text>
            </ScrollView>
          </View>

         
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.absViews}>
          <Image source={R.images.Back} style={styles.backImg} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ratingsAbsView}>
          <View style={styles.blac_star_view}>
            <Image source={R.images.star_black} style={styles.black_star_img} />
            <Text style={styles.ratingText}>{data?.avg_ratings}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.locationCard}>
        <View style={styles.secondContainerProfile}>
          {data?.specializations?.map(item => {
            return (
              <View key={item}>
                <Text style={styles.specsTextProfile}>{item}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.locationView}>
          <Image
            source={R.images.Rectangle_location}
            style={styles.locationIcon}
          />
          <Text style={styles.addressText}>{data?.address}</Text>
        </View>

        <CustomButton
          title="Proceed"
          onPress={() => {
            ToastAndroid.show('Coming Soon', 2000);
          }}
        />
      </View>
    </>
  );
};

export default Profile;
