import { StyleSheet, Text, View, ImageBackground, ScrollView, Pressable } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState } from 'react';
import XOverTheme from '../assets/XOverTheme';
import XOverFriend from '../components/XOverFriend';
import XOverSearch from '../components/XOverSearch';
import XOverFriendsInfo from '../assets/XOverFriendsInfo';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import PROJ_DATA from './../assets/mock_data';

export default function Friends({navigation}) {
  const [selectedIndex, changeIndex] = useState(0);
  
  const [searchPhrase, setSearchPhrase] = useState("");
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
          union.push(m);
        } else {
          union[union.findIndex((x) => x.email === m.email )].role.push(m.role.toString());
        }
      })
    })
    console.log(union)
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
      <TextInput value={searchPhrase} onChangeText={(text) => {setSearchPhrase(text)}} placeholderTextColor={"white"} style={styles.input} placeholder='Search' />
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
          <FlatList
            data={getMembers()}
            renderItem={({item, index}) => (
              <XOverFriend image={item.image} name={item.name} roles={item.role} />
            )}
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