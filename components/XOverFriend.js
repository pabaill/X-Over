import { useFonts, Kanit_400Regular, Kanit_700Bold } from 'expo-font';
import { Pressable, View, Text, Image, StyleSheet, Alert } from 'react-native';
import XOverTheme from '../assets/XOverTheme';

export default function XOverFriend({friend, setFriendToShow}) {
    return (
        <Pressable onPress={() => {setFriendToShow(friend)}}>
        <View style={{height: 95, flexDirection: 'column', width: "100%"}}>
            <View style={{height: 20, width: "100%"}}/>
            <View style={{height: 55, width: "100%"}}>
                <View style={{flex: 1, flexDirection: 'row', width: "100%", height: 80}} >
                    <View style={{flex: 8}}/>
                    <Image style={{flex: 17, height: '100%', width: '14%', borderColor: 'white'}} source={friend.image} />
                    <View style={{flex: 2}}/>
                    <View style={{flex: 45, flexDirection: 'column'}}>
                        <View style={{flex: 1}}/>
                        <Text style={{flex: 3, fontSize: 15}}>{friend.name}</Text>
                        <View style={{flex: 1}}/>
                        <Text numberOfLines={1} style={{flex: 3,fontSize: 15}}>{friend.role.join(", ")}</Text>
                        <View style={{flex: 1}}/>
                    </View>
                    <View style={{flex: 20}}/>
                    <View style={{flex: 8}}/>
                </View>
            </View>
            <View style={{height: 20}}/>
        </View>
        </Pressable>
    );
}