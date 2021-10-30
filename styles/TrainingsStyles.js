import {StyleSheet} from 'react-native';
import {black, black2, green, white, white2, white3} from './Colors';

const trainingsStyles = StyleSheet.create({
  formContent: {
    flexDirection: 'row',
  },
  inputContainer: {
    borderBottomColor: white3,
    backgroundColor: white,
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  searchIcon: {
    marginLeft: '5%',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: white,
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  notificationList: {
    marginTop: '2%',
    width: '100%',
    padding: 10,
  },
  card: {
    width: '100%',
    backgroundColor: white,
    flexDirection: 'row',
    borderRadius: 30,
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: black2,
    width: '100%',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: black2,
  },
  imageContent: {
    flex: 4,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: 'wrap',
  },
  image: {
    height: 120,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'center',
    color: white,
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: white2,
    marginTop: 5,
  },
  content: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bolts: {
    flexDirection: 'row',
  },
});

export default trainingsStyles;
