import { StyleSheet, Text, View, Image } from 'react-native';
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
      <Image source={require("./../assets/default_profile.png")} style={{flex: 16, borderWidth: 1, borderColor: 'white', backgroundColor: XOverTheme.bg_blue}} />
      <View style={{flex: 16, backgroundColor: XOverTheme.bg_blue}} />
      <View style={{flex: 16, flexDirection: 'row'}}>
        <View style={{flex: 5, backgroundColor: XOverTheme.bg_blue}} />
        <Image style={{flex: 5, width: 20, backgroundColor: XOverTheme.bg_blue}} source={require("./../assets/default_profile.png")} />
        <View style={{flex: 5, backgroundColor: XOverTheme.bg_blue}} />
      </View>
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