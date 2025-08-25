import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function App() {

  const cordefundo = (style) => {
    const sla = style.backgroundColor
    alert(`Cor de fundo: ${sla}`)
    console.log(`Cor de fundo: ${sla}`)
  }

  // Outro modo
// const codigoCor = (cor) => {
//   console.log(`Código da cor ${cor.slice(0)} `)
// }

  return (-
    <View style={styles.container}>
      <View style={styles.ladoalado}>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn1} onPress={() => {
            cordefundo(styles.btn1)
          }} >

          </TouchableOpacity>
        </View>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn2} onPress={() => {
            cordefundo(styles.btn2)
          }}>

          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.ladoalado}>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn3} onPress={() => {
            cordefundo(styles.btn3)
          }} >

          </TouchableOpacity>
        </View>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn4} onPress={() => {
            cordefundo(styles.btn4)
          }}>

          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.ladoalado}>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn5} onPress={() => {
            cordefundo(styles.btn5)
          }} >

          </TouchableOpacity>
        </View>

        <View style={styles.area}>
          <TouchableOpacity style={styles.btn6} onPress={() => {
            cordefundo(styles.btn6)
          }}>

          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};
