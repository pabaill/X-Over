import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, Pressable } from 'react-native';

import SegmentedControl from '@react-native-segmented-control/segmented-control';
import XOverTheme from '../assets/XOverTheme';
import { useState } from 'react';

import { useFonts, Kanit_400Regular, Kanit_500Medium, Kanit_700Bold } from "@expo-google-fonts/kanit";

import { BlurView } from 'expo-blur';

import XOverHeader from '../components/XOverHeader';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from 'react-native-reanimated-carousel';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import PROJ_DATA from './../assets/mock_data';
import XOverCarousel from '../components/XOverCarousel';


export default function Home({navigation}) {

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
            <XOverCarousel navigation={navigation} changeProgressValue={changeProgressValue} changeProject={changeProject} progressValue={progressValue}/>
            {/* <Carousel
                width={width - 40}
                height={width / 2}
                autoPlay={false}
                mode='parallax'
                modeConfig={{
                  parallaxScrollingScale: 0.8,
                  parallaxScrollingOffset: 200,
                }}
                data={PROJ_DATA}
                onSnapToItem={(index) => {changeProject(PROJ_DATA[index]); changeProgressValue(index)}}
                renderItem={({ index }) => (
                  <Pressable 
                    style={({pressed}) => [{flex: 1,marginHorizontal: "25%", width: "50%", backgroundColor: pressed ? XOverTheme.base_orange : "transparent"}]}
                    onPress={() => navigation.jumpTo('Projects', {project: PROJ_DATA[index]})}
                    key={PROJ_DATA[index].name + index}
                    >
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: "center"
                        }}
                    >
                        <Text style={[styles.header, {textAlign: "center"}]}>
                            {PROJ_DATA[index]?.name}
                        </Text>
                    </View>
                  </Pressable>
                )}
            /> */}
            <Image style={{width: "auto", height: 40, marginBottom: 10}} source={require('./../assets/X-Over-Drawer.png')} />
            <XOverHeader text={"Updates: "} />
            <View style={{height: 1000, marginTop: 20}}>
              <FlatList
                data={currProject.updates}
                renderItem={({item, index}) => (
                <View key={index + item.text + item.link} style={{flex: 1, flexDirection: "row", height: 70}}>
                  <Image key={item.name + " profile" + index} style={{flex: 1, height: "auto", width: "auto"}} source={require("./../assets/default_profile.png")} />
                  <ImageBackground key={item.text + " bubble" + index} style={[styles.bubble, {flex: 4}]} source={require("./../assets/X-Over-Bubble.png")}>
                    <Text style={{position: "absolute", color: "white", fontFamily: "Kanit_400Regular", textAlign: "right", right: 20, top: 0}}>{item.time.toLocaleTimeString('en-US')}</Text>
                    <Text style={{marginLeft: 40, marginTop: 5, color: "white", fontFamily: "Kanit_400Regular", fontSize: 18}}>{item.name}</Text>
                    <Text style={{marginLeft: 40, color: "white", paddingLeft: 20, fontFamily: "Kanit_400Regular"}}>{item.text}</Text>
                    <Text style={{marginLeft: 40, color: "white", paddingLeft: 20, fontFamily: "Kanit_400Regular"}}>{item.link}</Text>
                  </ImageBackground>
                </View>
                )}
                keyExtractor={(item) => {progressValue + item.text + item.link}}
              />
            </View>
          </View>
        ) : (<></>)}
      </View>
  );
}


const styles = StyleSheet.create({
  project_prev: {textAlign: "center", borderStyle: "solid", borderColor: "black", borderWidth: 5, height: 150, margin: 10},
  bubbleWrapper: {marginBottom: 30},
  bubble: {width: "auto", height: "auto"},
  blurred: {flex: 2},
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
});