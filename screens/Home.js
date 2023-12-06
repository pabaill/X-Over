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


export default function Home({navigation, route}) {

  const width = Dimensions.get('window').width;

  const [selectedIndex, changeIndex] = useState(route.params.showPinned ? 1 : 0);
  const [currProject, changeProject] = useState(PROJ_DATA.filter((proj) => proj.members.filter((m) => m.email === route.params.user.email).length > 0)[0])
  const [progressValue, changeProgressValue] = useState(0)

  let [fontsLoaded] = useFonts({
    Kanit_400Regular, Kanit_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground imageStyle={{opacity: .1}} style={{height: "100%"}} source={require('./../assets/comic_dots.jpg')} >
      <View style={{padding: 20}}>
        <SegmentedControl
            style={{marginTop: 40, width: "80%", marginLeft: "10%", marginRight: "10%"}}
            values={['Recent', 'Pinned']}
            selectedIndex={selectedIndex}
            backgroundColor={XOverTheme.bg_blue}
            tintColor={XOverTheme.base_orange}
            fontStyle={{fontFamily: "Kanit_400Regular", color: '#ffff'}}
            onChange={(event) => {
              changeIndex(event.nativeEvent.selectedSegmentIndex);
            }}
          />
          {selectedIndex === 0 ? (
            <View>
              <XOverCarousel route={route} memberOnly={true} source={"Home"} navigation={navigation} changeProgressValue={changeProgressValue} changeProject={changeProject} progressValue={progressValue}/>
              <Image style={{width: "auto", height: 40, marginBottom: 20}} source={require('./../assets/X-Over-Drawer.png')} />
              <XOverHeader text={"Updates: "} />
              <View style={{height: "auto"}}>
                <FlatList
                  data={currProject !== undefined ? currProject.updates : []}
                  renderItem={({item, index}) => (
                  <View key={index + item.text + item.link.text} style={{flex: 1, flexDirection: "row", height: 80, marginTop: 20}}>
                    <Image key={item.name + " profile" + index} style={{flex: 1, height: 80, width: 80}} source={currProject.members.find((m) => m.name === item.name).image} />
                    <ImageBackground key={item.text + " bubble" + index} style={[styles.bubble, {flex: 4 }]} source={require("./../assets/X-Over-Bubble.png")}>
                      <Text style={{position: "absolute", fontFamily: "Kanit_400Regular", textAlign: "right", right: 20, top: 5}}>{item.time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</Text>
                      <Text style={{marginLeft: 40, marginTop: 5, fontFamily: "Kanit_400Regular", fontSize: 18, lineHeight: 24}}>{item.name}</Text>
                      <Text numberOfLines={1} style={{marginLeft: 40, fontFamily: "Kanit_400Regular"}}>{item.text}</Text>
                      <Text onPress={() => {navigation.jumpTo('Projects', {project: currProject, source: "Home", openFile: item.link.filename, user: route.params.user})}} style={{marginLeft: 40, fontFamily: "Kanit_400Regular", textDecorationLine: 'underline', fontWeight: 'bold'}}>{item.link.text}</Text>
                    </ImageBackground>
                  </View>
                  )}
                  keyExtractor={(item) => {progressValue + item.text + item.link.text}}
                />
              </View>
            </View>
          ) : (
            <View style={{marginTop: "25%"}}>
              <Text style={{fontFamily: "Kanit_400Regular", fontSize: 24, textAlign: "center"}}>You don't have any pinned projects.</Text>
            </View>
          )}
        </View>
    </ImageBackground>
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