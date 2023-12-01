import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import XOverButton from "./XOverButton";
import XOverProfileChip from "./XOverProfileChip";
import XOverTheme from "../assets/XOverTheme";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import { useFonts } from "@expo-google-fonts/kanit";

export default function XOverProjectList({navigation, projectList}) {

    let [fontsLoaded] = useFonts({
        Kanit_400Regular
        });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{flex: 1, width: "100%", marginVertical: 10}}>
            <FlatList
            data={projectList}
            renderItem={({item, index}) => (
                <Pressable style={styles.container} onPress={() => {
                    navigation.jumpTo('Projects', {project: item, source: "Projects"})
                }} >
                    <Text numberOfLines={1} style={[styles.text, styles.proj_name]}>{item.name}</Text>
                    <Text numberOfLines={2} style={[styles.text, styles.description]}>{item.description}</Text>
                    <View style={{height: 30, flexDirection: "row", position: "absolute", bottom: 0, right: 20}}>
                        <XOverProfileChip containerStyles={styles.profile} noText={true} person={item.members[0]} />
                        <XOverProfileChip containerStyles={styles.profile} noText={true} person={item.members[1]} />
                    </View>
                    <Text style={[styles.text, {position: "absolute", top: 10, right: 30}]}>Joined!</Text>
                </Pressable>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: XOverTheme.bg_blue + "90", 
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
        width: "70%"
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