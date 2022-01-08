import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    children: React.ReactNode,
    titulo: string,
    cor: string,
    visivel: boolean
}

// children são os elementos que são englobados pelo elemento pai
export function ComponenteComFilhos({ children, titulo, cor, visivel }: Props) {
    return (
        <View style={[
            styles.container, 
            { 
                backgroundColor: cor, 
                display: visivel ? "flex" : "none" 
            }
        ]}>
            <Text style={styles.titulo}>{titulo}</Text>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ccc",
        width: "100%",
        height: 100,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    titulo: {
        fontSize: 20,        
    }
});