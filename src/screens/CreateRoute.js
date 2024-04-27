import React, { useState } from "react";
import {
    View,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AnimatedSVG from "../components/animation/logo";
import MapView, { Marker } from "react-native-maps";
import MapViewStyle from "../utils/custommap.json";

export default function CreateRoute() {
    const [placeName, setPlaceName] = useState("");
    const [placeDescription, setPlaceDescription] = useState("");
    const [placeLatitude, setPlaceLatitude] = useState("39");
    const [placeLongtitude, setPlaceLongtitude] = useState("34");
    const [highlightText, setHighlightText] = useState("");
    const [highlights, setHighlights] = useState([]);

    const Add = () => {
        setHighlights(prevList => [...prevList, highlightText]);
        setHighlightText("");
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <StatusBar style="auto" backgroundColor="#fff" />
                <View style={styles.topBar}>
                    <View style={styles.logo}>
                        <AnimatedSVG />
                    </View>
                    <Text style={styles.title}>Add Place</Text>
                </View>
                <View>
                    <View style={styles.container2}>
                        <Text style={styles.title2}>Title</Text>
                        <View style={styles.searchBar}>
                            <TextInput
                                style={styles.input}
                                value={placeName}
                                onChangeText={text => setPlaceName(text)}
                            ></TextInput>
                        </View>
                        <Text style={styles.title2}>Description</Text>
                        <View style={styles.searchBar}>
                            <TextInput
                                style={styles.input}
                                numberOfLines={5}
                                value={placeDescription}
                                onChangeText={text => setPlaceDescription(text)}
                            ></TextInput>
                        </View>
                        <Text style={styles.title2}>Highlights</Text>
                        <View style={styles.searchBar}>
                            <TextInput
                                placeholder="Add Keyword"
                                style={styles.input}
                                value={highlightText}
                                onChangeText={setHighlightText}
                            ></TextInput>
                            <TouchableOpacity onPress={Add}>
                                <Image
                                    source={require("../assets/icons/right-arrow.png")}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            style={{ flexDirection: "row" }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={highlights}
                            renderItem={({ item }) => (
                                <View style={styles.highlight} key={item}>
                                    <Text style={{ fontSize: 12 }}>{item}</Text>
                                    <TouchableOpacity>
                                        <Image
                                            source={require("../assets/icons/close.png")}
                                            style={{ width: 12, height: 12 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.title2}>Latitude</Text>
                        <View style={styles.searchBar}>
                            <TextInput
                                style={styles.input}
                                inputMode="decimal"
                                value={placeLatitude}
                                onChangeText={text => setPlaceLatitude(text)}
                            ></TextInput>
                        </View>
                        <Text style={styles.title2}>Longtitude</Text>
                        <View style={styles.searchBar}>
                            <TextInput
                                style={styles.input}
                                inputMode="decimal"
                                value={placeLongtitude}
                                onChangeText={text => setPlaceLongtitude(text)}
                            ></TextInput>
                        </View>
                        <View style={{ borderRadius: 12 }}>
                            <MapView
                                customMapStyle={MapViewStyle}
                                style={styles.map}
                                initialRegion={{
                                    latitude: parseFloat(placeLongtitude),
                                    longitude: parseFloat(placeLongtitude),
                                    longitudeDelta: 20,
                                    latitudeDelta: 20
                                }}
                            >
                                <Marker
                                    key={1}
                                    coordinate={{
                                        latitude: parseFloat(placeLatitude),
                                        longitude: parseFloat(placeLongtitude)
                                    }}
                                    title={placeName}
                                ></Marker>
                            </MapView>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View>
                <Pressable style={[styles.button, { backgroundColor: "#323232" }]}>
                    <Text style={styles.buttonText}>Add to Places</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        paddingTop: 48,
        paddingHorizontal: 20,
        overflow: "visible"
    },
    map: { width: "100%", height: 320 },

    topBar: { flexDirection: "row", alignItems: "center", gap: 2 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    title: { fontSize: 30, fontWeight: "800" },
    title2: { fontSize: 16, fontWeight: "600" },
    icon: { width: 24, height: 24 },
    logo: { width: 32, height: 32 },
    input: { flex: 1, fontSize: 14 },
    searchBar: {
        flexDirection: "row",
        padding: 16,
        paddingHorizontal: 20,
        gap: 8,
        borderRadius: 16,
        backgroundColor: "#efefef"
    },
    buttonView: { gap: 8, flexDirection: "row" },
    button: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        flexGrow: 1,
        position: "relative",
        bottom: 8,
        width: "100%"
    },
    buttonText: { color: "#fff" },
    container2: {
        backgroundColor: "#fafafa",
        padding: 20,
        marginBottom: 12,
        gap: 12,
        borderRadius: 16
    },
    highlight: {
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
        flexDirection: "row",
        marginRight: 8,
        gap: 8,
        backgroundColor: "#efefef"
    }
});
