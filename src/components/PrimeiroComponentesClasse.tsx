import React from "react";
import { Text } from "react-native";

export class PrimeiroComponenteClasse extends React.Component {
    click() {
        alert("oi");
    }

    render(): React.ReactNode {
        return <Text onPress={this.click}>Componente de classe</Text>
    }
}