import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomButton, CustomCard, Loader1, Spacer} from '../components';
import R from '../R';
import {styles} from '../Styles';
import axios from 'axios';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Beginer',
    budgetText: 'Budget : Below Rs 50 K',
    rating: 3,
    checkedImg: R.images.check,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Moderate',
    budgetText: 'Budget : Below Rs 100 K',
    rating: 4,
    checkedImg: R.images.unCheck,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Expert',
    budgetText: 'Budget : Below Rs 200 K',
    rating: 4.5,
    checkedImg: R.images.unCheck,
  },
];



const FreelancersList = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [rating, setRating] = useState(null);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

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

  const filterData = rating => {
    const newData = data?.filter(item => {
      return item?.avg_ratings === rating;
    });
    setOpenModal(false);
    if (newData && newData?.length > 0) {
      setData(newData);
    } else {
      setData(null);
    }
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
            <Image source={R.images.Ellipse_green} style={styles.greenElipse}/>
              {item.specializations?.map(item => {
                // let separatedItem = item.join(', ')
                return (
                  <View key={item}>
                    <Text style={styles.specsText}>{item + ', '}</Text>
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
      {/* -------Header----- */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() =>ToastAndroid.show('Coming Soon', 2000)} style={{flex: 1}}>
          <Image source={R.images.drawer} style={styles.drawerStyle} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.freelancersText}>Freelancers</Text>
        </View>
        <View style={styles.searchContainerStyle}>
          <TouchableOpacity onPress={() =>ToastAndroid.show('Coming Soon', 2000)}>
            <Image source={R.images.SearchIcon} style={styles.searchIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>  setOpenModal(!openModal)}>
            <Image source={R.images.filterIcon} style={styles.filterIconStyle} />
          </TouchableOpacity>
        </View>
      </View>

      {/* -----MainView------- */}

      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.noDataView}>
          <Text>No Data</Text>
        </View>
      )}

      {/* -----Modal------- */}

      <Modal visible={openModal} transparent={true} animationType={'fade'}>
        <View style={styles.modalContainer}>
          <View style={styles.upperModalView}>
            <View style={{alignItems: 'center'}}>
              <Image source={R.images.Shape} style={styles.openView} />
            </View>
            <Spacer />
            <FlatList
              data={DATA}
              renderItem={({item}) => {
                return (
                  <>
                    <TouchableOpacity  
                    onPress={() => {
                        setSelectedId(item.id);
                        setRating(item.rating);
                      }}
                      style={styles.modalDataView}>
                      <View style={{flex: 1}}>
                        <Text style={styles.titleText}>{item?.title}</Text>
                        <Text style={styles.budgetTextStyle}>
                          {item?.budgetText}
                        </Text>
                      </View>
                      <View style={styles.secondView}>
                        <View style={styles.starsView}>
                          {maxRating.map((i, key) => {
                            return (
                              <View activeOpacity={0.7} key={i}>
                                <Image
                                  style={styles.starImageStyle}
                                  source={
                                    i <= item.rating
                                      ? R.images.star_black
                                      : item.rating === 4.5
                                      ? R.images.halfStar
                                      : R.images.star_uncheck
                                  }
                                />
                              </View>
                            );
                          })}
                        </View>
                        <Image
                          source={
                            item.id === selectedId
                              ? R.images.check
                              : R.images.unCheck
                          }
                          style={styles.checkedImg}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.horizontalLineView} />
                  </>
                );
              }}
              ListFooterComponent={() => {
                return (
                  <CustomButton
                    title="Save"
                    onPress={() => filterData(rating)}
                  />
                );
              }}
              ListFooterComponentStyle={styles.bottomListView}
              keyExtractor={item => item.id}
              extraData={selectedId}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FreelancersList;
