import { Pressable, StyleSheet, Text, View, Image, ScrollView, Modal, ImageBackground, Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Kanit_700Bold, Kanit_400Regular } from '@expo-google-fonts/kanit';
import { CommonActions } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import DropDownPicker from 'react-native-dropdown-picker';
import XOverHeader from '../components/XOverHeader';
import XOverButton from '../components/XOverButton';
import PROJ_DATA from './../assets/mock_data';
import XOverCarousel from '../components/XOverCarousel';
import XOverSearch from '../components/XOverSearch';
import XOverTheme from '../assets/XOverTheme';
import XOverProfileChip from '../components/XOverProfileChip';
import XOverProjectList from '../components/XOverProjectList';
import XOverCreate from '../components/XOverCreate';

const DROPDOWN_ITEMS = [{label: "All", value: "All"}, {label: 'Notes', value: 'Notes'}, {label: 'Reports', value: 'Reports'}, {label: 'Images', value: 'Images'}, {label: 'Videos', value: 'Videos'}]

export default function Projects({navigation, route}) {
  const [currProject, changeProject] = useState(PROJ_DATA[0]);
  const [progressValue, changeProgressValue] = useState(0);
  const [selectedIndex, changeIndex] = useState(0)

  const [searchClicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const [modalSearchClicked, setModalClicked] = useState(false);
  const [modalSearchPhrase, setModalSearchPhrase] = useState(route?.params?.openFile ? route?.params?.openFile : "");
  const [showProjectList, setShowProjectList] = useState(false);

  const [isModalOpen, setModal] = useState(route?.params?.openFile ? true : false);
  const [selectVal, setSelectVal] = useState("All");
  const [isSelectOpen, setSelectOpen] = useState(false);

  const [addFileModalOpen, setAddFileModal] = useState(false);

  const [createModalOpen, setCreateModal] = useState(false);

  useEffect(() => {
    setModal(route?.params?.openFile ? true : false);
    setModalSearchPhrase(route?.params?.openFile ? route?.params?.openFile : "");
  }, [route])

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      navigation.dispatch(CommonActions.setParams({project: null, user: route.params.user}));
    });
    return unsubscribe;
    }, [navigation]);

    let [fontsLoaded] = useFonts({
      Kanit_700Bold, Kanit_400Regular
    });
  
    if (!fontsLoaded) {
      return null;
    }

  const getTags = () => {
    let union = []
    PROJ_DATA.forEach((project) => {
      project.tags.forEach((tag) => {
        if (!union.includes(tag)) {
          union.push(tag);
        }
      })
    })
    return union.sort();
  };

  const completeSearchFn = (phrase) => {
    setSearchPhrase(phrase);
    setShowProjectList(true);
  }

  const getRelevantProjects = () => {
    return PROJ_DATA.filter((project) => project.name.toLowerCase().includes(searchPhrase.toLowerCase()) || project.tags.filter((tag) => tag.toLowerCase().includes(searchPhrase.toLowerCase())).length > 0);
  }

  return route?.params?.project ? (
    // Page for Single Project
    <View style={{flex: 1, marginTop: 20, marginHorizontal: 10, padding: 20 }}>
      <XOverButton icon={(<FontAwesome name="arrow-left" style={{fontSize: 32 }} />)} pressFunc={() => {navigation.dispatch(CommonActions.setParams({ project: null, openFile: null, user: route.params.user })); route?.params?.source === "Projects" ? navigation.navigate("Projects") : navigation.dispatch(CommonActions.goBack())}} />
      <Modal
      animationType='fade'
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => {
        setModal(!isModalOpen);
      }}
      >
        {/* Project Resource Modal Window */}
        <View style={{flex: 1, width: "100%", height: "100%", padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: XOverTheme.bg_blue + "d0"}}>
          <View style={{ backgroundColor: "white", borderRadius: 25, padding: 10, alignItems: "flex-start"}}>
            {/* Add File Modal */}
            <Modal
            animationType='fade'
            transparent={true}
            visible={addFileModalOpen}
            onRequestClose={() => {
              setAddFileModal(!addFileModalOpen);
            }}
            >
              <View style={{flex: 1, width: "100%", height: "100%", padding: 10, alignItems: "center", justifyContent: "center", backgroundColor: XOverTheme.bg_blue + "d0"}}>
                <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-between", backgroundColor: "white", width: "80%", height: "40%", marginVertical: "30%", borderRadius: 25, padding: 20}}>
                  <XOverButton icon={(<FontAwesome name="arrow-left" style={{fontSize: 32 }} />)} pressFunc={() => {setAddFileModal(false)}} />
                  <XOverHeader text={"Add A File"} />
                  <TextInput placeholderTextColor={"white"} style={styles.input} placeholder='Resource Name' />
                  <TextInput placeholderTextColor={"white"} style={styles.input} placeholder='Link to Resource' />
                  <View style={{paddingLeft: 10}}>
                    <Text style={{fontFamily: "Kanit_400Regular"}}>Select Tag</Text>
                    <DropDownPicker 
                      containerStyle={{width: "100%", marginBottom: 10}}
                      labelStyle={{fontFamily: "Kanit_400Regular"}}
                      open={isSelectOpen} 
                      setOpen={setSelectOpen} 
                      items={DROPDOWN_ITEMS} 
                      setValue={setSelectVal}
                      value={selectVal}
                    />
                  </View>
                  <XOverButton containerStyles={{marginLeft: "60%"}} text={"Upload"} pressFunc={() => {setAddFileModal(!addFileModalOpen)}} />
                </View>
              </View>
            </Modal>
            <XOverButton icon={(<FontAwesome name="arrow-left" style={{fontSize: 32 }} />)} pressFunc={() => {setModal(false); setModalClicked(false); setModalSearchPhrase(""); setSelectVal("All")}} />
            <XOverHeader containerStyles={{marginTop: 20}} text={"Project Resources"} />
            <XOverSearch clicked={modalSearchClicked} searchPhrase={modalSearchPhrase} setClicked={setModalClicked} setSearchPhrase={setModalSearchPhrase} />
            <View style={{display: "flex", flexDirection: "row", width: "90%", marginHorizontal: "5%", marginBottom: 10}}>
              <DropDownPicker 
                containerStyle={{width: "50%", marginHorizontal: "5%", marginBottom: 10}}
                labelStyle={{fontFamily: "Kanit_400Regular"}}
                open={isSelectOpen} 
                setOpen={setSelectOpen} 
                items={DROPDOWN_ITEMS} 
                setValue={setSelectVal}
                value={selectVal}
              />
              <XOverButton containerStyles={{width: "auto"}} text={"+ Add"} pressFunc={() => {setAddFileModal(!addFileModalOpen)}} />
            </View>
            <FlatList 
            data={route.params.project.resources}
            ListHeaderComponent={(<View style={{ width: "100%", flexDirection: "row", paddingHorizontal: 10}}>
            <Text style={{fontFamily: "Kanit_400Regular", width: "30%"}}>File Name</Text>
            <Text style={{fontFamily: "Kanit_400Regular", width: "30%"}}>Last Modified</Text>
        </View>)}
            contentContainerStyle={{flexDirection: "column", alignItems: "flex-start", flex: 3}} 
            renderItem={({item, index}) => item.filename.toLowerCase().includes(modalSearchPhrase.toLowerCase()) && (selectVal === "All" || item.category === selectVal) ? (
              <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#C0C0C0", width: "90%", marginHorizontal: "2%", maxHeight: 80, marginTop: 20, borderRadius: 25, padding: 10}}>
                <Text style={{fontFamily: "Kanit_400Regular", width: "30%"}}>{item.filename}</Text>
                <Text style={{fontFamily: "Kanit_400Regular", width: "30%"}}>{`${item.lastMod.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} ${item.lastMod.toLocaleDateString()} (${item.author})`}</Text>
                <XOverButton containerStyles={{width: "25%"}} text={"View"} pressFunc={async () => {await Linking.openURL(item.uri)}} />
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
                  justifyContent: 'flex-start',
                  alignItems: "flex-start",
                  height: 150,
                  width: 100
              }}
          >
              <Text numberOfLines={1} style={[styles.header, {flex: 1, height: 30, width: "100%", paddingHorizontal: 5, fontSize: 14, position: "absolute", zIndex: 1, backgroundColor: XOverTheme.base_yellow, borderColor: "black", borderTopWidth: 3, borderRightWidth: 3, borderLeftWidth: 3}]}>{route.params.project.name}</Text>
              <Image style={{flex: 1, height: "100%", width: "100%", borderWidth: 3, borderColor: "black"}} source={typeof(route.params.project.thumb) === "number" ? route.params.project.thumb : {uri: route.params.project.thumb}} />
          </View>
          <View style={{flex: 2, marginLeft: 20}}>
            <XOverHeader wide={true} text={route.params.project.name} />
            <Text numberOfLines={1} style={{fontSize: 14, fontFamily: "Kanit_400Regular", textAlign: "center", width: "100%"}}>{route.params.project.tags.toString().replace(',', ', ')}</Text>
          </View>
        </View>
        <Image style={{width: "auto", height: 30}} source={require('./../assets/X-Over-Drawer.png')} />
        <ScrollView style={{flex: 4, height: "100%"}}>
          <View style={styles.projElem}>
            <XOverHeader textStyles={styles.subheaders} wide={false} text={"Team"} />
            <FlatList
              contentContainerStyle={{height: 80, alignItems: "center", alignSelf: "center", justifyContent: "center", marginTop: 10}}
              horizontal={true}
              pagingEnabled={true}
              data={route.params.project.members} 
              renderItem={({item, index}) => (
                <XOverProfileChip containerStyles={{marginHorizontal: 0}} person={item} key={item.name + index} />
              )}
            />
          </View>
          <View style={styles.projElem}>
            <XOverHeader textStyles={styles.subheaders} wide={false} text={"Description"} />
            <Text style={styles.bodyText}>{route.params.project.description}</Text>
          </View>
          {route.params.project.members.find((m) => m.email === route.params.user.email) ? (<View style={styles.projElem}>
            <XOverHeader textStyles={styles.subheaders} wide={false} text={"Recent Updates"} />
            <View key={route.params.project.updates[0].text + route.params.project.updates[0].link.text} style={{flex: 1, flexDirection: "row", height: "auto", marginTop: 20}}>
              <Image key={route.params.project.updates[0].name + " profile"} style={{flex: 1, height: "80%", width: "auto", resizeMode: "contain"}} source={require("./../assets/default_profile.png")} />
              <ImageBackground key={route.params.project.updates[0].text + " bubble"} style={[styles.bubble, {flex: 4}]} source={require("./../assets/X-Over-Bubble.png")}>
                <Text style={{position: "absolute", color: "white", fontFamily: "Kanit_400Regular", textAlign: "right", right: 20, top: 0}}>{route.params.project.updates[0].time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</Text>
                <Text style={{marginLeft: 40, marginTop: 5, color: "white", fontFamily: "Kanit_400Regular", fontSize: 18}}>{route.params.project.updates[0].name}</Text>
                <Text numberOfLines={1} style={{marginLeft: 40, color: "white", paddingLeft: 20, fontFamily: "Kanit_400Regular", width: "80%"}}>{route.params.project.updates[0].text}</Text>
                <Text onPress={() => {navigation.jumpTo('Projects', {project: route.params.project, user: route.params.user, source: "Projects", openFile: route.params.project.updates[0].link.filename})}} style={{marginLeft: 40, color: "white", paddingLeft: 20, fontFamily: "Kanit_400Regular", textDecorationLine: 'underline', fontWeight: 'bold'}}>{route.params.project.updates[0].link.text}</Text>
              </ImageBackground>
            </View>
          </View>) : (
            route.params.project.isPublic && <XOverButton containerStyles={{alignSelf: "center", marginTop: 20}} buttonStyles={{alignSelf: "center"}} pressFunc={() => {
              PROJ_DATA[PROJ_DATA.indexOf(route.params.project)].members.push({name: "(You)", pronouns: "they/them", role: "Team Member", email: route.params.user.email, image: require("./../assets/default_profile.png")});
              navigation.jumpTo("Projects", {project: route.params.project, source: route.params.source, user: route.params.user})
            }} text={'Join X-Over'} />
          )}
          {route.params.project.members.find((m) => m.email === route.params.user.email) && <View styles={[styles.projElem, {alignItems: "center", justifyContent: "center"}]}>
            <XOverButton containerStyles={{alignSelf: "center", marginTop: 20}} buttonStyles={{alignSelf: "center"}} text={"View Project Resources"} pressFunc={() => {setModal(true)}} />
          </View>}
        </ScrollView>
      </View>
    </View>
  ) : (
    // List of available Projects
    <ImageBackground imageStyle={{opacity: .1}} style={{height: "100%"}} source={require('./../assets/comic_dots.jpg')} >
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
            <ScrollView contentContainerStyle={{flex: 1 }}>
              <XOverSearch setShowProjectList={setShowProjectList} clicked={searchClicked} setClicked={setClicked} searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
              {searchClicked ? (
                <ScrollView style={{flex: 3}}>
                  {/* Search autocomplete */}
                  <View>
                    {!showProjectList ? (
                      <View>
                        <FlatList
                          data={getRelevantProjects()}
                          renderItem={({item, index}) => (
                            <Pressable onPress={() => {completeSearchFn(item.name)}} style={styles.searchResultContainer}>
                              <Text style={styles.searchResult}>{item.name}</Text>
                            </Pressable>
                          )}
                          keyExtractor={(item) => {item.name + item.thumb}}
                        />
                        <FlatList
                          data={getTags()}
                          renderItem={({item, index}) => item.toLowerCase().includes(searchPhrase.toLowerCase()) ? (
                            <Pressable onPress={() => {completeSearchFn(item)}} style={styles.searchResultContainer}>
                                <Text style={styles.searchResult}>{item}</Text>
                            </Pressable>
                          ) : (<></>)}
                          keyExtractor={(item) => {item}}
                        />
                      </View>
                    ) : (
                      <View style={{flex: 1, alignItems: "center", justifyContent: "center", width: "90%", marginHorizontal: "5%"}}>
                        <XOverProjectList user={route.params.user} navigation={navigation} projectList={getRelevantProjects()} />
                      </View>
                    )}
                  </View>
                </ScrollView> 
              ) : (
              <View style={{flex: 3, alignItems: "center" }}>
                <Modal
                animationType='fade'
                transparent={true}
                visible={createModalOpen}
                onRequestClose={() => {
                  setCreateModal(!createModalOpen);
                }}
                >
                  <XOverCreate setCreateModal={setCreateModal} navigation={navigation} route={route} />
                </Modal>
                <XOverHeader wide={false} text={"For You"} />
                <XOverCarousel source={"Projects"} navigation={navigation} changeProgressValue={changeProgressValue} changeProject={changeProject} progressValue={progressValue} />
                <XOverButton containerStyles={{alignSelf: "center", position: "absolute", bottom: 20}} pressFunc={() => {setCreateModal(true)}} text={"Create Your X-Over"} buttonStyles={{width: "auto"}} />
              </View>
              )}
            </ScrollView>
          ) : (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", width: "80%"}}>
              <XOverProjectList user={route.params.user} navigation={navigation} projectList={PROJ_DATA.filter((proj) => proj.members.find((m) => m.email === route.params.user.email))} />
            </View>
          )}
      </View>
    </ImageBackground>
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
  input: {
    fontFamily: "Kanit_400Regular",
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: "white",
    padding: 10,
    flexDirection: "row",
    backgroundColor: XOverTheme.bg_blue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  searchResult: {
    fontFamily: "Kanit_400Regular",
    fontSize: 18
  },
  searchResultContainer: {
    width: "90%",
    marginHorizontal: "5%",
    borderTopWidth: 1,
    borderColor: "black",
    height: "auto",
    paddingVertical: 10,
    backgroundColor: "white"
  }
})