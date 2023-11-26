// import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Friends from './screens/Friends';
import Profile from './screens/Profile';
import { StyleSheet, View, Image, Text } from 'react-native';
import theme from './assets/XOverTheme';

import { FontAwesome } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

import {auth} from './firebase';
import { useEffect, useState } from 'react';
import Login from './screens/Login';

import { useFonts, Kanit_400Regular } from "@expo-google-fonts/kanit";


export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
      }
      console.log(user)
      return unsubscribe;
    })
  }, []);

  const [selectedIndex, changeIndex] = useState(0);

  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {(user === null) ? (
        <Login />
        ) :
          (
            <Tab.Navigator 
            screenOptions={{
              tabBarActiveTintColor: theme.base_orange,
              tabBarInactiveTintColor: "#ffffff", 
              tabBarActiveBackgroundColor: theme.bg_blue, 
              tabBarInactiveBackgroundColor: theme.bg_blue,
              header: ({ navigation, route, options, layout }) => {
                // const title = getHeaderTitle(options, route.name);
              
                return (<></>)
              },
              headerStyle: {
                height: 80,
              }
              }}>
              <Tab.Screen name="Home" component={Home} tabBarLabelStyle={{fontFamily: "Kanit_400Regular"}} options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                  ),
                }} 
              />
              <Tab.Screen name="Projects" component={Projects} tabBarLabelStyle={{fontFamily: "Kanit_400Regular"}} options={{
                  tabBarLabel: "Projects",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="search" color={color} size={size} />
                  ),
                }} 
              />
              <Tab.Screen name="Friends" component={Friends} tabBarLabelStyle={{fontFamily: "Kanit_400Regular"}} options={{
                  tabBarLabel: "Friends",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="users" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="Profile" component={Profile} tabBarLabelStyle={{fontFamily: "Kanit_400Regular"}} options={{
                  tabBarLabel: "Profile",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});