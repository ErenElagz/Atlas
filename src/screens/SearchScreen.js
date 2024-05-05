import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchBar}>
                    <TextInput placeholder="Search..." style={styles.input} selectionColor={"#323232"}></TextInput>
                    <TouchableOpacity>
                        <Image source={require("../assets/icons/search.png")} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.title}>Places</Text>
                    <View style={styles.container3}>
                        <View style={styles.row}>
                            <View style={styles.square}></View>
                            <View style={styles.square}></View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.square}></View>
                            <View style={styles.square}></View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.square}></View>
                            <View style={styles.square}></View>
                        </View>

                    </View>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.title}>Routes</Text>
                    <View style={styles.container3}>
                        <View style={styles.row}>
                            <View style={styles.square}></View>
                            <View style={styles.square}></View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.square}></View>
                            <View style={styles.square}></View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.square}></View>
                            <View style={styles.square}></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 36,
        alignItems: "left",
        paddingHorizontal: 16
    },
    icon: { width: 24, height: 24 },
    input: { flex: 1, fontSize: 14 },
    searchBar: {
        flexDirection: "row",
        padding: 20,
        paddingHorizontal: 20,
        gap: 6,
        borderRadius: 16,
        backgroundColor: "#efefef"
    },
    title: { textAlign: "left", fontSize: 24, fontWeight: "600" },
    container2: { marginVertical: 24, gap: 6 },
    container3: { gap: 6 },
    row: {
        flexDirection: "row",
        gap: 6
    },
    square: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: "#eee",
        borderRadius: 8
    }
});
