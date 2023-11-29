import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { Kanit_700Bold, Kanit_400Regular } from '@expo-google-fonts/kanit';
import { CommonActions } from '@react-navigation/native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import XOverHeader from '../components/XOverHeader';
import XOverButton from '../components/XOverButton';
import PROJ_DATA from './../assets/mock_data';
import XOverCarousel from '../components/XOverCarousel';
import XOverSearch from '../components/XOverSearch';
import XOverTheme from '../assets/XOverTheme';
import { FlatList } from 'react-native-gesture-handler';
import XOverProfileChip from '../components/XOverProfileChip';

export default function Projects({navigation, route}) {

  const [currProject, changeProject] = useState(PROJ_DATA[0]);
  const [progressValue, changeProgressValue] = useState(0);
  const [selectedIndex, changeIndex] = useState(0)

  const [searchClicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      navigation.dispatch(CommonActions.setParams({project: null}));
    });
    return unsubscribe;
    }, [navigation]);

    let [fontsLoaded] = useFonts({
      Kanit_700Bold, Kanit_400Regular
    });
  
    if (!fontsLoaded) {
      return null;
    }

  return route?.params?.project ? (
    // Page for Single Project
    <View style={{flex: 1, marginTop: 20, marginHorizontal: 10, padding: 20 }}>
      <XOverButton text={"Back"} pressFunc={() => {navigation.dispatch(CommonActions.setParams({ project: null })); route?.params?.source === "Projects" ? navigation.navigate("Projects") : navigation.dispatch(CommonActions.goBack())}} />
      <View style={{flex: 1, marginTop: 20}}>
        <View style={{height: 150, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
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
        <Image style={{width: "auto", height: 40}} source={require('./../assets/X-Over-Drawer.png')} />
        <ScrollView style={{flex: 4, marginTop: 10, height: "100%"}}>
          <View style={styles.projElem}>
            <XOverHeader textStyles={styles.subheaders} wide={false} text={"Team"} />
            <FlatList
              contentContainerStyle={{height: 80, width: "100%", flex: 1, alignItems: "center", alignSelf: "center", marginTop: 10}}
              horizontal={true}
              data={route.params.project.members} 
              renderItem={({item, index}) => (
                <XOverProfileChip person={item} key={item.name + index} />
              )}
            />
          </View>
          <View style={styles.projElem}>
            <XOverHeader textStyles={styles.subheaders} wide={false} text={"Description"} />
            <Text style={styles.bodyText}>{route.params.project.description}</Text>
          </View>
          <View style={styles.projElem}>
            <XOverHeader textStyles={styles.subheaders} wide={false} text={"Recent Updates"} />
            <Text style={styles.bodyText}>{route.params.project.description}</Text>
          </View>
          <View styles={[styles.projElem, {alignItems: "center", justifyContent: "center"}]}>
            <XOverButton containerStyles={{alignSelf: "center", marginTop: 20}} buttonStyles={{alignSelf: "center"}} text={"View Project Resources"} pressFunc={() => {console.log("view resources")}} />
          </View>
        </ScrollView>
      </View>
    </View>
  ) : (
    // List of available Projects
    <View style={{ padding: 20,  flex: 1, alignItems: "center", justifyContent: "center"}}>
      <SegmentedControl
          style={{marginTop: 40, width: "80%", marginLeft: "10%", marginRight: "10%"}}
          values={['All', 'My Projects']}
          selectedIndex={selectedIndex}
          backgroundColor={XOverTheme.bg_blue}
          tintColor={XOverTheme.base_orange}
          fontStyle={{fontFamily: "Kanit_400Regular"}}
          onChange={(event) => {
            changeIndex(event.nativeEvent.selectedSegmentIndex);
          }}
        />
        {selectedIndex === 0 ? (
          <ScrollView contentContainerStyle={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <XOverSearch clicked={searchClicked} setClicked={setClicked} searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
            <View style={{flex: 3}}>
              <XOverHeader wide={true} text={"For You"} />
              <XOverCarousel source={"Projects"} navigation={navigation} changeProgressValue={changeProgressValue} changeProject={changeProject} progressValue={progressValue} />
            </View>
            <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
              <XOverButton pressFunc={() => {console.log("Create X-Over")}} text={"Create Your X-Over"} buttonStyles={{width: "auto"}} />
            </View>
          </ScrollView>
        ) : (
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Project List</Text>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Kanit_700Bold",
    fontSize: 24
  },
  subheaders: {
    fontSize: 20
  },
  bodyText: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16
  },
  projElem: {flex: 1, marginTop: 20}
})