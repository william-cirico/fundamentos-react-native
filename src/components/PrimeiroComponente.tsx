import React from "react"
import { Text, View, StyleSheet } from "react-native";

export function PrimeiroComponente() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Oi</Text>
            <Text>Tudo bem?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        padding: 10,
        borderColor: "black",
        color: "white",
        width: "100%"
    },
    texto: {
        fontSize: 20,
        color: "#FFF"
    }
});