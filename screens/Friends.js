import { StyleSheet, Text, View, ImageBackground, ScrollView, Pressable } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState } from 'react';
import XOverTheme from '../assets/XOverTheme';
import XOverFriend from '../components/XOverFriend';
import XOverSearch from '../components/XOverSearch';
import XOverFriendsInfo from '../assets/XOverFriendsInfo';
import { FlatList } from 'react-native-gesture-handler';
import PROJ_DATA from './../assets/mock_data';

export default function Friends({navigation}) {
  const [selectedIndex, changeIndex] = useState(0);
  
  const [searchPhrase, setSearchPhrase] = useState("");
  // const getRelevantProjects = () => {
  //   return PROJ_DATA.filter((project) => project.name.toLowerCase().includes(searchPhrase.toLowerCase()) || project.tags.filter((tag) => tag.toLowerCase().includes(searchPhrase.toLowerCase())).length > 0);
  // }
  const [searchClicked, setClicked] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
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
          union.push(m);
        } else {
          union[union.findIndex((x) => x.email === m.email )].role.push(m.role);
        }
      })
    })
    return union.sort((a, b) => a.name - b.name);
  };
  
  
  return (
    <ImageBackground imageStyle={{opacity: .1}} style={{height: "100%"}} source={require('./../assets/comic_dots.jpg')} >
    <View style={{ flex: 1, padding: 20}}>
      <SegmentedControl
            style={{marginTop: 40, width: "80%", marginLeft: "10%", marginRight: "10%"}}
            values={['Friends', 'Suggestions']}
            selectedIndex={selectedIndex}
            backgroundColor={XOverTheme.bg_blue}
            tintColor={XOverTheme.base_orange}
            fontStyle={{fontFamily: "Kanit_400Regular", color: 'white'}}
            onChange={(event) => {
              changeIndex(event.nativeEvent.selectedSegmentIndex);
            }}
          />
      <XOverSearch setShowProjectList={setShowProjectList} clicked={searchClicked} setClicked={setClicked} searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
      {selectedIndex === 0 ? (
      <ScrollView style={{padding: 10}}>
        <FlatList
          data={getMembers()}
          renderItem={({item, index}) => (
            <XOverFriend image={item.image} name={item.name} roles={item.role} />
          )}
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
        <XOverFriend image={XOverFriendsInfo.person1.image} name={XOverFriendsInfo.person1.name} title={XOverFriendsInfo.person1.title} />
        <XOverFriend image={XOverFriendsInfo.person2.image} name={XOverFriendsInfo.person2.name} title={XOverFriendsInfo.person2.title} />
        <XOverFriend image={XOverFriendsInfo.person3.image} name={XOverFriendsInfo.person3.name} title={XOverFriendsInfo.person3.title} />
        <XOverFriend image={XOverFriendsInfo.person4.image} name={XOverFriendsInfo.person4.name} title={XOverFriendsInfo.person4.title} />
        <XOverFriend image={XOverFriendsInfo.person5.image} name={XOverFriendsInfo.person5.name} title={XOverFriendsInfo.person5.title} />
        <XOverFriend image={XOverFriendsInfo.person6.image} name={XOverFriendsInfo.person6.name} title={XOverFriendsInfo.person6.title} />
        <XOverFriend image={XOverFriendsInfo.person7.image} name={XOverFriendsInfo.person7.name} title={XOverFriendsInfo.person7.title} />
        <XOverFriend image={XOverFriendsInfo.person8.image} name={XOverFriendsInfo.person8.name} title={XOverFriendsInfo.person8.title} />
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
  shadow: {backgroundColor: "black", width: "auto", alignSelf: "flex-start"}
})