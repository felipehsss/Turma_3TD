import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [erro, setErro] = useState('');

  // Função para permitir apenas números, vírgula e ponto
  const filtrarEntrada = (texto) => {
    return texto.replace(/[^0-9.,]/g, '');
  };
 
  const handlePesoChange = (texto) => {
    setPeso(filtrarEntrada(texto));
    setResultado(null);
    setClassificacao('');
    setErro('');
  };

  const handleAlturaChange = (texto) => {
    setAltura(filtrarEntrada(texto));
    setResultado(null);
    setClassificacao('');
    setErro('');
  };

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    if (!peso || !altura) {
      setErro('Preencha peso e altura!');
      setResultado(null);
      setClassificacao('');
      return;
    }
    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      setErro('Digite valores válidos!');
      setResultado(null);
      setClassificacao('');
      return;
    }
    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(`Seu IMC é: ${imc.toFixed(2)}`);
    if (imc < 18.5) setClassificacao('Abaixo do peso');
    else if (imc < 24.9) setClassificacao('Peso normal');
    else if (imc < 29.9) setClassificacao('Sobrepeso');
    else if (imc < 34.9) setClassificacao('Obesidade grau 1');
    else if (imc < 39.9) setClassificacao('Obesidade grau 2');
    else setClassificacao('Obesidade grau 3');
    setErro('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora de IMC</Text>
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={handlePesoChange}
          maxLength={6}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (m)"
          keyboardType="numeric"
          value={altura}
          onChangeText={handleAlturaChange}
          maxLength={4}
        />
        {erro ? <Text style={styles.erro}>{erro}</Text> : null}
        <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
          <Text style={styles.textoBotao}>Calcular IMC</Text>
        </TouchableOpacity>
        {resultado && <Text style={styles.resultado}>{resultado}</Text>}
        {classificacao && <Text style={styles.classificacao}>{classificacao}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}


