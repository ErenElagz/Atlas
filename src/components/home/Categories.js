import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { SvgUri } from "react-native-svg";
import Category from "../../apis/categories.json";
export default function Categories() {
    const category = Category.categories;

    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.categoriesBar}>
                    {category.map((category, index) => (
                        <TouchableOpacity key={index} style={styles.category}>
                            <SvgUri width={24} height={24} opacity={1} uri={category["iconUrl"]} />
                            <Text style={styles.categoriesText}>{category["name"]}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    categoriesBar: { flexDirection: "row", gap: 8, paddingLeft: 16 },
    category: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        borderWidth: 1,borderColor:"#efefef"
    },
    categoriesText: { fontSize: 12, fontWeight: "500" }
});
