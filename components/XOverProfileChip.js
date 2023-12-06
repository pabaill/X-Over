import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import { useFonts } from "@expo-google-fonts/kanit";

export default function XOverProfileChip({person, noText, isAddBtn, containerStyles}) {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
    <View style={[styles.shadow, containerStyles]}>
        <View style={[{height: 80, width: 80, marginHorizontal: 20, resizeMode: "contain"}, containerStyles]}>
            <Image style={{flex: 1, height: 80, width: 80, resizeMode: "contain"}} source={isAddBtn || !person.image ? require('./../assets/add_member.png') : ((typeof(person.image) === 'number') ? person.image : {uri: person.image})} />
            {!noText && (<View style={{height: "30%", flex: 1, width: "100%"}}>
                <Text numberOfLines={1} style={styles.name}>{person.name ? person.name : person.displayName}</Text>
                <Text numberOfLines={1} style={styles.role}>{person.pronouns}</Text>
                <Text numberOfLines={1} style={styles.role}>{person.role}</Text>
            </View>)}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontFamily: "Kanit_400Regular",
        fontSize: 14,
        textAlign: "center",
        lineHeight: 18
    },
    role: {
        fontFamily: "Kanit_400Regular",
        fontSize: 12,
        textAlign: "center",
        lineHeight: 12
    }
})