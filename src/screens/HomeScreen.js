import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Categories from "../apis/categories.json";
import Routes from "../apis/routes.json";
import { SvgUri } from "react-native-svg";

export default function HomeScreen() {
    const category = Categories.categories;
    const route = Routes.routes;

    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
            <StatusBar style="auto" backgroundColor="#fff" />
            <View style={styles.header}>
                <View style={styles.topBar}>
                    <Image style={styles.logo} source={require("../assets/img/logo.png")} />
                    <Text style={styles.title}>Atlas</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#f5f5f5",
                        width: 48,
                        height: 48,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={require("../assets/img/pp.jpg")}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ gap: 8, marginTop: 16 }}>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search City, route and more..."
                        style={styles.input}
                        selectionColor={"#323232"}
                    ></TextInput>
                    <TouchableOpacity>
                        <Image source={require("../assets/icons/search.png")} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.categoriesBar}>
                            {category.map((category, index) => (
                                <TouchableOpacity key={index} style={styles.category}>
                                    <SvgUri
                                        width={24}
                                        height={24}
                                        opacity={0.75}
                                        uri={category["iconUrl"]}
                                    />
                                    <Text style={styles.categoriesText}>{category["name"]}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={{ marginTop: 32, gap: 8 }}>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 4,
                        paddingHorizontal: 16,
                        alignItems: "center"
                    }}
                >
                    <SvgUri
                        width={36}
                        height={36}
                        uri={"https://www.svgrepo.com/show/528562/route.svg"}
                    />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>Popular Routes</Text>
                        <Text style={{ fontSize: 12, fontWeight: "500" }}>
                            Recommended Routes in the Community
                        </Text>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", gap: 8, paddingLeft: 16 }}>
                        {route.map((route, index) => (
                            <TouchableOpacity key={index}>
                                <View style={styles.gallery}>
                                    <View>
                                        <Image
                                            style={{
                                                width: 200,
                                                height: 200,
                                                borderRadius: 16
                                            }}
                                            source={require("../assets/img/img.jpg")}
                                        />
                                    </View>
                                    <View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-evenly",
                                                marginTop: 12
                                            }}
                                        >
                                            <Text style={styles.text}>{route["origin"]}</Text>
                                            <SvgUri
                                                width={20}
                                                height={20}
                                                opacity={0.75}
                                                uri={
                                                    "https://www.svgrepo.com/show/528381/map-arrow-right.svg"
                                                }
                                            />
                                            <Text style={styles.text}>{route["destination"]}</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-around",
                                                marginTop: 8
                                            }}
                                        >
                                            <View
                                                style={{
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginTop: 8
                                                }}
                                            >
                                                <SvgUri
                                                    width={24}
                                                    height={24}
                                                    opacity={0.75}
                                                    uri={
                                                        "https://www.svgrepo.com/show/528597/signpost-2.svg"
                                                    }
                                                />
                                                <Text style={styles.text2}>
                                                    {route["distance"]}
                                                    <Text> Km</Text>
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginTop: 8
                                                }}
                                            >
                                                <SvgUri
                                                    width={24}
                                                    height={24}
                                                    opacity={0.75}
                                                    uri={
                                                        "https://www.svgrepo.com/show/527909/star.svg"
                                                    }
                                                />
                                                <Text style={styles.text2}>{route["rating"]}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <View style={{ marginTop: 32, gap: 8 }}>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 4,
                        paddingHorizontal: 16,
                        alignItems: "center"
                    }}
                >
                    <SvgUri
                        width={36}
                        height={36}
                        uri={"https://www.svgrepo.com/show/528324/inbox-archive.svg"}
                    />
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>Collections</Text>
                        <Text style={{ fontSize: 12, fontWeight: "500" }}>
                            Collections of the Popular Places
                        </Text>
                    </View>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingBottom: 64 }}
                >
                    <View style={{ flexDirection: "row", gap: 8, paddingLeft: 16 }}>
                        {route.map((route, index) => (
                            <TouchableOpacity key={index}>
                                <View style={styles.gallery}>
                                    <View>
                                        <Image
                                            style={{
                                                width: 200,
                                                height: 200,
                                                borderRadius: 16
                                            }}
                                            source={require("../assets/img/img.jpg")}
                                        />
                                    </View>
                                    <View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-evenly",
                                                marginTop: 12
                                            }}
                                        >
                                            <Text style={styles.text}>{route["origin"]}</Text>
                                            <SvgUri
                                                width={20}
                                                height={20}
                                                opacity={0.75}
                                                uri={
                                                    "https://www.svgrepo.com/show/528381/map-arrow-right.svg"
                                                }
                                            />
                                            <Text style={styles.text}>{route["destination"]}</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-around",
                                                marginTop: 8
                                            }}
                                        >
                                            <View
                                                style={{
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginTop: 8
                                                }}
                                            >
                                                <SvgUri
                                                    width={24}
                                                    height={24}
                                                    opacity={0.75}
                                                    uri={
                                                        "https://www.svgrepo.com/show/528597/signpost-2.svg"
                                                    }
                                                />
                                                <Text style={styles.text2}>
                                                    {route["distance"]}
                                                    <Text> Km</Text>
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginTop: 8
                                                }}
                                            >
                                                <SvgUri
                                                    width={24}
                                                    height={24}
                                                    opacity={0.75}
                                                    uri={
                                                        "https://www.svgrepo.com/show/527909/star.svg"
                                                    }
                                                />
                                                <Text style={styles.text2}>{route["rating"]}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, gap: 16, paddingVertical: 48, overflow: "visible" },
    topBar: { flexDirection: "row", alignItems: "center", gap: 2 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },

    icon: { width: 24, height: 24 },
    text: { fontSize: 14, fontWeight: "600" },
    text2: { fontSize: 12, fontWeight: "600" },
    gallery: {
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 20,
        overflow: "hidden",
        paddingBottom: 16
    },
    logo: { width: 32, height: 32 },
    title: { fontSize: 32, fontWeight: "800" },
    input: { flex: 1, fontSize: 14 },
    searchBar: {
        backgroundColor: "#fafafa",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        paddingHorizontal: 20,
        gap: 8,
        borderRadius: 24,
        marginHorizontal: 16
    },
    categoriesBar: { flexDirection: "row", gap: 8, paddingLeft: 16 },
    category: {
        backgroundColor: "#fafafa",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    categoriesText: { fontSize: 12, fontWeight: "500" }
});
