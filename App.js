/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NetInfo from '@react-native-community/netinfo';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TrainingsScreen from './screens/TrainingsScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HistoryScreen from './screens/HistoryScreen';
import CustomDrawer from './screens/CustomDrawer';
import HomeScreen from './screens/HomeScreen';
import RankingScreen from './screens/RankingScreen';
import RequestsScreen from './screens/RequestsScreen';
import TrainingDetailsScreen from './screens/TrainingDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Trainings'}
      backBehavior={'initialRoute'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Trainings') {
            iconName = 'dumbbell';
            size = focused ? 25 : 20;
            color = focused ? '#0eb05f' : '#555';
          } else if (route.name === 'Requests') {
            iconName = 'align-justify';
            size = focused ? 25 : 20;
            color = focused ? '#0eb05f' : '#555';
          } else if (route.name === 'History') {
            iconName = 'user';
            size = focused ? 25 : 20;
            color = focused ? '#0eb05f' : '#555';
          } else if (route.name === 'Ranking') {
            iconName = 'award';
            size = focused ? 25 : 20;
            color = focused ? '#0eb05f' : '#555';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0eb05f',
        tabBarInactiveTintColor: '#555',
        tabBarActiveBackgroundColor: '#333',
        tabBarInactiveBackgroundColor: '#222326',
        tabBarLabelStyle: {fontSize: 14},
      })}>
      <Tab.Screen
        name="Trainings"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Ranking"
        component={RankingScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const DrawerHome = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="TrainingsList"
        component={TrainingsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="TrainingDetails"
        component={TrainingDetailsScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

class App extends Component {
  componentDidMount() {
    NetInfo.fetch().then(networkState => {
      console.log('Connection type - ', networkState.type);
      console.log('Is connected? - ', networkState.isConnected);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      trainings: [],
    };
  }

  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            backBehavior={'initialRoute'}>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Reset"
              component={ResetPasswordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DrawerHome"
              component={DrawerHome}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

export default App;
