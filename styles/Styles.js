import {StyleSheet} from 'react-native';
import {black, green, grey, white} from './Colors';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cogBtn: {
    backgroundColor: black,
    padding: 5,
    borderRadius: 20,
    position: 'absolute',
    top: '70%',
    left: '75%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  inputView: {
    backgroundColor: black,
    borderBottomWidth: 2,
    borderBottomColor: grey,
    width: '80%',
    height: RFValue(45),
    marginBottom: RFValue(20),
    alignItems: 'flex-start',
  },

  textInput: {
    height: RFValue(50),
    flex: 1,
    padding: RFValue(10),
    marginLeft: RFValue(20),
    fontSize: RFValue(16),
    color: grey,
  },

  btn: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: green,
    height: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(40),
    backgroundColor: black,
  },
  btnText: {
    color: white,
    fontSize: RFValue(18),
  },
  exitBtn: {
    position: 'absolute',
    top: 1,
    left: 1,
    marginLeft: '5%',
    marginTop: '5%',
  },
  pickerItem: {
    fontSize: RFValue(14),
  },
});

export default styles;
