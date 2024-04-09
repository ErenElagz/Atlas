import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ChatBotScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>ChatBot Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
