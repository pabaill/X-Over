import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Friends from './screens/Friends';
import Profile from './screens/Profile';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Projects" component={Projects} />
          <Tab.Screen name="Friends" component={Friends} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
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
