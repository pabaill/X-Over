
import { StyleSheet, Text, View, Image, Pressable, ImageBackground} from 'react-native';
import XOverTheme from '../assets/XOverTheme';
import {useState} from 'react';

import { signOut } from 'firebase/auth';
import {auth} from './../firebase';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function Profile({route, navigation}) {

  const [newPhone, setNewPhone] = useState(route.params.user.phoneNumber);
  const [newMessage, setNewMessage] = useState(route.params.user.textNumber ? route.params.user.textNumber : route.params.user.phoneNumber);
  const [newEmail, setNewEmail] = useState(route.params.user.email);

  const updateUserInfo = (info, field) => {
    const newUser = {...route.params.user};
    newUser[field] = info;
    route.params.setUser(newUser);
  }

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1,
    });

    console.log(result)

    if (!result.canceled) {
        const newUser = {...route.params.user};
        newUser.image = result.assets[0].uri;
        route.params.setUser(newUser);
        navigation.jumpTo('Profile', {user: newUser})
    }
  }


  return (
    <ImageBackground imageStyle={{opacity: .1}} style={{height: "100%"}} source={require('./../assets/comic_dots.jpg')} >
    <View style={{flex: 1}}>
      <View style={{flex: 8, backgroundColor: XOverTheme.bg_blue}}>
        <Pressable hitSlop={20} style={{position: "absolute", paddingTop: 30, left: 20}} onPress={() => {console.log("signout"); signOut(auth)}}>
          <Text style={styles.settingsText}>Logout</Text>
        </Pressable>
      </View>
      <View style={{flex: 10, flexDirection: 'row', width: "100%"}}>
        <Text style={styles.profileText}>Profile</Text>
      </View>
      <View style={{flex: 2, backgroundColor: XOverTheme.bg_blue}} />


      <View style={{flex: 27, flexDirection: 'row', backgroundColor: XOverTheme.bg_blue}}>
        <Pressable style={{height: "50%", width: "50%", marginHorizontal: "25%", backgroundColor: XOverTheme.bg_blue}} onPress={() => {selectImage()}} >
          <Image style={{height: 200, width: 200}} source={typeof(route.params.user.image) === "number" ? route.params.user.image : {uri: route.params.user.image}} />
        </Pressable>
      </View>
      <View style={{flex: 2}} />


      <View style={{flex: 15}}>
        <Text style={[styles.nameText, {lineHeight: 45, paddingTop: 10}]}>{route.params.user.displayName}</Text>
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
        <Pressable style={{flex: 12, flexDirection: "row"}} onPress={() => {navigation.jumpTo('Home', {showPinned: true})}}>
          <Text style={{flex: 5, paddingLeft: 5, backgroundColor: 'lightgrey', fontSize: 15, color: 'black', fontFamily: "Kanit_400Regular"}}>Pinned Projects</Text>
          <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: 'lightgrey', resizeMode: "contain"}} source={require("./../assets/Icons/go-to-icon.png")} />
        </Pressable>
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 3}} />
      <View style={{flex: 4, flexDirection: 'row'}}>
        <View style={{flex: 2}} />
        <Pressable style={{flex: 12, flexDirection: "row"}} onPress={() => {navigation.jumpTo('Home', {showPinned: true})}}>
          <Text style={{flex: 5, paddingLeft: 5, backgroundColor: 'lightgrey', fontSize: 15, color: 'black', fontFamily: "Kanit_400Regular"}}>Ongoing Projects</Text>
          <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: 'lightgrey', resizeMode: "contain"}} source={require("./../assets/Icons/go-to-icon.png")} />
        </Pressable>
        <View style={{flex: 2}} />
      </View>
      <View style={{flex: 3}} />
      <View style={{flex: 4, flexDirection: 'row'}}>
        <View style={{flex: 2}} />
        <Pressable style={{flex: 12, flexDirection: "row"}} onPress={() => {navigation.jumpTo('Home', {showPinned: true})}}>
          <Text style={{flex: 5, paddingLeft: 5, backgroundColor: 'lightgrey', fontSize: 15, color: 'black', fontFamily: "Kanit_400Regular"}}>Linked Devices</Text>
          <Image style={{flex: 1, height: '100%', width: '10%', backgroundColor: 'lightgrey', resizeMode: "contain"}} source={require("./../assets/Icons/go-to-icon.png")} />
        </Pressable>
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