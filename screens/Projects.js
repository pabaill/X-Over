import { Pressable, StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Kanit_700Bold } from '@expo-google-fonts/kanit';
import { CommonActions } from '@react-navigation/native';
import XOverHeader from '../components/XOverHeader';
import XOverButton from '../components/XOverButton';
import PROJ_DATA from './../assets/mock_data';

export default function Projects({navigation, route}) {

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
    <View style={{flex: 1, marginTop: 40, marginLeft: 20 }}>
      <XOverButton text={"Back"} pressFunc={() => {navigation.dispatch(CommonActions.setParams({ project: null })); navigation.dispatch(CommonActions.goBack())}} />
      <View style={{marginTop: 40}}>
        <XOverHeader text={route.params.project.name} />
      </View>
    </View>
  ) : (
    // List of available Projects
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 50 }}>
      <FlatList
        data={PROJ_DATA}
        renderItem={({item, index}) => (
          <View
          style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: "center"
          }}
      >
          <Text style={[styles.header, {textAlign: "center"}]}>
              {item.name}
          </Text>
      </View>
        )}
        keyExtractor={(item) => {item.name}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Kanit_700Bold",
    fontSize: 24
  }
})