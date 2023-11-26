import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import SegmentedControl from '@react-native-segmented-control/segmented-control';
import XOverTheme from '../assets/XOverTheme';
import { useState } from 'react';

import { useFonts, Kanit_400Regular, Kanit_700Bold } from "@expo-google-fonts/kanit";

import { BlurView } from 'expo-blur';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from 'react-native-reanimated-carousel';

const PROJ_DATA = [
  {name: "iPhone 25", updates: [{
    name: "Bill", text: "Updated Meeting Notes for 11/11", link: "LINK_TO_MEETING_NOTES"
  }]},
  {name: "Google Pixel 12", updates: [{
    name: "John", text: "Updated Meeting Notes for 11/11", link: "LINK_TO_MEETING_NOTES"
  }]},
  {name: "Microsoft Surface XL 14", updates: [{
    name: "Alice", text: "Updated Meeting Notes for 11/11", link: "LINK_TO_MEETING_NOTES"
  }]}
]


export default function Home() {

  const width = Dimensions.get('window').width;

  const [selectedIndex, changeIndex] = useState(0);
  const [currProject, changeProject] = useState(PROJ_DATA[0])
  const [progressValue, changeProgressValue] = useState(0)

  let [fontsLoaded] = useFonts({
    Kanit_400Regular, Kanit_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{padding: 20}}>
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
        {selectedIndex === 0 ? (
          <View>
            {/* <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20}}>
              <BlurView intensity={1} tint='dark' style={[styles.blurred, styles.project_prev]}>
                <Text style={{textAlign: "center"}}>Left</Text>
              </BlurView>
              <View style={[styles.middle, styles.project_prev]}>
                <Text style={{textAlign: "center"}}>Middle</Text>
              </View>
              <BlurView intensity={1} tint='dark' style={[styles.blurred, styles.project_prev]}>
                <Text style={{textAlign: "center"}}>Right</Text>
              </BlurView>
            </View> */}
            <Carousel
                loop
                width={width - 40}
                height={width / 2}
                autoPlay={false}
                mode='parallax'
                modeConfig={{
                  parallaxScrollingScale: 0.8,
                  parallaxScrollingOffset: 100,
                }}
                data={PROJ_DATA}
                onSnapToItem={(index) => {changeProject(PROJ_DATA[index]); changeProgressValue(index)}}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={[styles.header, {textAlign: "center"}]}>
                            {PROJ_DATA[index]?.name}
                        </Text>
                    </View>
                )}
            />
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 20}}>
              {PROJ_DATA.map((val, index) => {
                return (index === progressValue) ? (<View key={index} style={[styles.pagination, {backgroundColor: XOverTheme.base_orange}]}></View>) : (<View key={index} style={[styles.pagination, {backgroundColor: "transparent"}]}></View>)
              })}
            </View>
            <Image style={{width: "auto", height: 40}} source={require('./../assets/X-Over-Drawer.png')} />
            <View style={styles.shadow} >
              <View style={styles.headerWrapper}>
                <Text style={styles.header}>Updates: </Text>
              </View>
            </View>
            <View style={{flexDirection: "column", marginTop: 10, height: 400}}>
              <View style={styles.bubbleWrapper}>
                <Image style={styles.bubble} source={require("./../assets/X-Over-Bubble.png")} />
              </View>
              <View style={styles.bubbleWrapper}>
                <Image style={styles.bubble} source={require("./../assets/X-Over-Bubble.png")} />
              </View>
              <View style={styles.bubbleWrapper}>
                <Image style={styles.bubble} source={require("./../assets/X-Over-Bubble.png")} />
              </View>
            </View>
          </View>
        ) : (<></>)}
      </View>
  );
}


const styles = StyleSheet.create({
  project_prev: {textAlign: "center", borderStyle: "solid", borderColor: "black", borderWidth: 5, height: 150, margin: 10},
  bubbleWrapper: {marginBottom: 30},
  bubble: {width: "auto", height: 70},
  blurred: { flex: 2 },
  middle: {flex: 3},
  header: {
    fontFamily: "Kanit_700Bold", 
    fontSize: 30
  },
  headerWrapper: {
    borderColor: "black", 
    borderWidth: 3, 
    backgroundColor: XOverTheme.base_orange, 
    width: 145, 
    marginLeft: 10, 
    padding: 5,
    top: -5,
    left: -5
  },
  shadow: {backgroundColor: "black", width: 145},
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 10
  }
});