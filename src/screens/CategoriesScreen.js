import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function CategoriesScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Ancient Cities</Text>
                <View style={styles.container2}>
                    <Text style={styles.title2}>Recommended For You</Text>
                    <View style={styles.container3}>
                        <View style={styles.row}>
                            <View style={styles.square}></View>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.title2}>Places</Text>
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
                    <Text style={styles.title2}>Routes</Text>
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
        paddingTop: 48,
        alignItems: "left",
        paddingHorizontal: 16
    },
    icon: { width: 24, height: 24 },
    input: { flex: 1, fontSize: 14 },

    title: { textAlign: "left", fontSize: 36, fontWeight: "600" },
    title2: { textAlign: "left", fontSize: 24, fontWeight: "600" },
    container2: { marginVertical: 24, gap: 6 },
    container3: { gap: 6 },
    row: {
        flexDirection: "row",
        gap: 6
    },
    square: {
        flex: 1,
        backgroundColor: "#eee",
        borderRadius: 8,
        height: 280
    }
});
