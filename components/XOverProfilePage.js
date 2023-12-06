import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import XOverTheme from '../assets/XOverTheme';
import {useState} from 'react';

export default function Profile(image, name, title, phone, email) {
  return (
    <ImageBackground imageStyle={{opacity: .1}} style={{height: "100%"}} source={require('./../assets/comic_dots.jpg')} >
    <View style={{flex: 1}}>
      <View style={{flex: 7, backgroundColor: XOverTheme.bg_blue}} />
      <View style={{flex: 10, flexDirection: 'row'}}>
        <Text style={styles.settingsText}></Text>
        <Text style={styles.profileText}>Profile</Text>
        <Text style={styles.settingsText}></Text>
      </View>
      <View style={{flex: 2, backgroundColor: XOverTheme.bg_blue}} />


      <View style={{flex: 27, flexDirection: 'row', backgroundColor: XOverTheme.bg_blue}}>
        <View style={{flex: 4}} />
        <Image style={{flex: 7, height: '100%', width: '10%', backgroundColor: XOverTheme.bg_blue}} source={image} />
        <View style={{flex: 4}} />
      </View>
      <View style={{flex: 2}} />


      <View style={{flex: 11}}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={{flex: 1}}/>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={{flex: 2}} />
      <View style={{flex: 4, flexDirection: 'row'}}>
        <View style={{flex: 2.5}} />
        <Image style={{flex: 1, height: '100%', width: '10%'}} source={require("./../assets/Icons/phone-icon.png")} />
        <View style={{flex: .5}} />
        <Text style={{flex: 6, backgroundColor: XOverTheme.bg_blue, textAlign: 'center', fontSize: 15, color: 'white', fontFamily: "Kanit_400Regular"}}>{phone}</Text>
        <View style={{flex: 4, backgroundColor: XOverTheme.bg_blue}} />
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 3}} />

      <View style={{flex: 4, flexDirection: 'row'}}>
      <View style={{flex: 2.5}} />
        <Image style={{flex: 1, height: '100%', width: '10%'}} source={require("./../assets/Icons/message-icon.jpeg")} />
        <View style={{flex: .5}} />
        <Text style={{flex: 6, backgroundColor: XOverTheme.bg_blue, textAlign: 'center', fontSize: 15, color: 'white', fontFamily: "Kanit_400Regular"}}>{phone}</Text>
        <View style={{flex: 4, backgroundColor: XOverTheme.bg_blue}} />
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 3}} />

      <View style={{flex: 4, flexDirection: 'row'}}>
      <View style={{flex: 2.5}} />
        <Image style={{flex: 1, height: '100%', width: '10%'}} source={require("./../assets/Icons/email-icon.jpeg")} />
        <View style={{flex: .5}} />
        <Text style={{flex: 7, backgroundColor: XOverTheme.bg_blue, textAlign: 'center', fontSize: 15, color: 'white', fontFamily: "Kanit_400Regular"}}>{email}</Text>
        <View style={{flex: 3, backgroundColor: XOverTheme.bg_blue}} />
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 7}} />


      <View style={{flex: 4, flexDirection: 'row'}}>
        <View style={{flex: 2}} />
        <Text style={{flex: 5, backgroundColor: 'lightgrey', textAlign: 'center', fontSize: 15, color: 'black', fontFamily: "Kanit_400Regular"}}>Pinned Projects</Text>
        <View style={{flex: 6, backgroundColor: 'lightgrey'}} />
        <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: 'lightgrey'}} source={require("./../assets/Icons/go-to-icon.png")} />
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 3}} />
      <View style={{flex: 4, flexDirection: 'row'}}>
        <View style={{flex: 2}} />
        <Text style={{flex: 5, backgroundColor: 'lightgrey', textAlign: 'center', fontSize: 15, color: 'black', fontFamily: "Kanit_400Regular"}}>Ongoing Projects</Text>
        <View style={{flex: 6, backgroundColor: 'lightgrey'}} />
        <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: 'lightgrey'}} source={require("./../assets/Icons/go-to-icon.png")} />
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 3}} />
      <View style={{flex: 4, flexDirection: 'row'}}>
        <View style={{flex: 2}} />
        <Text style={{flex: 5, backgroundColor: 'lightgrey', textAlign: 'center', fontSize: 15, color: 'black', fontFamily: "Kanit_400Regular"}}>Linked Devices</Text>
        <View style={{flex: 6, backgroundColor: 'lightgrey'}} />
        <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: 'lightgrey'}} source={require("./../assets/Icons/go-to-icon.png")} />
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 9}} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  profileText: {
    flex: 5,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: XOverTheme.bg_blue,
    fontFamily: "Kanit_400Regular"
  },
  settingsText: {
    flex: 5,
    fontSize: 15,
    color: 'white',
    backgroundColor: XOverTheme.bg_blue,
    textAlign: 'center',
    fontFamily: "Kanit_400Regular"
  },
  nameText: {
    flex: 5,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontFamily: "Kanit_400Regular"
  },
  titleText: {
    flex: 5,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontFamily: "Kanit_400Regular"
  }
});