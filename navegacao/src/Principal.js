import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Principal({ navigation }) {

  function chamarTela2(){
    navigation.navigate('Produtos');
  }


  function chamarTela3() {
    navigation.navigate('Tela3');
  }

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Navegação entre Telas</Text>

      <TouchableOpacity style={styles.buttons} onPress={chamarTela2}>
        <Text style={styles.textButtons}> Ver produtos </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons} onPress={chamarTela3}>
        <Text style={styles.textButtons}>Chamar Tela 3</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50
  },
  buttons: {
    width: '50%',
    height: 40,
    backgroundColor: '#00ff77',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 15
  },
  textButtons: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});

