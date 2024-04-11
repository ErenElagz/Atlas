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
export default function HomeScreen() {
    const category = Categories.categories;

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <View style={styles.topBar}>
                    <Image style={styles.logo} source={require("../assets/img/logo.png")} />
                    <Text style={styles.title}>Atlas</Text>
                </View>
                <View
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
                </View>
            </View>
            <View style={{ gap: 8 }}>
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
                                    <Image
                                        width={24}
                                        height={24}
                                        source={{
                                            uri: category["iconUrl"]
                                        }}
                                    />
                                    <Text style={styles.categoriesText}>{category["name"]}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, gap: 16, paddingTop: 48, paddingHorizontal: 16 },
    topBar: { flexDirection: "row", alignItems: "center", gap: 2 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 8
    },
    icon: { width: 24, height: 24 },

    logo: { width: 32, height: 32 },
    title: { fontSize: 32, fontWeight: "800" },
    input: { flex: 1, fontSize: 14 },
    searchBar: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        paddingHorizontal: 20,
        gap: 8,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#f2f2f2"
    },
    categoriesBar: { flexDirection: "row", gap: 8 },
    category: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    categoriesText: { fontWeight: "500", fontSize: 12, color: "#646464" }
});
