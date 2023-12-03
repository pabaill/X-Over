import Carousel from 'react-native-reanimated-carousel';
import { useState } from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import PROJ_DATA from './../assets/mock_data';
import XOverTheme from '../assets/XOverTheme';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Kanit_700Bold } from '@expo-google-fonts/kanit';

export default function XOverCarousel({navigation, route, changeProgressValue, changeProject, progressValue, source, memberOnly}) {

    const width = Dimensions.get('window').width;

    const data = PROJ_DATA.filter((p) => !memberOnly || p.members.find((m) => m.email === route.params.user.email))

    let [fontsLoaded] = useFonts({
        Kanit_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{height: "auto", width: "100%"}}>
        <Carousel
                width={width - 40}
                height={width / 2}
                autoPlay={false}
                mode='parallax'
                defaultIndex={progressValue}
                modeConfig={{
                  parallaxScrollingScale: 0.9,
                  parallaxScrollingOffset: 200,
                }}
                data={data}
                onSnapToItem={(index) => {changeProject(data[index]); changeProgressValue(index)}}
                renderItem={({ index }) => (
                  <View style={{flex: 1}}>
                    <Pressable 
                      style={({pressed}) => [{flex: 10, marginHorizontal: "30%", width: "40%", backgroundColor: pressed ? XOverTheme.base_orange : "transparent"}]}
                      onPress={() => navigation.jumpTo('Projects', {project: data[index], source: source})}
                      key={data[index].name + index}
                      >
                      <Text numberOfLines={1} style={[styles.header, {flex: 1, height: 30, width: "100%", paddingHorizontal: 5, fontSize: 14, position: "absolute", zIndex: 1, backgroundColor: XOverTheme.base_yellow, borderColor: "black", borderTopWidth: 3, borderRightWidth: 3, borderLeftWidth: 3, borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingVertical: 5}]}>{data[index].name}</Text>
                      <Image style={{flex: 1, height: "100%", width: "auto", borderWidth: 3, borderColor: "black", borderRadius: 10}} source={typeof(data[index].thumb) === "number" ? data[index].thumb : {uri: data[index].thumb}} />
                    </Pressable>
                  </View>
                )}
            />
          <View>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 20}}> 
              {data.map((val, index) => {
                return (index === progressValue) ? (<View key={index} style={[styles.pagination, {backgroundColor: XOverTheme.base_orange}]}></View>) : (<View key={index} style={[styles.pagination, {backgroundColor: "transparent"}]}></View>)
              })}
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontFamily: "Kanit_700Bold", 
        fontSize: 30
      },
      pagination: {
        width: 15,
        height: 15,
        borderRadius: 15,
        borderColor: XOverTheme.bg_blue,
        borderWidth: 1
      }
})