import React from "react";
import { View, StyleSheet } from "react-native";

export default function Divider() {
    return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 1,
        backgroundColor: "#DFE4EA",
        marginHorizontal: 12,
        marginVertical: 8,alignSelf:"center"
    }
});
