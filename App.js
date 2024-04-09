import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Button title="Maps"></Button>
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
