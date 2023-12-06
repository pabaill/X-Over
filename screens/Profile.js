<<<<<<< HEAD
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
=======
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
>>>>>>> d8e88c371d5e94285a09adec5a93c6b5567867b2
import XOverTheme from '../assets/XOverTheme';
import {useState} from 'react';

import { signOut } from 'firebase/auth';
import {auth} from './../firebase';
import { TextInput } from 'react-native-gesture-handler';

export default function Profile({route}) {

  const [newPhone, setNewPhone] = useState(route.params.user.phoneNumber);
  const [newMessage, setNewMessage] = useState(route.params.user.textNumber ? route.params.user.textNumber : route.params.user.phoneNumber);
  const [newEmail, setNewEmail] = useState(route.params.user.email);

  const updateUserInfo = (info, field) => {
    const newUser = {...route.params.user};
    newUser[field] = info;
    route.params.setUser(newUser);
  }


  return (
    <ImageBackground imageStyle={{opacity: .1}} style={{height: "100%"}} source={require('./../assets/comic_dots.jpg')} >
    <View style={{flex: 1}}>
      <View style={{flex: 7, backgroundColor: XOverTheme.bg_blue}}>
        <Pressable style={{position: "absolute", paddingTop: 20, left: 20}} onPress={() => {signOut(auth)}}>
          <Text style={[styles.settingsText, {}]}>Logout</Text>
        </Pressable>
      </View>
      <View style={{flex: 10, flexDirection: 'row', width: "100%"}}>
        <Text style={styles.profileText}>Profile</Text>
      </View>
      <View style={{flex: 2, backgroundColor: XOverTheme.bg_blue}} />


      <View style={{flex: 27, flexDirection: 'row', backgroundColor: XOverTheme.bg_blue}}>
        <View style={{flex: 4}} />
        <Image style={{flex: 7, height: '100%', width: '10%', backgroundColor: XOverTheme.bg_blue}} source={require("./../assets/default_profile.png")} />
        <View style={{flex: 4}} />
      </View>
      <View style={{flex: 2}} />


      <View style={{flex: 11}}>
        <Text style={[styles.nameText, {lineHeight: 35}]}>{route.params.user.displayName}</Text>
        <View style={{flex: 1}}/>
        <Text style={styles.titleText}>Job Title</Text>
      </View>

      <View style={{flex: 2}} />
      <View style={{flex: 4, flexDirection: "row", marginLeft: "10%" }}>
        <Image style={{ height: "auto", width: '10%', resizeMode: "contain", marginRight: "5%"}} source={require('./../assets/Icons/phone-icon.png')} />
        <TextInput onBlur={() => {updateUserInfo(newPhone, "phoneNumber")}} onChangeText={setNewPhone} value={newPhone} dataDetectorTypes='phoneNumber' keyboardType='phone-pad' placeholderTextColor="white" placeholder='+1 XXX-XXX-XXXX' style={styles.input} />
        <Image style={{height: "auto", width: '5%', marginLeft: "-10%"}} source={require('./../assets/Icons/pencil-icon.png')} />
      </View>
      <View style={{flex: 3}} />
      <View style={{flex: 4, flexDirection: "row", marginLeft: "10%" }}>
        <Image style={{ height: "auto", width: '10%', resizeMode: "contain", marginRight: "5%"}} source={require('./../assets/Icons/message-icon.jpeg')} />
        <TextInput onBlur={() => {updateUserInfo(newMessage, "textNumber")}} value={newMessage} onChangeText={setNewMessage} dataDetectorTypes='phoneNumber' keyboardType='phone-pad' placeholderTextColor="white" placeholder='+1 XXX-XXX-XXXX' style={styles.input} />
        <Image style={{height: "auto", width: '5%', marginLeft: "-10%"}} source={require('./../assets/Icons/pencil-icon.png')} />
      </View>
      <View style={{flex: 3}} />
      <View style={{flex: 4, flexDirection: "row", marginLeft: "10%" }}>
        <Image style={{ height: "auto", width: '10%', resizeMode: "contain", marginRight: "5%"}} source={require('./../assets/Icons/email-icon.jpeg')} />
        <TextInput onBlur={() => {updateUserInfo(newEmail, "email")}} value={newEmail} onChangeText={setNewEmail} placeholderTextColor="white" placeholder='Enter your preferred email' style={styles.input} />
        <Image style={{height: "auto", width: '5%', marginLeft: "-10%"}} source={require('./../assets/Icons/pencil-icon.png')} />
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
    fontFamily: "Kanit_400Regular",
  },
  titleText: {
    flex: 5,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontFamily: "Kanit_400Regular"
  },
  input: {
    fontFamily: "Kanit_400Regular",
    borderStyle: "solid",
    borderWidth: 1,
    width: "75%",
    height: 30,
    paddingLeft: 20,
    backgroundColor: XOverTheme.bg_blue,
    color: "white",
    borderRadius: 15,
    fontSize: 14,
    marginLeft: "-3%"
}
});