import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RoutesScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Routes Screen</Text>
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
