import React, { useMemo, useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import MapView from "react-native-maps";
import MarkerComponentCallout from "./marker";
import MapViewStyle from "./custommap.json";
import { StatusBar } from "expo-status-bar";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Divider from "./divider";
export default function App() {
    const BottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["6", "40", "80"], []);
    const [dataFromChild, setDataFromChild] = useState([]);
    const receiveDataFromChild = data => {
        setDataFromChild(data);
    };
    const highlights = dataFromChild["highlights"];

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <MapView
                    customMapStyle={MapViewStyle}
                    style={styles.map}
                    initialRegion={{
                        latitude: 41.0055,
                        longitude: 28.9769,
                        longitudeDelta: 0.0421,
                        latitudeDelta: 0.0922
                    }}
                >
                    <MarkerComponentCallout setData={receiveDataFromChild} />
                </MapView>
                <TextInput
                    style={styles.input}
                    placeholder="Search Places"
                ></TextInput>
                <BottomSheet
                    ref={BottomSheetRef}
                    index={1}
                    snapPoints={snapPoints}
                >
                    <View style={styles.container2}>
                        <Image
                            style={styles.img}
                            source={{
                                uri: dataFromChild["img"]
                            }}
                        />
                        <Text style={styles.placeTitle}>
                            {dataFromChild["name"]}
                        </Text>
                        <View style={styles.badgesViews}>
                            {highlights &&
                                highlights.map((highlight, index) => (
                                    <View style={styles.badges}>
                                        <Text
                                            style={styles.badgesText}
                                            key={index}
                                        >
                                            {highlight}
                                        </Text>
                                    </View>
                                ))}
                        </View>
                        <Text style={styles.placeDescription}>
                            {dataFromChild["description"]}
                        </Text>

                        <View
                            style={{
                                backgroundColor: "#fafafa",
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 24,
                                gap: 12
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: "800" }}>
                                Reviews (3)
                            </Text>
                            <View>
                                <View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: "700"
                                            }}
                                        >
                                            ErenElagz
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: "600"
                                            }}
                                        >
                                            21/12/23
                                        </Text>
                                    </View>
                                    <Text>Very veri nice place. 👌</Text>
                                </View>
                                <Divider />
                                <View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: "700"
                                            }}
                                        >
                                            ErenElagz
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: "600",
                                                margin: 4
                                            }}
                                        >
                                            21/12/23
                                        </Text>
                                    </View>
                                    <Text>Very nice place. 😍</Text>
                                </View>
                                <Divider />
                                <View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                fontWeight: "700"
                                            }}
                                        >
                                            ErenElagz
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: "600",
                                                margin: 4
                                            }}
                                        >
                                            21/12/23
                                        </Text>
                                    </View>
                                    <Text>Çok nays yani herkes gelp görmeli. ❤️</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    map: {
        width: "100%",
        height: "100%"
    },
    input: {
        padding: 16,
        backgroundColor: "#fff",
        position: "absolute",
        top: 32,
        marginHorizontal: 20,
        borderRadius: 16,
        width: "92%",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 18
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.0,
        elevation: 24
    },
    container2: {
        flex: 1,
        paddingHorizontal: 16,
        gap: 12
    },
    placeTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: "#323232"
    },
    placeDescription: {
        fontSize: 12,
        fontWeight: "400",
        color: "#646464",
        lineHeight: 18,
        letterSpacing: 0
    },
    badges: {
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        borderColor: "#eee"
    },
    badgesText: {
        fontSize: 10
    },
    badgesViews: {
        gap: 4,
        flexDirection: "row"
    },
    img: {
        width: "100%",
        height: 240,
        borderRadius: 16
    }
});
