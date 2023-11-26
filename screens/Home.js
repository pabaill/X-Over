import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import SegmentedControl from '@react-native-segmented-control/segmented-control';
import XOverTheme from '../assets/XOverTheme';
import { useState } from 'react';

import { useFonts, Kanit_400Regular, Kanit_700Bold } from "@expo-google-fonts/kanit";

import { BlurView } from 'expo-blur';

import Carousel from 'react-native-reanimated-carousel';


export default function Home() {

  const width = Dimensions.get('window').width;

  const [selectedIndex, changeIndex] = useState(0);

  let [fontsLoaded] = useFonts({
    Kanit_400Regular, Kanit_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  _renderItem = ({item, index}) => {
    return (
        <View>
            <Text>{ item.title }</Text>
        </View>
    );
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
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
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
  bubbleWrapper: {flex: 1},
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
  shadow: {backgroundColor: "black", width: 145}
});