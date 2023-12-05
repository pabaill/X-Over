import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import XOverTheme from '../assets/XOverTheme';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import {useState} from 'react';

import { signOut } from 'firebase/auth';
import {auth} from './../firebase';

export default function Profile() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 7, backgroundColor: XOverTheme.bg_blue}}>
        <Pressable style={{position: "absolute", paddingTop: 20, left: 20}} onPress={() => {signOut(auth)}}>
          <Text style={[styles.settingsText, {}]}>Logout</Text>
        </Pressable>
      </View>
      <View style={{flex: 10, flexDirection: 'row', width: "100%"}}>
        <Text style={[styles.profileText, {}]}>Profile</Text>
      </View>
      <View style={{flex: 2, backgroundColor: XOverTheme.bg_blue}} />


      <View style={{flex: 27, flexDirection: 'row', backgroundColor: XOverTheme.bg_blue}}>
        <View style={{flex: 4}} />
        <Image style={{flex: 7, height: '100%', width: '10%', backgroundColor: XOverTheme.bg_blue}} source={require("./../assets/default_profile.png")} />
        <View style={{flex: 4}} />
      </View>
      <View style={{flex: 2}} />


      <View style={{flex: 11}}>
        <Text style={styles.nameText}>Profile Name</Text>
        <View style={{flex: 1}}/>
        <Text style={styles.titleText}>Job Title</Text>
      </View>

      <View style={{flex: 2}} />
      <View style={{flex: 4, flexDirection: 'row'}}>
        <View style={{flex: 2.5}} />
        <Image style={{flex: 1, height: '100%', width: '10%'}} source={require("./../assets/Icons/phone-icon.png")} />
        <View style={{flex: .5}} />
        <Text style={{flex: 6, backgroundColor: XOverTheme.bg_blue, textAlign: 'center', fontSize: 15, color: 'white', fontFamily: "Kanit_400Regular"}}>XXX-XXX-XXXX</Text>
        <View style={{flex: 3, backgroundColor: XOverTheme.bg_blue}} />
        <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: XOverTheme.bg_blue}} source={require("./../assets/Icons/pencil-icon.png")} />
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 3}} />

      <View style={{flex: 4, flexDirection: 'row'}}>
      <View style={{flex: 2.5}} />
        <Image style={{flex: 1, height: '100%', width: '10%'}} source={require("./../assets/Icons/message-icon.jpeg")} />
        <View style={{flex: .5}} />
        <Text style={{flex: 6, backgroundColor: XOverTheme.bg_blue, textAlign: 'center', fontSize: 15, color: 'white', fontFamily: "Kanit_400Regular"}}>XXX-XXX-XXXX</Text>
        <View style={{flex: 3, backgroundColor: XOverTheme.bg_blue}} />
        <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: XOverTheme.bg_blue}} source={require("./../assets/Icons/pencil-icon.png")} />
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 3}} />

      <View style={{flex: 4, flexDirection: 'row'}}>
      <View style={{flex: 2.5}} />
        <Image style={{flex: 1, height: '100%', width: '10%'}} source={require("./../assets/Icons/email-icon.jpeg")} />
        <View style={{flex: .5}} />
        <Text style={{flex: 7, backgroundColor: XOverTheme.bg_blue, textAlign: 'center', fontSize: 15, color: 'white', fontFamily: "Kanit_400Regular"}}>profilename@email.com</Text>
        <View style={{flex: 2, backgroundColor: XOverTheme.bg_blue}} />
        <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: XOverTheme.bg_blue}} source={require("./../assets/Icons/pencil-icon.png")} />
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