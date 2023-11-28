import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { Kanit_700Bold } from '@expo-google-fonts/kanit';
import { CommonActions } from '@react-navigation/native';
import XOverHeader from '../components/XOverHeader';
import XOverButton from '../components/XOverButton';
import PROJ_DATA from './../assets/mock_data';
import XOverCarousel from '../components/XOverCarousel';
import XOverSearch from '../components/XOverSearch';

export default function Projects({navigation, route}) {

  const [currProject, changeProject] = useState(PROJ_DATA[0])
  const [progressValue, changeProgressValue] = useState(0)

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      navigation.dispatch(CommonActions.setParams({project: null}));
    });
    return unsubscribe;
    }, [navigation]);

    let [fontsLoaded] = useFonts({
      Kanit_700Bold
    });
  
    if (!fontsLoaded) {
      return null;
    }

  return route?.params?.project ? (
    // Page for Single Project
    <View style={{flex: 1, marginTop: 20, marginHorizontal: 10, padding: 20 }}>
      <XOverButton text={"Back"} pressFunc={() => {navigation.dispatch(CommonActions.setParams({ project: null })); navigation.dispatch(CommonActions.goBack())}} />
      <View style={{flex: 1, marginTop: 20}}>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <View
              style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: "center",
                  height: 150,
                  width: 100
              }}
          >
              <Text style={[styles.header, {textAlign: "center"}]}>
                  {route.params.project.name}
              </Text>
          </View>
          <View style={{flex: 2, marginLeft: 20}}>
            <XOverHeader wide={true} text={route.params.project.name} />
          </View>
        </View>
      <Image style={{width: "auto", height: 40, marginTop: 20}} source={require('./../assets/X-Over-Drawer.png')} />
      <View style={{flex: 3}}>
        <Text>Placeholder Placeholder Placeholder</Text>
      </View>
      </View>
    </View>
  ) : (
    // List of available Projects
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 50 }}>
      <XOverSearch />
      <View style={{flex: 1}}>
        <XOverCarousel navigation={navigation} changeProgressValue={changeProgressValue} changeProject={changeProject} progressValue={progressValue} />
      </View>
      <View style={{flex: 4}}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Kanit_700Bold",
    fontSize: 24
  }
})