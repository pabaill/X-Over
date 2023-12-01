import { StyleSheet, Text, View } from 'react-native';
import XOverTheme from '../assets/XOverTheme';
import {useState} from 'react';

export default function Profile() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 7, backgroundColor: XOverTheme.bg_blue}} />
      <View style={{flex: 10, flexDirection: 'row'}}>
        <Text style={styles.settingsText}>Settings</Text>
        <Text style={styles.profileText}>Profile</Text>
        <Text style={styles.settingsText}>Logout</Text>
      </View>
      <image style={{flex: 16, borderWidth: 1, borderColor: 'white', backgroundColor: XOverTheme.bg_blue}}>
      source={require("./../assets/default_profile.png")}
      </image>
      <View style={{flex: 16, backgroundColor: XOverTheme.bg_blue}} />
      <View style={{flex: 67}} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileText: {
    flex: 5,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: XOverTheme.bg_blue,
    fontFamily: "Kanit_400Regular"
  },
  settingsText: {
    flex: 5,
    fontSize: 15,
    color: 'white',
    backgroundColor: XOverTheme.bg_blue,
    textAlign: 'center',
    fontFamily: "Kanit_400Regular"
  }
});