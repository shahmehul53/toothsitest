import {Platform, StyleSheet} from 'react-native';
import R from './R';
import {deviceBasedDynamicDimension} from './scale';
export const styles = StyleSheet.create({
  //define styles here
  flatListStyle: {marginTop: deviceBasedDynamicDimension(20, true, 1)},
  firstContainer: {
    flexDirection: 'row',
    flex: 2,
  },
  nameText: {
    color: R.colors.black,
    fontSize: deviceBasedDynamicDimension(18, true, 1),
    fontWeight: '700',
    lineHeight: deviceBasedDynamicDimension(18, true, 1),
    paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
    paddingTop: deviceBasedDynamicDimension(20, true, 1),
  },
  projectCompletedView: {
    borderRadius: deviceBasedDynamicDimension(50, true, 1),
    backgroundColor: '#F3F3F3',
    padding: deviceBasedDynamicDimension(10, true, 1),
    marginLeft: deviceBasedDynamicDimension(10, true, 1),
    marginTop: deviceBasedDynamicDimension(5, true, 1),
  },
  projectCompletedViewProfile: {
    borderRadius: deviceBasedDynamicDimension(50, true, 1),
    backgroundColor: '#F3F3F3',
    marginLeft: deviceBasedDynamicDimension(21, true, 1),
    marginTop: deviceBasedDynamicDimension(5, true, 1),
    paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
    paddingVertical: deviceBasedDynamicDimension(10, true, 1),
    width: '60%',
  },
  projectCompletedText: {
    fontWeight: '700',
    color: '#535353',
    fontSize: deviceBasedDynamicDimension(14, true, 1),
  },
  projectCompletedValue: {
    fontWeight: '500',
    color: '#535353',
    fontSize: deviceBasedDynamicDimension(14, true, 1),
    lineHeight: deviceBasedDynamicDimension(16, true, 1),
  },
  projectCompletedTextProfile: {
    fontWeight: '400',
    color: '#535353',
    fontSize: deviceBasedDynamicDimension(14, true, 1),
    paddingTop: deviceBasedDynamicDimension(10, true, 1),
    paddingHorizontal: deviceBasedDynamicDimension(35, true, 1),
    paddingBottom:deviceBasedDynamicDimension(6, true, 1)

  },
  projectCompletedValueProfile: {
    fontWeight: '400',
    color: '#535353',
    fontSize: deviceBasedDynamicDimension(14, true, 1),

  },
  emailText: {
    paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
    paddingVertical: deviceBasedDynamicDimension(10, true, 1),
    color: '#007AFF',
    textDecorationColor: '#007AFF',
    textDecorationLine: 'underline',
    fontWeight: '400',
    fontSize: deviceBasedDynamicDimension(14, true, 1),
    lineHeight: deviceBasedDynamicDimension(16, true, 1),
  },
  emailTextProfile: {
    color: '#007AFF',
    textDecorationColor: '#007AFF',
    textDecorationLine: 'underline',
    fontWeight: '400',
    fontSize: deviceBasedDynamicDimension(14, true, 1),
  },
  specsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: deviceBasedDynamicDimension(20, true, 1),
  },
  horizontalLineView: {
    borderWidth: 0.2,
    height: 0,
    width: '100%',
    backgroundColor: '#EFEFEF',
    opacity: 0.2,
  },
  imgView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgDataView: {
    height: deviceBasedDynamicDimension(65, true, 1),
    width: deviceBasedDynamicDimension(100, true, 1),
    backgroundColor: 'red',
    borderRadius: deviceBasedDynamicDimension(25, true, 1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: deviceBasedDynamicDimension(65, true, 1),
    width: deviceBasedDynamicDimension(65, true, 1),
    borderRadius: deviceBasedDynamicDimension(65 / 2, true, 1),
    overflow: 'hidden',
  },
  specsText: {
    fontWeight: '400',
    fontSize: deviceBasedDynamicDimension(11, true, 1),
    lineHeight: deviceBasedDynamicDimension(16, true, 1),
    color: R.colors.black,
  },
  ratingText: {
    fontWeight: '400',
    fontSize: deviceBasedDynamicDimension(11, true, 1),
    lineHeight: deviceBasedDynamicDimension(13, true, 1),
    color: R.colors.black,
  },
  starImg: {
    height: deviceBasedDynamicDimension(14, true, 1),
    width: deviceBasedDynamicDimension(14.29, true, 1),
    marginRight: deviceBasedDynamicDimension(10, true, 1),
  },
  secondContainer: {flex: 2, flexDirection: 'row'},
  ratingsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  profileNameText: {
    fontSize: deviceBasedDynamicDimension(36, true, 1),
    fontWeight: '700',
    paddingHorizontal: deviceBasedDynamicDimension(35, true, 1),
    color: R.colors.black,
  },
  imgBackgroundContainer: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    marginTop: 50,
  },
  absViews: {
    position: 'absolute',
    top: deviceBasedDynamicDimension(20, true, 1),
    left: deviceBasedDynamicDimension(20, true, 1),
  },
  ratingsAbsView: {
    position: 'absolute',
    top: deviceBasedDynamicDimension(20, true, 1),
    left: deviceBasedDynamicDimension(320, true, 1),
  },
  backImg: {
    height: deviceBasedDynamicDimension(20.66, true, 1),
    width: deviceBasedDynamicDimension(12.27, true, 1),
  },
  aboutText: {
    fontSize: deviceBasedDynamicDimension(13, true, 1),
     lineHeight: deviceBasedDynamicDimension(18, true, 1),
    fontWeight: '400',
    paddingHorizontal: deviceBasedDynamicDimension(35, true, 1),
    paddingTop: deviceBasedDynamicDimension(14, true, 1),
    color: '#000000',
  },
  locationCard: {
    bottom: 0,
    height: deviceBasedDynamicDimension(140, true, 1),
    zIndex: 10,
    width: '100%',
    backgroundColor: R.colors.white,
    shadowColor: 'black',
    shadowOffset: {width: 30, height: 30},
    shadowOpacity: 20,
    shadowRadius: 8,
    paddingHorizontal: deviceBasedDynamicDimension(35, true, 1),
    paddingTop: deviceBasedDynamicDimension(18, true, 1),
    elevation: 20,
    overflow: 'visible',
  },
  secondContainerProfile: {flexDirection: 'row'},
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: deviceBasedDynamicDimension(6, true, 1),
  },
  locationIcon: {
    marginRight: deviceBasedDynamicDimension(5, true, 1),
    width: deviceBasedDynamicDimension(13.88, true, 1),
  },
  specsTextProfile: {
    fontWeight: '400',
    fontSize: deviceBasedDynamicDimension(11, true, 1),
    lineHeight: deviceBasedDynamicDimension(13, true, 1),
    color: '#979797',
  },
  addressText: {
    fontWeight: '400',
    fontSize: deviceBasedDynamicDimension(11, true, 1),
    lineHeight: deviceBasedDynamicDimension(13, true, 1),
    color: '#007AFF',
  },
  imgProfileView: {
    height: '60%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'stretch',
    position: 'absolute',
    zIndex: -1,
  },
  blac_star_view: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: R.colors.white,
    paddingHorizontal: deviceBasedDynamicDimension(10, true, 1),
    paddingVertical: deviceBasedDynamicDimension(5, true, 1),
    borderRadius: deviceBasedDynamicDimension(50, true, 1),
  },
  black_star_img: {
    height: deviceBasedDynamicDimension(14, true, 1),
    width: deviceBasedDynamicDimension(14, true, 1),
    marginRight: deviceBasedDynamicDimension(10, true, 1),
  },
  bottomView: {
    backgroundColor: R.colors.white,
    borderTopLeftRadius: deviceBasedDynamicDimension(10, true, 1),
    borderTopRightRadius: deviceBasedDynamicDimension(10, true, 1),
    paddingTop: deviceBasedDynamicDimension(20, true, 1),
    marginTop: 50
  },
  freelancersText: {
    fontWeight: '700',
    fontSize: deviceBasedDynamicDimension(17, true, 1),
    lineHeight: deviceBasedDynamicDimension(22, true, 1),
    color: R.colors.black,
  },
  textStyle: {
    fontSize: deviceBasedDynamicDimension(14, true, 1),
    color: 'black',
    marginLeft: Platform.OS === 'android' ? '1%' : null,
  }
});
