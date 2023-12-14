import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ------ [ Screens ] ------
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import ApplyScreen from "../screens/apply/ApplyScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/login/LoginScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import SignIn from "../screens/login/SignIn";
import SignInForm from "../screens/login/SignInForm";
import SignInFinish from "../screens/login/SignInFinish";
import WalletScreen from "../screens/profile/wallet/WalletScreen";
import MyInfoScreen from "../screens/profile/myInfo/MyInfoScreen";
import ChatManageScreen from "../screens/profile/chatlink/ChatManageScreen";
import NotifyScreen from "../screens/apply/notify/NotifyScreen";
import ResultScreen from "../screens/apply/result/ResultScreen";
import CompleteScreen from "../screens/apply/complete/CompleteScreen";
import { useRecoilValue } from "recoil";
import { loginState } from "../store/LoginState";
import SuccessScreen from "../screens/apply/success/SuccessScreen";
import SuccessSignIn from "../screens/login/SuccessSignIn";
import VersionScreen from "../screens/profile/version/VersionScreen";
import MatchingLogScreen from "../screens/profile/matchinglog/MatchingLogScreen";

// ----- [ Tabs ] ------
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const ApplyStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const Rootstack = () => {
  const { isLogined } = useRecoilValue(loginState);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "gray", // 활성 탭의 아이콘 색상을 빨간색으로 설정
          tabBarInactiveTintColor: "white",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeTabScreens}
          options={{
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={32} />,
            tabBarActiveBackgroundColor: "#72727220",
          }}
          // listeners={({ navigation }) => ({
          //   tabPress: (e) => {
          //     // 로그인 상태가 아니라면 기본 동작을 방지하고 로그인 스크린으로 리디렉션
          //     if (!isLogined) {
          //       e.preventDefault();
          //       navigation.navigate("로그인");
          //     } else {
          //       e.preventDefault();
          //       navigation.navigate("서비스 소개");
          //     }
          //   },
          // })}
        />
        <Tab.Screen
          name="Apply"
          component={ApplyTabScreens}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="handshake" size={32} />
            ),

            tabBarActiveBackgroundColor: "#72727220",
          }}
          // listeners={({ navigation }) => ({
          //   tabPress: (e) => {
          //     //e.preventDefault();
          //     navigation.navigate("매칭 신청하기");
          //   },
          // })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileTabScreens}
          options={{
            tabBarIcon: () => <Ionicons name="person-circle" size={32} />,
            tabBarActiveBackgroundColor: "#72727220",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeTabScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="로그인" component={LoginScreen} />
      <HomeStack.Screen
        name="서비스 소개"
        component={HomeScreen}
        options={{ headerBackVisible: false }}
      />
      <HomeStack.Screen name="회원가입" component={SignIn} />
      <HomeStack.Screen name="정보입력" component={SignInForm} />
      <HomeStack.Screen name="회원가입 완료" component={SignInFinish} />
      <HomeStack.Screen name="완료" component={SuccessSignIn} />
    </HomeStack.Navigator>
  );
};

const ApplyTabScreens = () => {
  return (
    <ApplyStack.Navigator>
      <ApplyStack.Screen name="매칭 신청하기" component={ApplyScreen} />
      <ApplyStack.Screen name="신청정보 확인하기" component={NotifyScreen} />
      <ApplyStack.Screen name="매칭결과 확인하기" component={ResultScreen} />
      <ApplyStack.Screen name="밥 메이트 연결완료" component={CompleteScreen} />
      <ApplyStack.Screen name="신청완료" component={SuccessScreen} />
    </ApplyStack.Navigator>
  );
};

const ProfileTabScreens = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="main"
        options={{ title: "프로필" }}
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        name="wallet"
        options={{ title: "내 지갑" }}
        component={WalletScreen}
      />
      <ProfileStack.Screen
        name="myInfo"
        options={{ title: "내 프로필 정보" }}
        component={MyInfoScreen}
      />
      <ProfileStack.Screen
        name="chatManage"
        options={{ title: "내 채팅링크 관리하기" }}
        component={ChatManageScreen}
      />
      <ProfileStack.Screen
        name="version"
        options={{ title: "버전 및 개발" }}
        component={VersionScreen}
      />
      <ProfileStack.Screen
        name="log"
        options={{ title: "내 매칭기록 보기" }}
        component={MatchingLogScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default Rootstack;
