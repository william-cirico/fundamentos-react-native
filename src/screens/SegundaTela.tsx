import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { ComponenteComFilhos } from "../components/ComponenteComFilhos";

export function SegundaTela() {
    const [isModalVisible, setIsModalVisible] = useState(true);

    return (
        <View>
            <ComponenteComFilhos titulo="Exemplo de children" cor="yellow" visivel={true}>
                <Text>Oi</Text>
                <Text>Tudo bem?</Text>
            </ComponenteComFilhos>
            <ComponenteComFilhos titulo="Exemplo de children 2" cor="red" visivel={isModalVisible}>
                <Text>Segundo container</Text>
                <Button title="Esconder" onPress={() => setIsModalVisible(false)} />
            </ComponenteComFilhos>
            <Button title="Mostrar modal" onPress={() => setIsModalVisible(true)} />
        </View>
    );
}