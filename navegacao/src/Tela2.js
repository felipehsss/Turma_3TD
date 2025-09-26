import { StyleSheet, View, Image } from 'react-native';

export default function Tela2({ navigation }) {

  function voltar() {
    navigation.navigate('Principal');
  }

  const imagens = [
    require("../assets/closeup-shot-burger-with-bacon-cheese-red-coffee-mug.jpg"),
    require("../assets/closeup-shot-burger-with-bacon-cheese-red-coffee-mug.jpg"),
    require("../assets/front-view-burger-stand.jpg"),
    require("../assets/front-view-burger-stand.jpg"),
    require("../assets/still-life-delicious-american-hamburger.jpg"),
    require("../assets/still-life-delicious-american-hamburger.jpg"),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        {imagens.map((img, index) => (
          <View key={index} style={styles.card}>
            <Image source={img} style={styles.img} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  cards: {
    flexDirection: 'row',  // coloca lado a lado
    flexWrap: 'wrap',      // quebra linha se passar da largura
    justifyContent: 'center',
    gap: 10, // espaçamento entre cards (React Native 0.71+)
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    padding: 5,
    margin: 5,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});
