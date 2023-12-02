import { Text, View } from "react-native";
import XOverButton from "./XOverButton";
import XOverTheme from "../assets/XOverTheme";
import { FontAwesome } from "@expo/vector-icons";

export default function XOverCreate({setCreateModal}) {

    return (
        <View style={{flex: 1, width: "100%", height: "100%", padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: XOverTheme.bg_blue + "d0"}}>
            <View style={{width: "90%", marginHorizontal: "5%", height: "90%", backgroundColor: "white", borderRadius: 15, padding: 10}}>
                <XOverButton icon={(<FontAwesome style={{fontSize: 32 }} name="arrow-left" />)} pressFunc={() => {setCreateModal(false)}} />
                <Text>This is the create screen</Text>
            </View>
        </View>
    );
}