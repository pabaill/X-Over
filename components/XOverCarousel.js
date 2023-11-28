import Carousel from 'react-native-reanimated-carousel';
import { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import PROJ_DATA from './../assets/mock_data';
import XOverTheme from '../assets/XOverTheme';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Kanit_700Bold } from '@expo-google-fonts/kanit';

export default function XOverCarousel({navigation, changeProgressValue, changeProject, progressValue, source}) {

    const width = Dimensions.get('window').width;

    const [selectedIndex, changeIndex] = useState(0);

    let [fontsLoaded] = useFonts({
        Kanit_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
        <Carousel
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
                    style={({pressed}) => [{flex: 1, marginHorizontal: "25%", width: "50%", backgroundColor: pressed ? XOverTheme.base_orange : "transparent"}]}
                    onPress={() => navigation.jumpTo('Projects', {project: PROJ_DATA[index], source: source})}
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
            />
        <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 20}}>
              {PROJ_DATA.map((val, index) => {
                return (index === progressValue) ? (<View key={index} style={[styles.pagination, {backgroundColor: XOverTheme.base_orange}]}></View>) : (<View key={index} style={[styles.pagination, {backgroundColor: "transparent"}]}></View>)
              })}
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
        width: 10,
        height: 10,
        borderRadius: 10,
        borderColor: XOverTheme.bg_blue,
        borderWidth: 1
      }
})