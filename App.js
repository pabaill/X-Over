// import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Friends from './screens/Friends';
import Profile from './screens/Profile';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {auth} from './firebase';
import { useEffect, useState } from 'react';
import Login from './screens/Login';

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
  }, [])

  return (
    <NavigationContainer>
      {(user === null) ? (
      <Login />
      ) :
        (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" color={color} size={size} />
                ),
              }} 
            />
            <Tab.Screen name="Projects" component={Projects} options={{
                tabBarLabel: "Projects",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="search" color={color} size={size} />
                ),
              }} 
            />
            <Tab.Screen name="Friends" component={Friends} options={{
                tabBarLabel: "Friends",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="users" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
      )}
    </NavigationContainer>
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