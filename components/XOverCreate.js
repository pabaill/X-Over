import { Text, View, StyleSheet, Pressable, FlatList, SafeAreaView, Modal, Alert, Image } from "react-native";
import { useEffect, useState } from "react";
import XOverButton from "./XOverButton";
import XOverTheme from "../assets/XOverTheme";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from "expo-checkbox";
import XOverHeader from './XOverHeader';
import XOverProfileChip from "./XOverProfileChip";
import PROJ_DATA from './../assets/mock_data';

export default function XOverCreate({navigation, setCreateModal, route}) {

    DropDownPicker.setMode("BADGE");

    const [pageNum, changePageNum] = useState(0);

    const [projName, updateProjName] = useState("");
    const [projDesc, updateProjDesc] = useState("");
    const [projThumb, updateProjThumb] = useState(null);
    const [projMembers, updateProjMembers] = useState([{name: "(You)", pronouns: "they/them", role: "Team Lead"}]);
    const [isProjPublic, setIsProjPublic] = useState(false);
    const [projTags, updateProjTags] = useState([]);

    const [addMemberModalOpen, setAddMemberModal] = useState(false);
    const [tagDropOpen, setTagDropOpen] = useState(false);

    const getUsers = () => {
        let union = []
        PROJ_DATA.forEach((project) => {
            project.members.forEach((m) => {
            if (!union.some((x) => x.label === m.name && x.value.email === m.email)) {
                union.push({label: m.name, value: m, itemKey: m.email});
            }
            })
        })
        return union.sort((a, b) => a.label < b.label);
    };

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        console.log(result)

        if (!result.canceled) {
            updateProjThumb(result.assets[0].uri);
        }
    }
    
    const getTags = () => {
    let union = []
    PROJ_DATA.forEach((project) => {
        project.tags.forEach((tag) => {
        if (!union.some((x) => x.label === tag && x.value === tag)) {
            union.push({label: tag, value: tag, itemKey: tag});
        }
        })
    })
    return union.sort((a, b) => a.tag < b.tag);
    };

    let [fontsLoaded] = useFonts({
        Kanit_400Regular
      });
    
    if (!fontsLoaded) {
    return null;
    }

    const finalizeCreation = () => {
        const newProj = {
            name: projName,
            owner: route.params.user,
            description: projDesc, 
            thumb: projThumb,
            updates: [{
                name: "You", text: `Created X-Over "${projName}"`, link: {text: "View Project"}, time: new Date()
              }],
            members: projMembers, 
            visible: isProjPublic, 
            tags: projTags.map((tag) => {
                return tag[0] === '#' ? tag : '#' + tag;
            }),
            resources: []
        };
        console.log(newProj);
        PROJ_DATA.push(newProj);
        setCreateModal(false); 
        navigation.jumpTo("Projects", {
            project: newProj, source: "Projects"
        });
    };

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: XOverTheme.bg_blue + "d0"}}>
            {pageNum === 0 && 
            <SafeAreaView style={{ marginVertical: 40, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white", minHeight: "80%", borderRadius: 15, minWidth: "90%" }}>
                <ScrollView style={{flex: 1, width: "100%", minWidth: "90%"}}  >
                    <XOverButton containerStyles={{margin: 10}} icon={(<FontAwesome style={{fontSize: 32 }} name="arrow-left" />)} pressFunc={() => {setCreateModal(false)}} />
                    <View style={{flex: 1, alignItems: "center", justifyContent: "space-around", height: "100%", width: "100%"}}>
                        <View style={[styles.infoContainer, {marginTop: 20, marginBottom: 60}]}>
                            <Text style={styles.infoText}>Create Your X-Over</Text>
                        </View>
                        <TextInput value={projName} onChangeText={updateProjName} placeholderTextColor={"white"} style={[styles.input, {marginBottom: 40}]} placeholder="Project Name" />
                        <TextInput value={projDesc} onChangeText={updateProjDesc} multiline numberOfLines={6} placeholderTextColor={"white"} style={[styles.input, styles.description, {marginBottom: 60}]} placeholder="Description" />
                        <View style={[styles.fileBrowseContainer, {marginBottom: 30}]} >
                            <Pressable style={{flex: 1, alignItems: "center", justifyContent: "center"}} onPress={selectImage}>
                                {projThumb === null ? (
                                    <View>
                                        <FontAwesome style={{fontSize: 44, color: "white", alignSelf: "center" }} name="photo" />
                                        <Text style={styles.infoText}>Choose Project Thumbnail Image</Text>
                                    </View>
                                ) : (
                                    <View style={{padding: 20}}>
                                    <Image style={{alignSelf: "center", width: 120, height: 150}} source={{uri: projThumb}} />
                                    <Text style={[styles.infoText, {marginVertical: 10}]}>Uploaded Thumbnail! </Text>
                                    </View>
                                )}
                                
                            </Pressable>
                        </View>
                    </View>
                    <View style={{flex: 1, alignSelf: "flex-end", marginRight: 20}}>
                        <XOverButton text={"Next"} pressFunc={() => {changePageNum(pageNum + 1)}} />
                    </View>
                </ScrollView>
            </SafeAreaView>
            }
            {pageNum === 1 &&
            <SafeAreaView style={{ marginVertical: 40, flex: 1, padding: 10, backgroundColor: "white", minHeight: "80%", borderRadius: 15, minWidth: "90%", width: "90%", height: "100%" }}>
                <View style={{flex: 1, width: "auto"}} >
                    <Modal 
                    animationType='fade'
                    transparent={true}
                    visible={addMemberModalOpen}
                    onRequestClose={() => {
                      setAddMemberModal(!addMemberModalOpen);
                    }}
                    >
                    <View style={{flex: 1, width: "auto", backgroundColor: XOverTheme.bg_blue + "d0"}} >
                        <SafeAreaView style={{ marginVertical: 40, flex: 1, padding: 10, backgroundColor: "white", height: "60%", borderRadius: 15, minWidth: "90%", width: "90%", marginHorizontal: "5%" }}>
                            <XOverButton containerStyles={{margin: 10}} icon={(<FontAwesome style={{fontSize: 32 }} name="arrow-left" />)} pressFunc={() => {setAddMemberModal(!addMemberModalOpen)}} />
                            <DropDownPicker 
                            items={getUsers()}
                            multiple={true}
                            value={projMembers}
                            setValue={updateProjMembers}
                            searchable={true}
                            open={tagDropOpen}
                            setOpen={setTagDropOpen}
                            textStyle={{fontFamily: "Kanit_400Regular"}}
                            />
                        </SafeAreaView>
                    </View>
                    </Modal>
                    <XOverButton containerStyles={{margin: 10}} icon={(<FontAwesome style={{fontSize: 32 }} name="arrow-left" />)} pressFunc={() => {changePageNum(pageNum - 1)}} />
                    <Text style={[styles.infoText, {color: 'black'}]}>Add members to "{projName}" X-Over</Text>
                    <View style={{flex: 4, height: "100%", width: "90%", padding: 10}}>
                        <XOverHeader text={"Members"} />
                        <FlatList 
                        pagingEnabled={true}
                        contentContainerStyle={{height: 80, alignItems: "center", alignSelf: "center", marginVertical: 20, justifyContent: "center"}}
                        horizontal={true}
                        data={projMembers} 
                        renderItem={({item, index}) => (
                          <XOverProfileChip containerStyles={{marginHorizontal: 0}} person={item} key={item.name + index} />
                        )}
                        ListHeaderComponent={(
                        <Pressable onPress={() => {setAddMemberModal(!addMemberModalOpen)}}>
                            <XOverProfileChip containerStyles={{marginHorizontal: 0}} isAddBtn={true} person={{name: "Add", pronouns: "", role: ""}} />
                        </Pressable>
                        )}
                        />
                        <View style={{marginBottom: 20}}>
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                <CheckBox color={isProjPublic ? XOverTheme.base_orange : undefined} value={isProjPublic} onValueChange={setIsProjPublic} />
                                <Text style={{paddingLeft: 10, fontFamily: "Kanit_400Regular", fontSize: 18}}>Looking For Members</Text>
                            </View>
                            <Text style={{fontFamily: "Kanit_400Regular", fontSize: 12, textAlign: "center"}}>Check this option if you want this X-Over to be visible to other collaborators</Text>
                        </View>
                        <XOverHeader text={"Tags"} containerStyles={{marginBottom: 10}} />
                        <View style={{flex: 20}}>
                            <DropDownPicker 
                            items={getTags()}
                            multiple={true}
                            value={projTags}
                            setValue={updateProjTags}
                            searchable={true}
                            open={tagDropOpen}
                            setOpen={setTagDropOpen}
                            textStyle={{fontFamily: "Kanit_400Regular"}}
                            addCustomItem={true}
                            />
                        </View>
                    </View>
                    <View style={{flex: 1, alignSelf: "flex-end", marginRight: 20}}>
                        <XOverButton text={"Create"} pressFunc={finalizeCreation} />
                    </View>                
                </View>
            </SafeAreaView>
            }
        </View>
        );
}

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: XOverTheme.bg_blue + "a0",
        width: "90%",
        marginHorizontal: "5%",
        height: "15%",
        justifyContent: "center",
        borderRadius: 50
    },
    infoText: {
        fontFamily: "Kanit_400Regular",
        fontSize: 18,
        textAlign: "center",
        color: "white"
    },
    input: {
        fontFamily: "Kanit_400Regular",
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
        marginHorizontal: "5%",
        color: "white",
        padding: 10,
        flexDirection: "row",
        backgroundColor: XOverTheme.bg_blue,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
      },
    description: {
        maxWidth: "90%"
    },
    fileBrowseContainer: {
        backgroundColor: XOverTheme.bg_blue,
        width: "90%",
        marginHorizontal: "5%",
        height: "30%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    }
});