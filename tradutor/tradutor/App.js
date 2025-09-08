import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function App() {

  async function traduzirTexto(texto, idiomaAlvo = "en") {
    const key = "SUA_CHAVE";
    const endpoint = "https://api.cognitive.microsofttranslator.com";
    const region = "eastus";
    const url = `${endpoint}/translate?api-version=3.0&to=${idiomaAlvo}`;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify([{ Text: texto }]),
      headers: {
        "Ocp-Apim-Subscription-Key" : key,
        "Ocp-Apim-Subscription-Region" : region,
        "Content-Type" : "application/json"
      }
    });

    const data = await response.json();
    const traduzido = data[0].translations[0].text;
    console.log(traduzido);
    return traduzido;
  }

  useEffect(() => {
    traduzirTexto("Olá mundo", "en"); // traduz pra inglês
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tradutor funcionando...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
