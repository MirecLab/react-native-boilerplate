import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Appearance, Text } from "react-native";
import { useState } from "react";

import Home from "./src/pages/Home";
import CustomLightTheme from "./src/config/themes/LightTheme";
import CustomDarkTheme from "./src/config/themes/DarkTheme";
import PageHeader from "./src/pages/utils/PageHeader";
import ThemeContext from "./src/context/Theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from './src/pages/Profile';
import Logger from './src/config/logger/logger';
import UserContext from './src/context/User';
import { FIREBASE_AUTH } from './src/config/firebase/FirebaseConfig';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Trainings from './src/pages/Trainings';

const Tab = createBottomTabNavigator();

export default function App() {
  const myTheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState("light");
  const [isConnected, setIsConnected] = useState(FIREBASE_AUTH.currentUser ? true : false)

  const currentTheme = theme == "light" ? CustomLightTheme : CustomDarkTheme

  React.useEffect(() => {
    Logger.log("Configuring Google Signin")
    GoogleSignin.configure({webClientId:"35452144833-fnoq8bm7tav4s5r8og289p3m6fihimfi.apps.googleusercontent.com"});
    Logger.log("Google Signin was configured")
  }, [])


  Logger.log("Building App component")

  return (
    <UserContext.Provider value={{ setConnectionStatus: setIsConnected, status: isConnected, userData: null }}>
      <ThemeContext.Provider value={currentTheme}>
        
          <NavigationContainer
            theme={currentTheme}
          >
            <Tab.Navigator
              initialRouteName="Home"
              safeAreaInsets={{ bottom: 0 }}
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name

                  switch (rn) {
                    case "Home": iconName = "home-sharp"
                      break;
                    case "Profile": iconName = "person-sharp"
                      break;
                    case "Trainings": iconName = "barbell-sharp"
                      break;
                  }
                  if (focused) {
                    return <Ionicons name={iconName} size={28} color={currentTheme.colors.primary} />
                  }
                  return <Ionicons name={iconName} size={28} color={currentTheme.colors.inversed} />
                },
              })

              }
            >
                <Tab.Screen
                  name="Trainings"
                  component={Trainings}
                  options={{
                    headerTitle: (props) => (
                      <PageHeader
                        title="Trainings"
                        theme={theme}
                        setTheme={setTheme}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Home"
                  component={Home}
                  options={{
                    headerTitle: (props) => (
                      <PageHeader title="Home" theme={theme} setTheme={setTheme} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                    headerTitle: (props) => (
                      <PageHeader title="Profile" theme={theme} setTheme={setTheme} />
                    ),
                  }}
                />

            </Tab.Navigator>
          </NavigationContainer>



      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
