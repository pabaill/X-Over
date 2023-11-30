import { View, Text, FlatList, Pressable } from "react-native";
import XOverButton from "./XOverButton";
import XOverProfileChip from "./XOverProfileChip";

export default function XOverProjectList({navigation, projectList}) {

    return (
        <View style={{flex: 1}}>
            <FlatList 
            data={projectList}
            renderItem={({item, index}) => (
                <Pressable onPress={() => {
                    navigation.jumpTo('Projects', {project: item, source: "Projects"})
                }} >
                    <Text>{item.name}</Text>
                </Pressable>
            )}
            />
        </View>
    )
}