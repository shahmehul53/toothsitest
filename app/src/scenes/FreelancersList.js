import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomCard, Loader1, Spacer} from '../components';
import useFetch from '../useFetch';
import R from '../R';
import {styles} from '../Styles';
import axios from 'axios';
import {deviceBasedDynamicDimension} from '../scale';

const FreelancersList = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = () => {
    var config = {
      method: 'get',
      url: 'https://assets.toothsi.in/assets/json/test.json',
      headers: {},
    };

    setLoading(true);

    axios(config)
      .then(function (response) {
        setLoading(false);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      });
  };

  const filterData = () => {
    const newData = data?.filter(item => {
      return item?.avg_ratings === 3.5;
    });
    setData(newData);
    console.log('newData==>', newData);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('profile', {
          data: item,
        })
      }>
      <CustomCard>
        <>
          <View style={styles.firstContainer}>
            <View>
              <Text style={styles.nameText}>
                {item.first_name} {item.last_name}
              </Text>
              <View style={styles.projectCompletedView}>
                <Text style={styles.projectCompletedText}>
                  projects_completed :
                  <Text style={styles.projectCompletedValue}>
                    {' '}
                    {item.projects_completed}
                  </Text>
                </Text>
              </View>
              <Text style={styles.emailText}> {item.email}</Text>
            </View>
            <View style={styles.imgView}>
              <Image source={{uri: item.image}} style={styles.img} />
            </View>
          </View>
          <View style={styles.horizontalLineView} />
          <View style={styles.specsView}>
            <View style={styles.secondContainer}>
              {item.specializations?.map(item => {
                return (
                  <View key={item}>
                    <Text style={styles.specsText}>{item}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.ratingsView}>
              <Image source={R.images.star} style={styles.starImg} />
              <Text style={styles.ratingText}>{item.avg_ratings}</Text>
            </View>
          </View>
        </>
      </CustomCard>
      <Loader1 isVisible={loading} />
    </TouchableOpacity>
  );

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: 'red',
          justifyContent: 'space-evenly',
          marginHorizontal: deviceBasedDynamicDimension(27.5, true, 1),
          paddingVertical: deviceBasedDynamicDimension(10, true, 1),
        }}>
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show('Coming Soon', 2000);
          }}
          style={{flex: 1}}>
          <Image
            source={R.images.drawer}
            style={{
              height: deviceBasedDynamicDimension(15.5, true, 1),
              width: deviceBasedDynamicDimension(23, true, 1),
            }}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.freelancersText}>Freelancers</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show('Coming Soon', 2000);
            }}>
            <Image
              source={R.images.SearchIcon}
              style={{
                height: deviceBasedDynamicDimension(20.5, true, 1),
                width: deviceBasedDynamicDimension(20, true, 1),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // filterData();
              setOpenModal(!openModal);
            }}>
            <Image
              source={R.images.filterIcon}
              style={{
                height: deviceBasedDynamicDimension(39, true, 1),
                width: deviceBasedDynamicDimension(39, true, 1),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // style={styles.flatListStyle}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No Data</Text>
        </View>
      )}

      {/* -----Modal------- */}

      <Modal visible={openModal} transparent={true} animationType={'fade'}>
        <View
          style={{
            flex: 1,
            backgroundColor: R.colors.modalBlack,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: R.colors.white,
              padding: '3%',
              borderRadius: 8,
              width: '90%',
              alignItems: 'center',
            }}>
            <Text style={styles.textStyle}>{'props.title'}</Text>

            <Spacer />

            <Text>In modal</Text>
            {/* <FlatList
              style={{width: '100%', height: '30%'}}
              data={ManagerEmails}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    setInputData({...InputData, userRole: item.title});
                    setShowManagerEmailsModal(false);
                  }}>
                  <Text
                    style={{
                      fontSize: R.dimensions.hp('2%'),
                      fontFamily: R.fonts.PoppinsRegular,
                      marginBottom: '5%',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            /> */}
            <Spacer />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FreelancersList;
