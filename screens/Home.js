import { StyleSheet, Text, View } from 'react-native';

import SegmentedControl from '@react-native-segmented-control/segmented-control';
import XOverTheme from '../assets/XOverTheme';
import { useState } from 'react';

import { useFonts, Kanit_400Regular } from "@expo-google-fonts/kanit";


export default function Home() {

  const [selectedIndex, changeIndex] = useState(0);

  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SegmentedControl
        style={{marginTop: 40, width: "80%", marginLeft: "10%", marginRight: "10%"}}
        values={['Recent', 'Pinned']}
        selectedIndex={selectedIndex}
        backgroundColor={XOverTheme.bg_blue}
        tintColor={XOverTheme.base_orange}
        fontStyle={{fontFamily: "Kanit_400Regular"}}
        onChange={(event) => {
          changeIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
  );
}