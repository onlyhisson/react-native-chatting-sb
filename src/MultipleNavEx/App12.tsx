/*
  Tab navigation
  Drawer navigation
  make drawer opened when selecting a specific tab
*/

// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function MeetingScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Meeting!</Text>
    </View>
  );
}

function MyPageScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MyPage!</Text>
    </View>
  );
}

function Drawer1({navigation}) {
  React.useEffect(
    () => navigation.addListener('focus', () => navigation.openDrawer()),
    [navigation],
  );

  React.useEffect(
    () =>
      navigation.addListener('blur', () => {
        navigation.closeDrawer();
      }),
    [navigation],
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}

function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
    </View>
  );
}

function Drawer2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Drawer2!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Drawer1">
      <Drawer.Screen
        name="Drawer1"
        component={Drawer1}
        options={{
          drawerLabel: 'Home',
          gestureEnabled: false,
        }}
      />
      <Drawer.Screen name="Drawer2" component={Drawer2} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'ios-menu' : 'ios-menu';
            } else if (route.name === 'Meeting') {
              iconName = focused ? 'ios-people' : 'ios-people';
            } else if (route.name === 'MyPage') {
              iconName = focused ? 'ios-person' : 'ios-person';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search';
            }
            // You can return any component that you like here!
            //return <IconButton iconName={iconName} style={{color: color}} />;
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Menu" component={MyDrawer} />
        <Tab.Screen name="Meeting" component={MeetingScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
