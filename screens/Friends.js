import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useState } from 'react';
import XOverTheme from '../assets/XOverTheme';
import XOverFriend from '../components/XOverFriend';
import XOverSearch from '../components/XOverSearch';

export default function Friends() {
  const [selectedIndex, changeIndex] = useState(0);
  const image1 = require('./../assets/default_profile.png');
  const name1 = 'Steve';
  const title1 = 'Mechanical Engineer';
  const image2 = require('./../assets/default_profile.png');
  const name2 = 'Natasha';
  const title2 = 'Head of Engineering';
  const image3 = require('./../assets/default_profile.png');
  const name3 = 'Tony';
  const title3 = 'Mechanical Engineer';
  const image4 = require('./../assets/default_profile.png');
  const name4 = 'Bruce';
  const title4 = 'Computer Engineer';
  const image5 = require('./../assets/default_profile.png');
  const name5 = 'Kevin';
  const title5 = 'Mechanical Engineer';
  const image6 = require('./../assets/default_profile.png');
  const name6 = 'Olivia';
  const title6 = 'Computer Engineer';
  const image7 = require('./../assets/default_profile.png');
  const name7 = 'Michael';
  const title7 = 'Chemical Engineer';
  const image8 = require('./../assets/default_profile.png');
  const name8 = 'Megan';
  const title8 = 'Human Relations';
  const image9 = require('./../assets/default_profile.png');
  const name9 = 'Jin';
  const title9 = 'President';
  const image10 = require('./../assets/default_profile.png');
  const name10 = 'Miguel';
  const title10 = 'Head of Marketing';
  
  const [searchPhrase, setSearchPhrase] = useState("");
  const getRelevantProjects = () => {
    return PROJ_DATA.filter((project) => project.name.toLowerCase().includes(searchPhrase.toLowerCase()) || project.tags.filter((tag) => tag.toLowerCase().includes(searchPhrase.toLowerCase())).length > 0);
  }
  const [searchClicked, setClicked] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);
  const completeSearchFn = (phrase) => {
    setSearchPhrase(phrase);
    setShowProjectList(true);
  }
  
  
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
      <ScrollView style={{padding: 10, flex: 1}}>
        <XOverFriend style={{flex: 1}} image={image1} name={name1} title={title1} />
        <View style={{flex: 10}}/>
        <XOverFriend style={{flex: 1}} image={image2} name={name2} title={title2} />
        <XOverFriend style={{flex: 1}} image={image3} name={name3} title={title3} />
        <XOverFriend style={{flex: 1}} image={image4} name={name4} title={title4} />
        <XOverFriend style={{flex: 1}} image={image5} name={name5} title={title5} />
        <XOverFriend image={image6} name={name6} title={title6} />
        <XOverFriend image={image7} name={name7} title={title7} />
        <XOverFriend image={image8} name={name8} title={title8} />
        <XOverFriend image={image9} name={name9} title={title9} />
        <XOverFriend image={image10} name={name10} title={title10} />
      </ScrollView>
    </View>
    </ImageBackground>
  );
}


