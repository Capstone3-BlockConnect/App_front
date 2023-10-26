import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ------ [ Screens ] ------
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import ApplyScreen from "../screens/apply/ApplyScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/login/LoginScreen";

// ----- [ Tabs ] ------
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const ApplyStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const Rootstack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeTabScreens} />
        <Tab.Screen name="Apply" component={ApplyTabScreens} />
        <Tab.Screen name="Profile" component={ProfileTabScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeTabScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="main" component={HomeScreen} />
      <HomeStack.Screen name="Login" component={LoginScreen} />
    </HomeStack.Navigator>
  );
};

const ApplyTabScreens = () => {
  return (
    <ApplyStack.Navigator>
      <ApplyStack.Screen name="main" component={ApplyScreen} />
    </ApplyStack.Navigator>
  );
};

const ProfileTabScreens = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="main" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default Rootstack;
