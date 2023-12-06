import { useFonts, Kanit_400Regular, Kanit_700Bold } from 'expo-font';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import XOverTheme from '../assets/XOverTheme';

export default function XOverFriend({image, name, title}) {
    return (
        <View style={{height: 95, flexDirection: 'column'}}>
            <View style={{height: 20}}/>
            <View style={{height: 55, flexDirection: 'row'}}>
                <View style={{flex: 8}}/>
                <Image style={{flex: 17, height: '100%', width: '14%', borderColor: 'white'}} source={image} />
                <View style={{flex: 2}}/>
                <View style={{flex: 45, flexDirection: 'column'}}>
                    <View style={{flex: 1}}/>
                    <Text style={{flex: 3, fontSize: 15}}>{name}</Text>
                    <View style={{flex: 1}}/>
                    <Text style={{flex: 3,fontSize: 15}}>{title}</Text>
                    <View style={{flex: 1}}/>
                </View>
                <View style={{flex: 20}}/>
                <View style={{flex: 8}}/>
            </View>
            <View style={{height: 20}}/>
        </View>
    );
}