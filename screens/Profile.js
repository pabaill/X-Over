import { StyleSheet, Text, View } from 'react-native';
import XOverTheme from '../assets/XOverTheme';

export default function Profile() {
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          height: '10%',
          width: '100%',
          backgroundColor: XOverTheme.bg_blue,
        }}
      />
      <View
        style={{
          height: '4%',
          width: '100%',
        }}
      />
      <View
        style={{
          height: '19%',
          width: '100%',
          backgroundColor: XOverTheme.bg_blue,
        }}
      />
    </View>
  );
};
