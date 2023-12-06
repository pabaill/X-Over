import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Modal } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useEffect, useState } from 'react';
import XOverTheme from '../assets/XOverTheme';
import XOverFriend from '../components/XOverFriend';
import XOverSearch from '../components/XOverSearch';
import XOverFriendsInfo from '../assets/XOverFriendsInfo';
import XOverButton from '../components/XOverButton';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import PROJ_DATA from './../assets/mock_data';

export default function Friends({navigation}) {
  const [selectedIndex, changeIndex] = useState(0);
  
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  const [friendToShow, setFriendToShow] = useState(null);
  // const getRelevantProjects = () => {
  //   return PROJ_DATA.filter((project) => project.name.toLowerCase().includes(searchPhrase.toLowerCase()) || project.tags.filter((tag) => tag.toLowerCase().includes(searchPhrase.toLowerCase())).length > 0);
  // }
  // const completeSearchFn = (phrase) => {
  //   setSearchPhrase(phrase);
  //   setShowProjectList(true);
  // }

  const getMembers = () => {
    let union = []
    PROJ_DATA.forEach((project) => {
      project.members.forEach((m) => {
        if (!union.find((x) => x.email === m.email)) {
          m.role = [m.role.toString()];
          m.project = [project.name];
          union.push(m);
        } else {
          union[union.findIndex((x) => x.email === m.email )].role.push(m.role.toString());
          union[union.findIndex((x) => x.email === m.email )].project.push(project.name);
        }
      })
    })
    return union.sort((a, b) => a.name - b.name);
  };
  
  
  return (
    <ImageBackground imageStyle={{opacity: .1}} style={{height: "100%"}} source={require('./../assets/comic_dots.jpg')} >
    <Modal 
        animationType='fade'
        transparent={true}
        visible={friendToShow?.name !== undefined}
        onRequestClose={() => {
          setFriendToShow(null);
        }}
        >
          <View style={{flex: 1, width: "100%", height: "100%", padding: 10, alignItems: "center", justifyContent: "center", backgroundColor: XOverTheme.bg_blue + "d0"}}>
            <ScrollView contentContainerStyle={{alignItems: "flex-start", justifyContent: "flex-start", height: "100%"}} style={{ flex: 1, backgroundColor: "white", width: "90%", marginVertical: "50%", borderRadius: 25, padding: 20}}>
              <XOverButton containerStyles={{marginTop: 20}} icon={(<FontAwesome name="arrow-left" style={{fontSize: 32 }} />)} pressFunc={() => {setFriendToShow(null)}} />
                <View style={{width: "100%", height: 80, flexDirection: "row", alignItems: "center", marginTop: 20}}>
                  <Image style={{height: 80, width: 80}} source={friendToShow?.image} />
                  <View style={{marginLeft: 20}}>
                    <Text style={{fontFamily: "Kanit_400Regular", fontSize: 24 }}>{friendToShow?.name}</Text>
                    <Text numberOfLines={2} style={{fontFamily: "Kanit_400Regular", fontSize: 18, width: "100%" }}>{friendToShow?.role} from {friendToShow?.project}</Text>
                  </View>
                </View>
              <Text style={{fontFamily: "Kanit_400Regular", fontSize: 18, alignSelf: "center", marginTop: "15%"}} >Contact me at my email if you'd like to collaborate: {friendToShow?.email}</Text>
            </ScrollView>
          </View>
        </Modal>
    <View style={{ flex: 1, padding: 20}}>
      <SegmentedControl
            style={{marginTop: 40, width: "80%", marginLeft: "10%", marginRight: "10%"}}
            values={['Friends', 'Suggestions']}
            selectedIndex={selectedIndex}
            backgroundColor={XOverTheme.bg_blue}
            tintColor={'white'}
            activeFontStyle={{color: XOverTheme.bg_blue}}
            onChange={(event) => {
              changeIndex(event.nativeEvent.selectedSegmentIndex);
            }}
          />
      <XOverSearch searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
      {selectedIndex === 0 ? (
      <ScrollView style={{padding: 10}}>
        <FlatList
          data={getMembers()}
          renderItem={({item, index}) => item.name.toLowerCase().includes(searchPhrase.toLowerCase()) ? (
            <XOverFriend friend={item} setFriendToShow={setFriendToShow} />
          ) : (<></>)}
          />
        {/* <XOverFriend image={XOverFriendsInfo.person9.image} name={XOverFriendsInfo.person9.name} title={XOverFriendsInfo.person9.title} />
        <XOverFriend image={XOverFriendsInfo.person10.image} name={XOverFriendsInfo.person10.name} title={XOverFriendsInfo.person10.title} />
        <XOverFriend image={XOverFriendsInfo.person11.image} name={XOverFriendsInfo.person11.name} title={XOverFriendsInfo.person11.title} />
        <XOverFriend image={XOverFriendsInfo.person12.image} name={XOverFriendsInfo.person12.name} title={XOverFriendsInfo.person12.title} />
        <XOverFriend image={XOverFriendsInfo.person13.image} name={XOverFriendsInfo.person13.name} title={XOverFriendsInfo.person13.title} />
        <XOverFriend image={XOverFriendsInfo.person14.image} name={XOverFriendsInfo.person14.name} title={XOverFriendsInfo.person14.title} />
        <XOverFriend image={XOverFriendsInfo.person15.image} name={XOverFriendsInfo.person15.name} title={XOverFriendsInfo.person15.title} />
        <XOverFriend image={XOverFriendsInfo.person16.image} name={XOverFriendsInfo.person16.name} title={XOverFriendsInfo.person16.title} /> */}
      </ScrollView>
      ) : (
        <ScrollView style={{padding: 10}}>
          <FlatList
            data={getMembers()}
            renderItem={({item, index}) => item.name.toLowerCase().includes(searchPhrase.toLowerCase()) ? (
              <XOverFriend friend={item} setFriendToShow={setFriendToShow} />
            ) : (<></>)}
          />
      </ScrollView>
      )}
    </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    marginVertical: 10,
    borderRadius: 20,
    padding: 10
  },
  text: {
    fontFamily: "Kanit_400Regular"
  },
  proj_name: {
      fontSize: 18,
      width: "80%"
  },
  description: {
      fontSize: 12,
      width: "60%"
  },
  profile: {
      height: 20, 
      width: 20, 
      marginHorizontal: 5,
      bottom: 0,
      right: 0
  },
  shadow: {backgroundColor: "black", width: "auto", alignSelf: "flex-start"},
  input: {
    fontFamily: "Kanit_400Regular",
    fontSize: 20,
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
    color: "white",
    padding: 10,
    flexDirection: "row",
    backgroundColor: XOverTheme.bg_blue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
})