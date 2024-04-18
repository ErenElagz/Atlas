import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity } from "react-native";
import Response from "../components/chatbot/response";
import Message from "../components/chatbot/message";

export default function App() {
    const [inputText, setInputText] = useState("");
    const [listData, setListData] = useState([]);
    const SearchInput = () => {
        setListData(prevList => [...prevList, inputText]);
        setInputText("");
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.header}>
                <Image style={styles.logo} source={require("../assets/img/logo.png")} />
                <Text style={styles.title}>Atlas Assistant</Text>
            </View>

            <FlatList
                style={{ paddingHorizontal: 16, marginBottom: 80 }}
                data={listData}
                renderItem={({ item }) => (
                    <View>
                        <Message message={item} />
                        <Response prompt={item} />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            <View style={styles.searchBar}>
                <TextInput
                    placeholder="Ask to Gemini AI"
                    style={styles.input}
                    value={inputText}
                    onChangeText={text => setInputText(text)}
                    selectionColor={"#323232"}
                ></TextInput>
                <TouchableOpacity onPress={SearchInput}>
                    <Image
                        source={require("../assets/icons/right-arrow.png")}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, gap: 16, paddingTop: 48 },
    header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, gap: 4 },
    title: { fontSize: 24, fontWeight: "800", color: "#323232" },
    logo: { width: 28, height: 28 },
    icon: { width: 24, height: 24 },
    input: { flex: 1, fontSize: 14 },
    searchBar: {
        backgroundColor: "#fafafa",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        gap: 8,
        margin: 12,
        borderRadius: 16
    }
});
