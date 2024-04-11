import React from "react";
import { View, StyleSheet,Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image style={styles.logo} source={require("../assets/img/logo.png")} />
                <Text style={styles.title}>Atlas AI</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, gap: 8 },
    logo: { width: 24, height: 24 },
    title: { fontSize: 24, fontWeight: "700" }
});
