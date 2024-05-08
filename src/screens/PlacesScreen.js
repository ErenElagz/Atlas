import React from "react";
import { View, StyleSheet, Text, Dimensions, SafeAreaView, ImageBackground, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import MapView from "react-native-maps";
export default function PlacesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <ImageBackground
                    source={{
                        uri: "https://www.missafir.com/wp-content/uploads/2023/07/beyoglu-gezilecek-yerler-taksim-istiklal-caddesi-street-nostaljik-tramvay-tram-where-to-go.jpg"
                    }}
                    style={styles.imageBackground}
                >
                    <LinearGradient colors={["rgba(255, 255, 255, 0)", "#000"]} style={styles.gradient} />
                    <View style={styles.container2}>
                        <View style={{ gap: 4 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                                <Text style={{ color: "#fafafa", fontSize: 24, fontWeight: "700" }}>Taksim Square</Text>
                                <View style={{ backgroundColor: "#000", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 }}>
                                    <Text style={{ color: "#fafafa", fontSize: 12, fontWeight: "600" }}>Save</Text>
                                </View>
                            </View>
                            <Text style={{ color: "#bbb", fontSize: 10, fontWeight: "400" }}>
                                Sultanahmet, also known as the Historic Peninsula, is the heart of Istanbul's historical district. It boasts iconic landmarks such as the Hagia
                                Sophia, the Blue Mosque, and the Topkapi Palace. Visitors can immerse themselves in centuries of history while exploring the narrow streets filled
                                with charming cafes, vibrant bazaars, and architectural marvels.
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={{ flexDirection: "row", gap: 8, flex: 1, marginTop: 8, paddingHorizontal: 16 }}>
                <TouchableOpacity style={{ flex: 1, width: 20, height: 120, overflow: "hidden", borderRadius: 16 }}>
                    <MapView style={{ flex: 1 }} />
                </TouchableOpacity>
                <View style={{ flex: 1, width: 20, height: 120, overflow: "hidden", borderRadius: 16, borderWidth: 1, borderColor: "#ddd" }}>
                    <View style={{ padding: 12 }}>
                        <Text style={{ color: "#2a2a2a", fontSize: 24, fontWeight: 700 }}>Weather</Text>
                        <Text style={{ color: "#646464", fontSize: 20, fontWeight: 600 }}>21°</Text>
                        <Text style={{ color: "#aaa", fontSize: 16 }}>6 Monday</Text>
                    </View>
                </View>
            </View>

            <View>
                <View></View>
                <View></View>
            </View>

            <View>
                <View></View>
                <View></View>
            </View>

            <View>
                <View></View>
                <View></View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 24
    },
    header: {
        width: Dimensions.get("window").width - 24,
        height: Dimensions.get("window").width - 24,
        borderRadius: 24,
        overflow: "hidden"
    },
    icon: { width: 20, height: 20 },
    imageBackground: {
        flex: 1
    },
    gradient: {
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width
    },
    container2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 24,
        bottom: 0,
        position: "absolute"
    }
});
