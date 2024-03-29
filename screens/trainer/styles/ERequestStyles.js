import {StyleSheet} from 'react-native';
import {
  black,
  blue,
  green,
  grey,
  grey2,
  grey3,
  grey4,
  grey5,
  grey6,
  white,
  white2,
  white3,
  yellow,
} from '../../../styles/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

const eRequestStyles = StyleSheet.create({
  goBack: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  requests: {
    marginTop: '2%',
    width: '100%',
    padding: RFValue(10),
  },
  requestsEmpty: {
    flex: 1,
    marginTop: '2%',
    width: '100%',
    padding: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  requestsEmptyText: {
    color: white,
    fontSize: RFValue(24),
  },
  selectedExercises: {
    marginTop: '2%',
    width: '100%',
    padding: RFValue(10),
  },
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: grey5,
    padding: '5%',
    borderRadius: RFValue(20),
  },
  titleContent: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: white,
    borderRadius: RFValue(20),
    padding: '5%',
  },
  btnText: {
    color: white,
    fontSize: RFValue(18),
    fontWeight: 'bold',
  },
  bodyPart: {
    backgroundColor: white,
    borderRadius: RFValue(20),
    padding: '5%',
    marginTop: '3%',
  },
  bodyPartText: {
    fontSize: RFValue(16),
  },
  description: {
    flex: 3,
    height: RFValue(160),
    width: '100%',
    backgroundColor: white,
    borderRadius: RFValue(20),
    padding: '5%',
    marginVertical: '3%',
  },
  cardFooter: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3%',
  },
  btn: {
    width: '60%',
    borderRadius: RFValue(30),
    borderWidth: RFValue(3),
    borderColor: green,
    height: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: green,
  },
  exercisesContent: {
    flex: 1,
    width: '100%',
  },
  exerciseNameContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  exerciseDetailsContent: {
    flex: 10,
  },
  position: {
    fontWeight: 'bold',
    fontSize: RFValue(18),
    marginBottom: '3%',
    color: white,
  },
  exerciseName: {
    flex: 4,
    fontWeight: 'bold',
    fontSize: RFValue(18),
    marginBottom: '3%',
  },
  positionDrag: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: '1%',
    marginRight: '3%',
    height: '100%',
  },
  positionDragBtn: {
    flex: 1,
    paddingVertical: '5%',
  },
  pickerExerciseContent: {
    flex: 3,
    backgroundColor: green,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: RFValue(20),
    padding: '1%',
  },
  pickerExercise: {
    flex: 2,
    color: white,
  },
  inputExercise: {
    marginRight: '2%',
    fontSize: RFValue(14),
    borderRadius: RFValue(10),
    paddingLeft: '2%',
    flex: 1,
    backgroundColor: grey6,
    color: black,
  },
  exercisesCard: {
    width: '100%',
    backgroundColor: white,
    borderRadius: RFValue(20),
    padding: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  selectedExercisesCard: {
    width: '100%',
    backgroundColor: white,
    borderRadius: RFValue(20),
    padding: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
export default eRequestStyles;
