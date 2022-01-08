import React, { useState } from "react";
import { View } from "react-native";
import { PrimeiroComponente } from "../components/PrimeiroComponente";
import { PrimeiroComponenteClasse } from "../components/PrimeiroComponentesClasse";
import { SegundoComponente } from "../components/SegundoComponente";
import { retornaCor } from "../utils";

export function PrimeiraTela() {
    // Estado da aplicação - Sempre que o estado é modificado, a tela é renderizada novamente.
    // Não podemos modificar o estado diretamente. Ex.: cores = { cor1: "blue" };
    // Temos que utilizar a função retornada pelo hook useState() -> setNomeEstado.
    const [cores, setCores] = useState({
        cor1: "orange",
        cor2: "blue",
        cor3: "green"
    });

    // const [cor1, setCor1] = useState("orange");
    // const [cor2, setCor2] = useState("blue");
    // const [cor3, setCor3] = useState("green"); 

    function mudaCores() {
        // setCor1(retornaCor());
        // setCor2(retornaCor());
        // setCor3(retornaCor());

        setCores({
            cor1: retornaCor(),
            cor2: retornaCor(),
            cor3: retornaCor()
        });
    }



    return (
        <View>
            <PrimeiroComponente />
            <SegundoComponente cor1={cores.cor1} cor2={cores.cor2} cor3={cores.cor3} mudaCores={mudaCores} />
            <PrimeiroComponenteClasse />
        </View>
    );
}