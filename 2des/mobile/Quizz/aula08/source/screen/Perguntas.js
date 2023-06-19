import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import perguntas from '../../mocks/perguntas.json';

export default function Perguntas({ navigation }) {
  const [contador, setContador] = useState(0);
  const [acerto, setAcerto] = useState(0);
  const [erro, setErro] = useState(0);
  const perguntaAtual = perguntas[contador];
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState(Array(perguntaAtual.Opcoes.length).fill(false));


  function mudarPergunta() {
    if (contador === 4) {
      mudarPagina();
    } else {
      setContador(contador + 1);
      setOpcoesSelecionadas(Array(perguntas[contador + 1].Opcoes.length).fill(false));
    }
  }

  function mudarPagina() {
    navigation.navigate('Result', { acertos: acerto, erros: erro });
  }

  const verificaResposta = (index) => {
    const respCorreta = perguntas[contador].resp;
    const opcoesAtualizadas = opcoesSelecionadas.map((valor, i) => (i === index));
    setOpcoesSelecionadas(opcoesAtualizadas);

    const timer = setTimeout(() => {
        mudarPergunta();
      }, 1000); // 5 segundos

    if (index === respCorreta) {
      setAcerto(acerto + 1);

    } else {
      setErro(erro + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/background.png")} style={styles.img} />
      <Text style={styles.h1}>Pergunta {contador + 1}</Text>
      <View style={styles.Quest}>
        <Text style={styles.Perguntas}>{perguntas[contador].Perguntas}</Text>
        <View style={styles.alternativas}>
          {perguntas[contador].Opcoes.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => verificaResposta(index)}
              style={[
                styles.opcao,
                opcoesSelecionadas[index] && (index === perguntas[contador].resp ? styles.opcaoCorreta : styles.opcaoIncorreta)
              ]}
            >
              <Text style={styles.Opcoes}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "center",
    width: '100vw',
    height: '100vh'
  },
  img: {
    width: '100vw',
    height: '100vh'
  },
  h1: {
    position: 'absolute',
    top: 0,
    fontSize: '30px',
  },
  Quest: {
    position: 'absolute',
    alignItems: 'center',
    gap: 20
  },
  alternativas: {
    marginTop: 'auto',
    gap: 20,
  },
  Perguntas: {
    fontSize: 20
  },
  opcao: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(237, 173, 82,0.4)',
  },
  opcaoCorreta: {
    backgroundColor: 'green',
  },
  opcaoIncorreta: {
    backgroundColor: 'red',
  },
  Opcoes: {
    fontSize: 20,
  },
});
