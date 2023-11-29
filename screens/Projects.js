import { Pressable, StyleSheet, Text, View, Image, ScrollView, Modal, ImageBackground } from 'react-native';
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

  const [modalSearchClicked, setModalClicked] = useState(false);
  const [modalSearchPhrase, setModalSearchPhrase] = useState("");

  const [isModalOpen, setModal] = useState(false);

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
      <Modal
      animationType='fade'
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => {
        setModal(!isModalOpen);
      }}
      >
        <View style={{flex: 1, width: "100%", height: "100%", padding: 10, alignItems: "center", justifyContent: "center", backgroundColor: XOverTheme.bg_blue + "d0"}}>
          <View style={{ backgroundColor: "white", borderRadius: 25, padding: 20, alignItems: "flex-start"}}>
            <XOverButton text={"Back"} pressFunc={() => {setModal(false)}} />
            <XOverHeader containerStyles={{marginTop: 20}} text={"Project Resources"} />
            <XOverSearch clicked={modalSearchClicked} searchPhrase={modalSearchPhrase} setClicked={setModalClicked} setSearchPhrase={setModalSearchPhrase} />
            <View style={{flex: 1, width: "100%", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between"}}>
                <Text style={{width: "50%"}}>File Name</Text>
                <Text style={{width: "50%"}}>Last Modified</Text>
            </View>
            <FlatList 
            data={route.params.project.resources}
            contentContainerStyle={{flexDirection: "column", alignItems: "flex-start", flex: 1}} 
            renderItem={({item, index}) => item.filename.toLowerCase().includes(modalSearchPhrase.toLowerCase()) ? (
              <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#C0C0C0", width: "90%", maxHeight: 80, marginTop: 20, borderRadius: 25, padding: 10}}>
                <Text style={{width: "30%"}}>{item.filename}</Text>
                <Text style={{width: "30%"}}>{`${item.lastMod.toLocaleTimeString()} ${item.lastMod.toLocaleDateString()} (${item.author})`}</Text>
                <XOverButton containerStyles={{width: "25%"}} text={"View"} pressFunc={() => {console.log("pressed!")}} />
              </View>
            ) : (<></>)}
            />
          </View>
        </View>
      </Modal>
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
              {/* <Text style={[styles.header, {textAlign: "center"}]}>
                  {route.params.project.name}
              </Text> */}
              <Image style={{flex: 1, height: "100%", width: "100%", borderWidth: 3, borderColor: "black"}} source={route.params.project.thumb} />
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
            <View key={route.params.project.updates[0].text + route.params.project.updates[0].link} style={{flex: 1, flexDirection: "row", height: "auto", marginTop: 20}}>
              <Image key={route.params.project.updates[0].name + " profile"} style={{flex: 1, height: "90%", width: "auto"}} source={require("./../assets/default_profile.png")} />
              <ImageBackground key={route.params.project.updates[0].text + " bubble"} style={[styles.bubble, {flex: 4}]} source={require("./../assets/X-Over-Bubble.png")}>
                <Text style={{position: "absolute", color: "white", fontFamily: "Kanit_400Regular", textAlign: "right", right: 20, top: 0}}>{route.params.project.updates[0].time.toLocaleTimeString('en-US')}</Text>
                <Text style={{marginLeft: 40, marginTop: 5, color: "white", fontFamily: "Kanit_400Regular", fontSize: 18}}>{route.params.project.updates[0].name}</Text>
                <Text numberOfLines={1} style={{marginLeft: 40, color: "white", paddingLeft: 20, fontFamily: "Kanit_400Regular", width: "80%"}}>{route.params.project.updates[0].text}</Text>
                <Text style={{marginLeft: 40, color: "white", paddingLeft: 20, fontFamily: "Kanit_400Regular"}}>{route.params.project.updates[0].link}</Text>
              </ImageBackground>
            </View>
          </View>
          <View styles={[styles.projElem, {alignItems: "center", justifyContent: "center"}]}>
            <XOverButton containerStyles={{alignSelf: "center", marginTop: 20}} buttonStyles={{alignSelf: "center"}} text={"View Project Resources"} pressFunc={() => {setModal(true)}} />
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
  projElem: {flex: 1, marginTop: 20},
  bubble: {width: "auto", height: "auto", minHeight: 80},
})