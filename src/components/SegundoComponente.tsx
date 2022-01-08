import React from "react";
import { View, StyleSheet, Button } from "react-native";

interface Props {
    cor1?: string,
    cor2?: string,
    cor3?: string,
    mudaCores: () => void
};

export function SegundoComponente({ cor1, cor2, cor3, mudaCores }: Props) {
    const customColor1 = cor1 ? cor1 : "green";
    const customColor2 = cor2 ? cor2 : "yellow";
    const customColor3 = cor3 ? cor3 : "blue";

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container, { backgroundColor: customColor1 }]} />
            <View style={[styles.container, { backgroundColor: customColor2 }]} />
            <View style={[styles.container, { backgroundColor: customColor3 }]} />
            <Button title="Mudar cores" onPress={mudaCores} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
});